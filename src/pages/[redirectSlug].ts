import type { APIRoute } from 'astro'

import redirects from '@config/redirects.json'

export const get: APIRoute = ({ params: { redirectSlug } }) => {
  const url = redirects[redirectSlug]

  if (!url) {
    return new Response(null, {
      status: 404,
    })
  }

  return new Response(null, {
    status: 301,
    headers: {
      Location: url,
    },
  })
}

