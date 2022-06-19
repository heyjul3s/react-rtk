import React from 'react';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';

import { configureAppStore } from '@/store/store';
import { AppRoutes } from './AppRoutes';
import { theme } from '@/theme';

export function App() {
  const store = configureAppStore();

  return (
    <React.StrictMode>
      <Provider store={store}>
        <HelmetProvider>
          <ChakraProvider theme={theme}>
            <AppRoutes />
          </ChakraProvider>
        </HelmetProvider>
      </Provider>
    </React.StrictMode>
  );
}
