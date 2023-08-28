import fs from 'fs';

import withdraws from './queries/withdraws';
import repays from './queries/repays';
import groupBy from './utils';
import repaysAtMaturity from './queries/repaysAtMaturity';
import withdrawAtMaturities from './queries/withdrawAtMaturities';
import { MALICIOUS_RECEIVERS } from './constants';

async function losses() {
  const allWithdrawals = [...(await withdraws()), ...(await withdrawAtMaturities())];
  const allRepays = [...(await repays()), ...(await repaysAtMaturity())];
  const externalWithdrawals = allWithdrawals.filter(({ receiver, owner }) => receiver !== owner);
  const externalRepays = allRepays.filter(({ caller, borrower }) => caller !== borrower);
  const maliciousWithdrawals = externalWithdrawals.filter(({ receiver }) => MALICIOUS_RECEIVERS.includes(receiver));
  const maliciousRepays = externalRepays.filter(({ caller }) => MALICIOUS_RECEIVERS.includes(caller));
  const victims = [...new Set(externalWithdrawals.map(({ owner }) => owner))];
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
          total: mWithdrawals.reduce((sum, { assets }) => sum + BigInt(assets), 0n),
        }));
        const marketTotalRepay = Object.entries(marketRepays).map(([market, mRepays]) => ({
          market,
          total: mRepays.reduce((sum, { assets }) => sum + BigInt(assets), 0n),
        }));
        const net = marketTotalWithdraw.map(({ market, total: withdrawTotal }) => {
          const repayTotal = marketTotalRepay.find((repay) => repay.market === market)?.total || 0n;
          return [market, String(withdrawTotal - repayTotal)];
        });
        const loss: Record<`0x${string}`, string> = Object.fromEntries(net);
        return [victim, loss] as const;
      })
      .filter(([_, total]) => Object.keys(total).length),
  );
}

async function main() {
  fs.writeFileSync('./output/losses.json', JSON.stringify(await losses(), null, 2));
  console.log('done');
}

main();
