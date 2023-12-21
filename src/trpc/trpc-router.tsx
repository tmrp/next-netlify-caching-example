import { getBaseUrl } from '@/lib/utils/getBaseUrl';

import { createTRPCRouter, publicProcedure } from './trpc-server';

const unsplashRouter = createTRPCRouter({
  getRandomImages: publicProcedure.query(async ({ ctx }) => {
    const { response } = await ctx.unsplash.photos.getRandom({
      count: 12,
      orientation: 'landscape',
      query: 'nature',
    });

    return response;
  }),
});

const netlifyRouter = createTRPCRouter({
  invalidateCache: publicProcedure.mutation(async () => {
    await fetch(`${getBaseUrl()}/.netlify/functions/purge-cache`);
  }),
});

export const trpcRouter = createTRPCRouter({
  netlify: netlifyRouter,
  unsplash: unsplashRouter,
});

export type trpcRouter = typeof trpcRouter;
