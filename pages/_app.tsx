import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "../styles/globals.css";

const queryClient = new QueryClient();

function MyApp({
  Component,
  pageProps,
}: AppProps
// <{
//   session: Session;
// }>
) {
  return (
    // <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    // </SessionProvider>
  );
}

export default MyApp;
