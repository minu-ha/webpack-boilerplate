import Navbar from 'components/Navbar';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Routing from './routes/Routing';

import 'util/translation/config';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, // ...
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
      <Navbar />
      <Routing />
    </QueryClientProvider>
  );
};

export default App;
