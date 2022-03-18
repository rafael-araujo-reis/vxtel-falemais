import { AppProps } from 'next/app';
import '../../styles/global.scss';
import Header from '../components/Header';
import { itemsMenu } from '../models/constantes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header itemsMenu={itemsMenu} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;