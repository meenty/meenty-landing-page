import type { CollectionConfig } from 'payload'

export const Messages: CollectionConfig = {
  slug: 'messages',
  admin: {
    useAsTitle: 'message',
    defaultColumns: ['message', 'createdAt'],
  },
  access: {
    create: () => true,
  },
  fields: [
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
  ],
}
