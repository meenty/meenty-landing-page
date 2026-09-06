import type { GlobalAfterChangeHook } from 'payload'

export const triggerRebuild: GlobalAfterChangeHook = async () => {
  const token = process.env.GH_PAT
  if (!token) {
    console.log('[triggerRebuild] GH_PAT not set; skipping Pages dispatch')
    return
  }

  const owner = process.env.GH_OWNER || 'nemoNoboru'
  const repo = process.env.GH_REPO || 'Mentee-landing'
  const workflow = process.env.GH_WORKFLOW || 'deploy.yml'
  const ref = process.env.GH_REF || 'main'

  try {
    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${workflow}/dispatches`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
        },
        body: JSON.stringify({ ref }),
      },
    )

    if (!res.ok) {
      console.error(`[triggerRebuild] dispatch failed: ${res.status} ${await res.text()}`)
    } else {
      console.log('[triggerRebuild] GitHub Pages rebuild dispatched')
    }
  } catch (e) {
    console.error('[triggerRebuild] dispatch error:', e)
  }
}
