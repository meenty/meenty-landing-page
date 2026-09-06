import { writeFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const CMS_URL = process.env.CMS_URL || 'https://cms.mansus.org'
const OUT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/content.json')

async function main() {
  try {
    const res = await fetch(`${CMS_URL}/api/globals/site-content`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    writeFileSync(OUT, JSON.stringify(data, null, 2))
    console.log(`[fetch-content] wrote content.json from ${CMS_URL}`)
  } catch (e) {
    if (!existsSync(OUT)) throw e
    console.warn(`[fetch-content] fetch failed, keeping committed snapshot: ${e.message}`)
  }
}

main()
