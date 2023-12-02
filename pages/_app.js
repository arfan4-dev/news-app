import store from '@/src/store';
import '../styles/globals.scss'
import { QueryClientProvider,QueryClient } from 'react-query'
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  const client=new QueryClient();
  return <QueryClientProvider client={client}><Provider store={store}><Component {...pageProps} /></Provider> </QueryClientProvider> 
}

export default MyApp
