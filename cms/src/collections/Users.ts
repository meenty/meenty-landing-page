import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    create: async ({ req }) => {
      const { totalDocs } = await req.payload.count({ collection: 'users' })
      return totalDocs === 0
    },
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
}
