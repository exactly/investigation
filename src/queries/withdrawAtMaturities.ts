import { FIRST_TIMESTAMP, LAST_TIMESTAMP, SUBGRAPH } from '../constants';
import { Withdraw } from './withdraws';

export default async function () {
  let last: string | undefined = '';
  const result = [];
  console.log('fetching withdrawals at maturity...');
  do {
    // eslint-disable-next-line no-await-in-loop
    const response = await fetch(SUBGRAPH, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `{
          withdrawAtMaturities(
            first: 1000
            where: { ${
              last ? `id_gt: "${last}",` : ''
            } timestamp_gte: ${FIRST_TIMESTAMP}, timestamp_lte: ${LAST_TIMESTAMP}}
            orderBy: id
            orderDirection: asc
          ) { id, market, caller, receiver, owner, assets }
        }`,
      }),
    });
    // eslint-disable-next-line no-await-in-loop
    const { withdrawAtMaturities } = (await response.json()).data as { withdrawAtMaturities: Withdraw[] };
    last = withdrawAtMaturities.length ? withdrawAtMaturities[withdrawAtMaturities.length - 1]?.id : undefined;
    result.push(...withdrawAtMaturities);
  } while (last);
  console.log(`got ${result.length} withdrawals at maturity`);
  return result;
}
