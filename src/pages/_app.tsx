import isPropValid from '@emotion/is-prop-valid';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import SimpleReactLightbox from 'simple-react-lightbox';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import { AxiosInterceptor } from 'services/AxiosInstance';
import { AuthProvider } from 'services/contexts/AuthContext';
import Header from 'components/Header';
import Footer from 'components/Footer';


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
            <Header />
            <SimpleReactLightbox>
              <Component {...pageProps} />
            </SimpleReactLightbox>
            <Footer />
          </ThemeProvider>
        </AuthProvider>
      </StyleSheetManager>
    </AxiosInterceptor>
  );
}

export default App;

