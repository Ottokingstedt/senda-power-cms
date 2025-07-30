import { defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Bio Text',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'offerings',
      title: 'What I Offer:',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
          ],
        },
      ],
    },
    {
        name: 'howIWork',
        title: 'How I Work:',
        type: 'array',
        of: [{ type: 'block' }],
      },
  ],
})
