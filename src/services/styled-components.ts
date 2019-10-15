// import theme from 'styles/theme';
import { ThemedStyledComponentsModule } from '../../node_modules/@types/styled-components';
// @ts-ignore
import * as styledComponents from '../../node_modules/styled-components/dist/styled-components.browser.cjs';

const theme = {
  color: {
    black: '#000',
    prime: '#000',
  },
};

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ServerStyleSheet,
  StyleSheetManager,
  withTheme,
} = styledComponents as ThemedStyledComponentsModule<typeof theme>;

// Export functions
export { css, createGlobalStyle, keyframes, ThemeProvider, ServerStyleSheet, StyleSheetManager, withTheme };

// Export styled object as default
export default styled;
