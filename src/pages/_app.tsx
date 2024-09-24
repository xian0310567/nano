import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "@/components/layout/Layout";
import SWRProvider from "@/components/layout/SWRProvider";
import RedirectProvider from "@/components/layout/RedirectProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SWRProvider>
        <RedirectProvider />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRProvider>
    </>
  );
}
