import type { APIRoute } from 'astro'

import getTopContributors from '@utils/getTopContributors'

const OPTIONS = {
  repo: 'dpmland/dpm',
  take: 10,
}

let contributors = await getTopContributors(OPTIONS)

const REFETCH_TIME = 60 * 5 * 1000 // 5 minutes

setInterval(async () => {
  contributors = await getTopContributors(OPTIONS)
}, REFETCH_TIME)

export const get: APIRoute = () =>
  new Response(JSON.stringify(contributors), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
