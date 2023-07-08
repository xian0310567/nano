import "@/styles/globals.css";
import { GetServerSideProps } from "next";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { RecoilRoot } from "recoil";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

import Layout from "@/components/layout/Layout";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </SessionProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const session = await getServerSession(context.req, context.res, authOptions);

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/",
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {
      // session,
    },
  };
};
