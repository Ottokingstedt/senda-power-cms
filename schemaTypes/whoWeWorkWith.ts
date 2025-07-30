import { defineType } from 'sanity'

export default defineType({
  name: 'servicesSection',
  title: 'Who We Work With Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Services',
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
  ],
});

