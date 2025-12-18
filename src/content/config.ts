import { defineCollection, z } from 'astro:content';

const papersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    authors: z.array(z.string()),
    organization: z.string().optional(),
    pdfUrl: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    bibtex: z.string().optional(),
  }),
});

const disseminationCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eventDate: z.coerce.date(),
    eventType: z.enum(['conference', 'workshop', 'presentation', 'keynote', 'poster', 'seminar', 'webinar', 'other']),
    presenters: z.array(z.string()),
    location: z.string().optional(),
    organization: z.string().optional(),
    posterUrl: z.string().optional(),
    slidesUrl: z.string().optional(),
    videoUrl: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  papers: papersCollection,
  dissemination: disseminationCollection,
};
