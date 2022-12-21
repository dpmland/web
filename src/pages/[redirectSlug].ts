import type { APIRoute } from 'astro'

import redirects from '@config/redirects.json'

export const get: APIRoute = ({ params: { redirectSlug } }) => {
  const url = redirects[redirectSlug]

  return new Response(null, {
    status: 301,
    headers: {
      Location: url,
    },
  })
}

export const getStaticPaths = () =>
  Object.keys(redirects).map((redirectSlug) => ({ params: { redirectSlug } }))
