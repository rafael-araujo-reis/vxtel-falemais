import { AppProps } from 'next/app';
import Header from '../components/Header';
import { PlansProvider } from '../hooks/usePlans';
import '../styles/global.scss';
import { itemsMenu } from '../utils/constantes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlansProvider>
      <Header itemsMenu={itemsMenu} />
      <Component {...pageProps} />
    </PlansProvider>
  );
}

export default MyApp;
