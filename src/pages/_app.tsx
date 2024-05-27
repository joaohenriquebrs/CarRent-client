import isPropValid from '@emotion/is-prop-valid';
import { AppProps } from 'next/app';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import SimpleReactLightbox from 'simple-react-lightbox';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SimpleReactLightbox>
          <Component {...pageProps} />
        </SimpleReactLightbox>
      </ThemeProvider>
    </StyleSheetManager>
  );
}

export default App;
