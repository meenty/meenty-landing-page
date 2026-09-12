import type { GlobalConfig } from 'payload'

import { triggerRebuild } from '../hooks/triggerRebuild'

export const SiteContent: GlobalConfig = {
  slug: 'site-content',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [triggerRebuild],
  },
  admin: {
    group: 'Content',
  },
  fields: [
    {
      type: 'group',
      name: 'hero',
      label: 'Hero',
      fields: [
        { name: 'headline', type: 'text', required: true },
        {
          name: 'headlineEm',
          type: 'text',
          admin: { description: 'Word in the headline to italicize (e.g. "loves")' },
        },
        { name: 'subtitle', type: 'textarea', required: true },
        { name: 'freeSticker', type: 'text' },
        { name: 'manifesto', type: 'textarea' },
      ],
    },
    {
      type: 'group',
      name: 'mission',
      label: 'Mission',
      fields: [
        { name: 'heading', type: 'text', required: true },
        { name: 'body', type: 'textarea', required: true },
      ],
    },
    {
      type: 'group',
      name: 'vision',
      label: 'Vision',
      fields: [
        { name: 'heading', type: 'text', required: true },
        { name: 'body', type: 'textarea', required: true },
      ],
    },
    {
      type: 'group',
      name: 'how',
      label: 'How it works',
      fields: [
        { name: 'heading', type: 'text', required: true },
        { name: 'note', type: 'text' },
        {
          name: 'steps',
          type: 'array',
          required: true,
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'body', type: 'textarea', required: true },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'people',
      label: 'People / mentors',
      fields: [
        { name: 'heading', type: 'text', required: true },
        { name: 'lead', type: 'textarea', required: true },
        { name: 'note', type: 'text' },
        { name: 'caption', type: 'text' },
        {
          name: 'profiles',
          type: 'array',
          fields: [
            {
              name: 'kind',
              type: 'select',
              options: [
                { label: 'Mentor', value: 'mentor' },
                { label: 'Graduate', value: 'grad' },
              ],
              defaultValue: 'mentor',
            },
            { name: 'name', type: 'text', required: true },
            { name: 'meta', type: 'text' },
            { name: 'badge', type: 'text' },
            { name: 'bio', type: 'textarea' },
            { name: 'leaves', type: 'number', min: 0, max: 5, defaultValue: 5 },
            { name: 'tys', type: 'text' },
            { name: 'quote', type: 'textarea' },
            { name: 'quoteFrom', type: 'text' },
            { name: 'learned', type: 'text' },
            { name: 'now', type: 'text' },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'values',
      label: 'Values',
      fields: [
        { name: 'heading', type: 'text', required: true },
        { name: 'note', type: 'text' },
        {
          name: 'items',
          type: 'array',
          required: true,
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'body', type: 'textarea', required: true },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'about',
      label: 'About / Our story',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'heading', type: 'text', required: true },
        {
          name: 'blocks',
          type: 'array',
          required: true,
          fields: [
            {
              name: 'kind',
              type: 'select',
              options: [
                { label: 'Paragraph', value: 'text' },
                { label: 'Highlight', value: 'highlight' },
              ],
              defaultValue: 'text',
            },
            { name: 'body', type: 'textarea', required: true },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'message',
      label: 'Message section',
      fields: [
        { name: 'heading', type: 'text', required: true },
        { name: 'sub', type: 'textarea' },
        { name: 'placeholder', type: 'text' },
      ],
    },
    {
      type: 'group',
      name: 'close',
      label: 'Closing section',
      fields: [
        { name: 'heading', type: 'text', required: true },
        { name: 'sub', type: 'textarea' },
        { name: 'note', type: 'text' },
        { name: 'storeNote', type: 'text' },
      ],
    },
    {
      type: 'group',
      name: 'match',
      label: 'Match section',
      fields: [
        { name: 'heading', type: 'text' },
        { name: 'lead', type: 'textarea' },
      ],
    },
    {
      type: 'group',
      name: 'loop',
      label: 'Loop section',
      fields: [
        { name: 'heading', type: 'text' },
        { name: 'lead', type: 'textarea' },
      ],
    },
  ],
}
