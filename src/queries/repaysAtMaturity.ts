import { FIRST_TIMESTAMP, LAST_TIMESTAMP, SUBGRAPH } from '../constants';
import { Repay } from './repays';

export default async function () {
  let last: string | undefined = '';
  const result = [];
  console.log('fetching repays at maturity...');
  do {
    // eslint-disable-next-line no-await-in-loop
    const response = await fetch(SUBGRAPH, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `{
          repayAtMaturities(
            first: 1000
            where: { ${
              last ? `id_gt: "${last}",` : ''
            } timestamp_gte: ${FIRST_TIMESTAMP}, timestamp_lte: ${LAST_TIMESTAMP}}
            orderBy: id
            orderDirection: asc
          ) { id, market, caller, borrower, assets }
          }`,
      }),
    });
    // eslint-disable-next-line no-await-in-loop
    const { repayAtMaturities } = (await response.json()).data as { repayAtMaturities: Repay[] };
    last = repayAtMaturities.length ? repayAtMaturities[repayAtMaturities.length - 1]?.id : undefined;
    result.push(...repayAtMaturities);
  } while (last);
  console.log(`got ${result.length} repays at maturity`);
  return result;
}
