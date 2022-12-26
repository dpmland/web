import type { APIRoute } from 'astro'
import type Contributor from '@types/contributor'

import getTopContributors from '@utils/getTopContributors'

const OPTIONS = {
  repo: 'dpmland/dpm',
  take: 10,
}

let contributors: Contributor[];

const REFETCH_TIME = 60 * 5 * 1000 // 5 minutes

setInterval(async () => {
  contributors = await getTopContributors(OPTIONS)
}, REFETCH_TIME)

export const get: APIRoute = async () => {
  if(!contributors) contributors = await getTopContributors(OPTIONS)

  return new Response(JSON.stringify(contributors), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
  