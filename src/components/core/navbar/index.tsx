import React, { FC } from "react";
import Image from "next/image";
import tel from "public/assets/svg/tel.svg";
import logo from "public/assets/svg/logo-black.svg";
import mail from "public/assets/svg/mail.svg";
import bb from "public/assets/svg/burger-button.svg";
import Link from "next/link";
import BlackLogo from "src/components/misc/BlackLogo";

const Navbar: FC = () => {
  return (
    <div>
      <div
        className={
          "bg-gradient-to-l from-[#B7C9CF] flex items-center justify-center pt-[2.5rem] mobile:pt-2.5"
        }
      >
        <div
          className={
            "flex items-center absolute left-10 mobile:left-5 mobile:top-5 tablet:top-[100px]"
          }
        >
          <Image src={tel} alt={"Телефон"} />
          <div className={"hidden tablet:flex pl-[10px] "}>
            +7 (915) 097-23-97
          </div>
        </div>
        <Link href="/">
          <div
            className={
              "flex flex-col text-[30px] font-[800] mobile:text-[20px]"
            }
          >
            {/*<Image className={"max-w-3xl"} src={logo} alt="" />*/}
            <BlackLogo />
            <a className={"p-[25px] max"} href="src/components/layouts/Layout">
              ОРГНЕФТЕХИМ
            </a>
          </div>
        </Link>
        <div
          className={
            "flex items-center absolute right-10 mobile:right-5 mobile:top-5 tablet:top-[100px]"
          }
        >
          <div className={"hidden tablet:flex pr-[10px]"}>
            orgneftekhim@gmail.com
          </div>
          <Image src={mail} alt="" />
        </div>
      </div>

      <div
        className={
          " h-20 flex items-center justify-center bg-[#000000] text-white space-x-[35px]"
        }
      >
        <a className={"tablet:hidden active:opacity-25"}>
          <Image src={bb} alt="" />{" "}
        </a>
        <Link href={"/about"}>
          <div
            className={
              "hidden tablet:flex items-center justify-center w-[10rem] bg-[#000000] hover:bg-white hover:text-black leading-[4rem] rounded-[10px] "
            }
          >
            О нас
          </div>
        </Link>
        <Link href={"/products"}>
          <div
            className={
              "hidden tablet:flex items-center justify-center w-[10rem] bg-[#000000] hover:bg-white hover:text-black leading-[4rem] rounded-[10px] "
            }
          >
            Продукция
          </div>
        </Link>
        <div
          className={
            "hidden tablet:flex items-center justify-center w-[15rem] bg-[#000000] hover:bg-white hover:text-black leading-[4rem] rounded-[10px] "
          }
        >
          Паспорта качества
        </div>
        <div
          className={
            "hidden tablet:flex items-center justify-center w-[10rem] bg-[#000000] hover:bg-white hover:text-black leading-[4rem] rounded-[10px] "
          }
        >
          Клиентам
        </div>
        <div
          className={
            "hidden tablet:flex items-center justify-center w-[10rem] bg-[#000000] hover:bg-white hover:text-black leading-[4rem] rounded-[10px]"
          }
        >
          Контакты
        </div>
      </div>
    </div>
  );
};

export default Navbar;
