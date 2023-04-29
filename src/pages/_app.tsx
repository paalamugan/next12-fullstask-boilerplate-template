import type { AppProps } from 'next/app';
import { AuthProvider } from '~/state/auth/AuthContext';
import { NextPageWithLayout } from '~/typings/page';
import './globals.css';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>;
}

export default MyApp;
