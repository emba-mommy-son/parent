import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import RootStack from './app/RootStack';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RootStack />
    </QueryClientProvider>
  );
};

export default App;
