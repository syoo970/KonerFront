import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import Navigation from "../components/Navigation";
import { DefaultNav } from "../components/Navigation/NavLists";
import KonerGlobalStyle from "../styles/konerGlobalStyle";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <KonerGlobalStyle />
        <Navigation {...DefaultNav} />
        <Component {...pageProps} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
