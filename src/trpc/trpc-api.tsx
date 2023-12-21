import { createTRPCProxyClient, httpBatchLink, loggerLink } from '@trpc/client';
import { headers } from 'next/headers';

import { transformer, getUrl } from './trpc-utils';
import { trpcRouter } from './trpc-router';

export const api = createTRPCProxyClient<trpcRouter>({
  links: [
    loggerLink({
      enabled: (op) =>
        process.env.NODE_ENV === 'development' ||
        (op.direction === 'down' && op.result instanceof Error),
    }),
    httpBatchLink({
      headers() {
        const heads = new Map(headers());
        heads.set('x-trpc-source', 'react');
        return Object.fromEntries(heads);
      },
      url: getUrl(),
    }),
  ],
  transformer,
});
