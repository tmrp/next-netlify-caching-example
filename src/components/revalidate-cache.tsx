'use client';

import { apiReact } from '@/trpc/trpc-client';
import { useCallback } from 'react';

export const RevalidateCache = () => {
  const revalidate = apiReact.netlify.invalidateCache.useMutation({
    onSuccess() {
      location.reload();
    },
  });

  const handleRevalidate = useCallback(() => {
    revalidate.mutate();
  }, [revalidate]);

  return (
    <button
      className="bg-green-800 p-2 rounded-md"
      disabled={revalidate.isLoading}
      onClick={handleRevalidate}
    >
      {!revalidate.isLoading ? 'Revalidate' : 'Revalidating...'}
    </button>
  );
};
