import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ОРГНЕФТЕХИМ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={"placeholder-box"}>САЙТ В РАЗРАБОТКЕ</div>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: "/about",
    },
    props: {},
  };
};
