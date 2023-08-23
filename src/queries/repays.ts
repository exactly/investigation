import { INIT_BLOCK, LAST_TIMESTAMP, SUBGRAPH } from '../constants';

type Repay = {
  id: string;
  market: `0x${string}`;
  caller: `0x${string}`;
  borrower: `0x${string}`;
  assets: bigint;
};

export default async function () {
  let last: string | undefined = '';
  const result = [];
  console.log('fetching repays...');
  do {
    // eslint-disable-next-line no-await-in-loop
    const response = await fetch(SUBGRAPH, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `{
          repays(
            first: 1000
            block: { number_gte: ${INIT_BLOCK}}
            where: { id_gt: "${last}", timestamp_lte: ${LAST_TIMESTAMP} }
            orderBy: id
            orderDirection: asc
          ) { id, market, caller, borrower, assets }
          }`,
      }),
    });
    // eslint-disable-next-line no-await-in-loop
    const { repays } = (await response.json()).data as { repays: Repay[] };
    last = repays.length ? repays[repays.length - 1]?.id : undefined;
    result.push(...repays);
  } while (last);
  console.log(`got ${result.length} repays`);
  return result;
}
