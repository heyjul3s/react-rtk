import { extendTheme } from '@chakra-ui/react';
import { components } from './components';
import { colors, fonts } from './foundations/index';

export const theme = extendTheme({
  colors,
  components,
  fonts,
  styles: {
    global: () => ({
      body: {
        fontFamily: 'body',
        lineHeight: 'base'
      }
    })
  }
});
