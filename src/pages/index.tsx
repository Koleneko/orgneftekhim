import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import Image from "next/image";
import logo from "../../public/assets/images/LOGO.svg";
import tel from "../../public/assets/images/tel.svg";
import maill from "../../public/assets/images/maill.svg";
import logow from "../../public/assets/images/logoWhite.svg";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>ОРГНЕФТЕХИМ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={""}>
        <div className={"flex justify-between"}>
          <div className={"flex items-center"}>
            <Image src={tel} alt="" />
            +7 (915) 097-23-97
          </div>

          <div className={"flex flex-col"}>
            <Image src={logo} alt="" />
            ОРГНЕФТЕХИМ
          </div>

          <div className={"flex items-center"}>
            <Image src={maill} alt="" />
            orgneftekhim@gmail.com
          </div>
        </div>
        <div
          className={
            "h-20 flex items-center justify-around bg-[#000000] text-white"
          }
        >
          <a>О компании</a>
          <a>Продукция</a>
          <a>Паспорта качества</a>
          <a>Клиентам</a>
          <a>Контакты</a>
        </div>
        <div
          className={"h-screen bg-[url('../../public/assets/images/bg.png')]"}
        >
          <div className={"h-screen flex items-center justify-center"}>
            <div
              className={
                "text-4xl flex items-center justify-center bg-[#ECECEC] rounded-2xl h-[16rem] w-[32rem]"
              }
            >
              САЙТ В РАЗРАБОТКЕ
            </div>
          </div>
        </div>
        <div
          className={
            "flex items-center justify-between h-96 bg-[#757575] text-white"
          }
        >
          <div className={"flex flex-col"}>
            <Image src={logow} alt="" />
            ОРГНЕФТЕХИМ
          </div>
          <div className={"flex justify-around"}>
            <a>О компании</a>
            <a>Продукция</a>
            <a>Паспорта качества</a>
            <a>Клиентам</a>
            <a>Контакты</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
