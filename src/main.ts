import fs from 'fs';
import { MALICIOUS_RECEIVERS } from './constants';
import withdraws from './queries/withdraws';
import getRepays from './queries/repays';
import groupBy from './utils';

async function losses() {
  const withdrawals = await withdraws();
  const repays = await getRepays();
  const maliciousWithdrawals = withdrawals.filter(({ receiver }) =>
    Object.keys(MALICIOUS_RECEIVERS).includes(receiver),
  );
  const maliciousRepays = repays.filter(({ caller }) => Object.keys(MALICIOUS_RECEIVERS).includes(caller));
  const victims = [
    ...new Set(withdrawals.filter(({ receiver, owner }) => receiver !== owner).map(({ owner }) => owner)),
  ];
  return Object.fromEntries(
    victims
      .map((victim) => {
        const marketWithdrawals = groupBy(
          maliciousWithdrawals.filter(({ owner }) => owner === victim),
          ({ market }) => market,
        );
        const marketRepays = groupBy(
          maliciousRepays.filter(({ borrower }) => borrower === victim),
          ({ market }) => market,
        );
        const marketTotalWithdraw = Object.entries(marketWithdrawals).map(([market, mWithdrawals]) => ({
          market,
          total: mWithdrawals.reduce((sum, w) => sum + BigInt(w.assets), 0n),
        }));
        const marketTotalRepay = Object.entries(marketRepays).map(([market, mRepays]) => ({
          market,
          total: mRepays.reduce((sum, r) => sum + BigInt(r.assets), 0n),
        }));
        const net = marketTotalWithdraw.map(({ market, total: withdrawTotal }) => {
          const repayTotal = marketTotalRepay.find((r) => r.market === market)?.total || 0n;
          return [market, String(withdrawTotal - repayTotal)];
        });
        const loss: Record<`0x${string}`, string> = Object.fromEntries(net);
        return [victim, loss] as const;
      })
      .filter(([_, total]) => Object.keys(total).length),
  );
}

async function main() {
  fs.writeFileSync('./src/losses.json', JSON.stringify(await losses(), null, 2));
  console.log('done');
}

main();
