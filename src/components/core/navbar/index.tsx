import React, { FC } from "react";
import Image from "next/image";
import tel from "public/assets/svg/tel.svg";
import mail from "public/assets/svg/mail.svg";
import bb from "public/assets/svg/burger-button.svg";
import Link from "next/link";
import BlackLogo from "src/components/misc/BlackLogo";
import { useRouter } from "next/router";

const Navbar: FC = () => {
  const path = useRouter().pathname;

  return (
    <div>
      <div
        className={
          "bg-white bg-gradient-to-l from-[#B7C9CF] flex items-center justify-center pt-[2.5rem] mobile:pt-2.5"
        }
      >
        <div
          className={
            "flex items-center absolute left-10 mobile:left-5 mobile:top-5 tablet:top-[100px]"
          }
        >
          <Image src={tel} alt={"Телефон"} />
          <a
            href={"tel:+7(915)097-23-97"}
            className={"hidden tablet:flex pl-[10px] "}
          >
            +7 (915) 097-23-97
          </a>
        </div>
        <Link href="/" scroll={false}>
          <div
            className={
              "flex flex-col items-center text-[30px] font-[800] mobile:text-[20px]"
            }
          >
            <BlackLogo />
            <span className={"p-[25px] max"}>ОРГНЕФТЕХИМ</span>
          </div>
        </Link>
        <a
          href={"mailto:orgneftekhim@gmail.com"}
          className={
            "flex items-center absolute right-10 mobile:right-5 mobile:top-5 tablet:top-[100px]"
          }
        >
          <div className={"hidden tablet:flex pr-[10px]"}>
            orgneftekhim@gmail.com
          </div>
          <Image src={mail} alt="" />
        </a>
      </div>

      <div
        className={
          "h-20 flex items-center justify-center bg-[#000000] text-white space-x-[35px]"
        }
      >
        <a className={"tablet:hidden active:opacity-25"}>
          <Image src={bb} alt="" />
        </a>
        <Link href={"/about"} scroll={false}>
          <div
            className={
              "nav-button-desktop" +
              (path === "/about" ? " bg-gray-400 text-black" : "")
            }
          >
            О нас
          </div>
        </Link>
        <Link href={"/products"} scroll={false}>
          <div
            className={
              "nav-button-desktop" +
              (path === "/products" ? " bg-gray-400 text-black" : "")
            }
          >
            Продукция
          </div>
        </Link>
        <Link href={"/certificates"} scroll={false}>
          <div
            className={
              "nav-button-desktop" +
              (path === "/certificates" ? " bg-gray-400 text-black" : "")
            }
          >
            Паспорта качества
          </div>
        </Link>
        <Link href={"/for-customers"} scroll={false}>
          <div
            className={
              "nav-button-desktop" +
              (path === "/for-customers" ? " bg-gray-400 text-black" : "")
            }
          >
            Клиентам
          </div>
        </Link>
        <Link href={"/contacts"} scroll={false}>
          <div
            className={
              "nav-button-desktop" +
              (path === "/contacts" ? " bg-gray-400 text-black" : "")
            }
          >
            Контакты
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
