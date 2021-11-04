import { extendTheme } from '@chakra-ui/react';
import { colors, fonts } from './foundations/index';
import { components } from './components';

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
