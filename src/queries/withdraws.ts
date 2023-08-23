import { INIT_BLOCK, LAST_TIMESTAMP, SUBGRAPH } from '../constants';

type Withdraw = {
  id: string;
  market: `0x${string}`;
  caller: `0x${string}`;
  receiver: `0x${string}`;
  owner: `0x${string}`;
  assets: bigint;
};

export default async function () {
  let last: string | undefined = '';
  const result = [];
  console.log('fetching withdrawals...');
  do {
    // eslint-disable-next-line no-await-in-loop
    const response = await fetch(SUBGRAPH, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `{
          withdraws(
            first: 1000
            block: { number_gte: ${INIT_BLOCK}}
            where: { id_gt: "${last}", timestamp_lte: ${LAST_TIMESTAMP}}
            orderBy: id
            orderDirection: asc
          ) { id, market, caller, receiver, owner, assets }
        }`,
      }),
    });
    // eslint-disable-next-line no-await-in-loop
    const { withdraws } = (await response.json()).data as { withdraws: Withdraw[] };
    last = withdraws.length ? withdraws[withdraws.length - 1]?.id : undefined;
    result.push(...withdraws);
  } while (last);
  console.log(`got ${result.length} withdrawals`);
  return result;
}
