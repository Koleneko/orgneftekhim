import Image from "next/image";
import tel from "public/assets/svg/tel.svg";
import logo from "public/assets/svg/logo-black.svg";
import mail from "public/assets/svg/mail.svg";
import bb from "public/assets/svg/burger-button.svg";
import logow from "public/assets/svg/logo-white.svg";
import bg from "public/assets/images/bg.png";
import React from "react";
import Link from "next/link";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div>
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
            <div
              className={
                "flex flex-col text-[30px] font-[800] mobile:text-[20px]"
              }
            >
              <Image className={"max-w-3xl"} src={logo} alt="" />
              <a className={"p-[25px] max"} href="">
                ОРГНЕФТЕХИМ
              </a>
            </div>

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

        {/*<div*/}
        {/*  className={*/}
        {/*    "h-[200vh] bg-center bg-cover bg-no-repeat bg-[url('../../public/assets/images/bg.png')]"*/}
        {/*  }*/}
        {/*>*/}
        <div className="h-full w-full">
          <div className="absolute -z-10 h-full w-full">
            <Image
              src={bg}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              quality={100}
              alt="Фоновое изображение"
            />
          </div>
          <main className={"h-screen flex items-center justify-center"}>
            {children}
          </main>
        </div>

        {/*</div>*/}
        <div
          className={
            "flex items-center justify-center desktop:h-[300px] bg-[#000000] text-white mobile:h-[70px]"
          }
        >
          <div className={"flex flex-col mobile:text-[10px] pl-[15px]"}>
            <Image src={logow} alt="" />
            ОРГНЕФТЕХИМ
          </div>
          <div>
            <div className={"flex justify-center mobile:text-[5px]"}>
              <a>О компании</a>
              <a>Продукция</a>
              <a>Паспорта качества</a>
              <a>Клиентам</a>
              <a>Контакты</a>
            </div>
            <div className={"mobile:text-[5px]"}>
              ООО &quot;ОРГНЕФТЕХИМ&quot; , 142403, Россия, Московская область,
              г. Ногинск, ул. Индустриальная, д. 41В, Э/О 2/332. Телефон:
              +7(915) 097-39-27, +7(915) 097-23-97, E-mail:
              orgneftekhim@gmail.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
}