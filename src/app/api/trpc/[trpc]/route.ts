import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { createTRPCContext } from '@/trpc/trpc-server';
import { trpcRouter } from '@/trpc/trpc-router';
import { NextRequest } from 'next/server';

const handler = (request: NextRequest) =>
  fetchRequestHandler({
    createContext: () => createTRPCContext({ req: request }),
    endpoint: '/api/trpc',
    onError:
      process.env.NODE_ENV === 'development'
        ? ({ error, path }) => {
            console.error(
              `❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`
            );
          }
        : undefined,
    req: request,
    router: trpcRouter,
  });

export { handler as POST, handler as GET };
