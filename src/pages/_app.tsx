import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "@/components/layout/Layout";
import RedirectProvider from "@/components/layout/RedirectProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RedirectProvider />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
