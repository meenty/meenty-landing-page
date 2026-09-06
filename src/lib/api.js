export const CMS_URL = import.meta.env.VITE_CMS_URL || 'https://cms.mansus.org'

export async function postToCms(path, body) {
  const res = await fetch(`${CMS_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(`Request failed (${res.status})`)
  return res.json()
}
