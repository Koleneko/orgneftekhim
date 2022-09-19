import type { AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import Layout from "src/components/layouts/Layout";
import "../styles/globals.css";

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <Head>
        <title>{`ОРГНЕФТЕХИМ · ${pageProps.title}`}</title>
        <meta name="yandex-verification" content="baaf62fcbc987ba4" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};
export default MyApp;
