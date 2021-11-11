import React from 'react';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';

import { configureAppStore } from '@/store/store';
import { App } from './App';
import { theme } from '@/theme';

interface Props {
  Component: typeof App;
}

export function ConnectedApp({ Component }: Props) {
  const store = configureAppStore();

  return (
    <Provider store={store}>
      <HelmetProvider>
        <ChakraProvider theme={theme}>
          <Component />
        </ChakraProvider>
      </HelmetProvider>
    </Provider>
  );
}
