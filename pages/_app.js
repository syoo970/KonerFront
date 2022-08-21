import { useState } from "react";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import Navigation from "../components/Navigation";
import { DefaultNav } from "../components/Navigation/NavLists";
import KonerGlobalStyle from "../styles/konerGlobalStyle";

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <KonerGlobalStyle />
          <Navigation {...DefaultNav} />
          <Component {...pageProps} />
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
