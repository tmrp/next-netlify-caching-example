'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { createTRPCReact } from '@trpc/react-query';
import { httpBatchLink } from '@trpc/client';
import React, { useRef } from 'react';

import { transformer, getUrl } from './trpc-utils';
import { trpcRouter } from './trpc-router';

export const apiReact = createTRPCReact<trpcRouter>({});

interface TrpcClientProviderProps {
  children: React.ReactNode;
  headers: Headers;
}
export const TrpcClientProvider: React.FC<TrpcClientProviderProps> = ({
  children,
  headers,
}) => {
  const queryClientRef = useRef(new QueryClient());
  const trpcClientRef = useRef(
    apiReact.createClient({
      links: [
        httpBatchLink({
          headers() {
            const heads = new Map(headers);
            heads.set('x-trpc-source', 'react');
            return Object.fromEntries(heads);
          },
          url: getUrl(),
        }),
      ],
      transformer,
    })
  );

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <apiReact.Provider
        queryClient={queryClientRef.current}
        client={trpcClientRef.current}
      >
        {children}
      </apiReact.Provider>
    </QueryClientProvider>
  );
};
