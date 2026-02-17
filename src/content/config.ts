import { defineCollection} from "astro:content";
import { z } from "astro/zod"

const projectsCollection = defineCollection({
  type: "content",
  schema: ({image}) => z.object({
    title: z.string(),
    description: z.string(),
    imageUrl: image(),
    tags: z.array(z.string()).optional(),
    liveUrl: z.string().optional(),
    githubUrl: z.string().optional(),
  }),
});

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    imageUrl: z.string(),
    tags: z.array(z.string()).optional(),
    date: z.string(),
  }),
});

export const collections = {
  projects: projectsCollection,
  posts: postsCollection,
};
