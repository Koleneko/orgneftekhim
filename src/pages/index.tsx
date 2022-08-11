import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ОРГНЕФТЕХИМ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={
          "mobile:text-[20px] mobile:h-48 mobile:w-72  text-4xl flex items-center justify-center bg-[#ECECEC] rounded-2xl tablet:h-[20%] tablet:w-[40%]"
        }
      >
        САЙТ В РАЗРАБОТКЕ
      </div>
    </>
  );
};

export default Home;
