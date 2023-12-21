import { type inferRouterOutputs, type inferRouterInputs } from '@trpc/server';
import { getBaseUrl } from '@/lib/utils/getBaseUrl';
import superjson from 'superjson';

import { trpcRouter } from './trpc-router';

export const transformer = superjson;

export const getUrl = () => {
  return getBaseUrl() + '/api/trpc';
};

export type RouterInputs = inferRouterInputs<trpcRouter>;

export type RouterOutputs = inferRouterOutputs<trpcRouter>;
