import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { store } from '@/store/store';
import { theme } from '@/theme';
import { AppRoutes } from './AppRoutes';

export function App() {
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
