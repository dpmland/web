export interface Contributor {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  contributions: number
}

const getTopContributors = async ({
  repo,
  take,
}: {
  repo: string
  take: number
  token?: string
}) => {
  const url = `https://api.github.com/repos/${repo}/contributors?q=contributions&order=desc&per_page=${take}`

  const response = await fetch(url)

  if (!response.ok)
    throw new Error(`Failed to fetch contributors: ${response.statusText}`)

  const contributors = (await response.json()) as Contributor[]

  return contributors.map((contributor) => ({
    name: contributor.login,
    avatar: contributor.avatar_url,
    url: contributor.html_url,
  }))
}

export default getTopContributors
