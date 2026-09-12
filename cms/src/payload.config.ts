import path from 'path'
import { fileURLToPath } from 'url'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Waitlist } from './collections/Waitlist'
import { Messages } from './collections/Messages'
import { SiteContent } from './globals/SiteContent'
import { up as initialUp, down as initialDown } from './migrations/20260906_174814'
import { up as valuesUp, down as valuesDown } from './migrations/20260912_103500'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Waitlist, Messages],
  globals: [SiteContent],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-change-me',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
    push: true,
    prodMigrations: [
      {
        name: '20260906_174814',
        up: initialUp,
        down: initialDown,
      },
      {
        name: '20260912_103500',
        up: valuesUp,
        down: valuesDown,
      },
    ],
  }),
  cors: [
    process.env.FRONTEND_URL || 'https://meenty.app',
    'https://nemoNoboru.github.io',
    'http://localhost:5173',
  ],
  sharp,
})
