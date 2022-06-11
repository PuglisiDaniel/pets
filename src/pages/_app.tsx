import '../ui/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material';
import tema from '../ui/themes/tema';
import Header from '../ui/components/header/header';
import HeaderADM from '../ui/components/headerADM/headerADM';
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();
  return (
    <ThemeProvider theme={tema}>
      {router.pathname === '/' ? <Header /> : <HeaderADM />}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp

