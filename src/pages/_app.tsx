import isPropValid from '@emotion/is-prop-valid';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import SimpleReactLightbox from 'simple-react-lightbox';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import { AxiosInterceptor } from 'services/AxiosInstance';
import { AuthContext, AuthProvider } from 'services/contexts/AuthContext';

function App({ Component, pageProps }: AppProps) {
  return (
    <AxiosInterceptor>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <Head>
              <title>CarRent Verzel</title>
            </Head>
            <GlobalStyles />
            <SimpleReactLightbox>
              <Component {...pageProps} />
            </SimpleReactLightbox>
          </ThemeProvider>
        </AuthProvider>
      </StyleSheetManager>
    </AxiosInterceptor>
  );
}

export default App;
