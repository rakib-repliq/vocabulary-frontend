'use client';
import { PropsWithChildren, useState } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const TanstackProvider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanstackProvider;
