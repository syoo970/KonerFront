import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <QueryClientProvider queryClient={QueryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
