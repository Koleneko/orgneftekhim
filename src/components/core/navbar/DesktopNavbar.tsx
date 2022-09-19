import React, { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import tel from "public/assets/svg/tel.svg";
import mail from "public/assets/svg/mail.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "src/components/misc/Logo";
import useMediaQuery from "src/hooks/useMediaQuery";
import BurgerBtn from "src/components/ui/burger-button/BurgerBtn";

const DesktopNavBtn: FC<{ path: string }> = ({ path }) => {
  return (
    <>
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
    </>
  );
};

const MobileNavBtn: FC<{ path: string }> = ({}) => {
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef(null);

  return (
    <>
      {showMenu && (
        // <div className={"relative w-0 h-0"}>
        <div
          id="dropdownNavbar"
          ref={menuRef}
          className=" bg-gray-800 absolute flex flex-col items-center w-screen justify-self-center gap-2 p-5 mt-[270px]"
        >
          <Link href={"/about"} scroll={false}>
            <div
              onClick={() => setShowMenu(false)}
              className={
                "cursor-pointer hover:bg-white hover:text-black rounded-md"
              }
            >
              О нас
            </div>
          </Link>
          <Link href={"/products"} scroll={false}>
            <div
              onClick={() => setShowMenu(false)}
              className={
                "cursor-pointer tou hover:bg-white hover:text-black rounded-md"
              }
            >
              Продукция
            </div>
          </Link>
          <Link href={"/certificates"} scroll={false}>
            <div
              onClick={() => setShowMenu(false)}
              className={
                "cursor-pointer tou hover:bg-white hover:text-black rounded-md"
              }
            >
              Паспорта качества
            </div>
          </Link>
          <Link href={"/for-customers"} scroll={false}>
            <div
              onClick={() => setShowMenu(false)}
              className={
                "cursor-pointer tou hover:bg-white hover:text-black rounded-md"
              }
            >
              Клиентам
            </div>
          </Link>
          <Link href={"/contacts"} scroll={false}>
            <div
              onClick={() => setShowMenu(false)}
              className={
                "cursor-pointer tou hover:bg-white hover:text-black rounded-md"
              }
            >
              Контакты
            </div>
          </Link>
        </div>
        // </div>
      )}
      <BurgerBtn
        open={showMenu}
        ref={btnRef}
        onClick={() => setShowMenu((prev) => !prev)}
      />
    </>
  );
};

const Navbar: FC<{ hidden?: boolean }> = () => {
  const path = useRouter().pathname;

  const isMobile = useMediaQuery(768);

  return (
    <div>
      <div
        className={
          "bg-white bg-gradient-to-l from-[#B7C9CF] flex items-center justify-center pt-[2.5rem] mobile:pt-2.5"
        }
      >
        <a
          href={"tel:+7(915)097-23-97"}
          className={
            "flex items-center absolute left-10 mobile:left-5 mobile:top-5 tablet:top-[100px]"
          }
        >
          <Image src={tel} alt={"Телефон"} />
          <span className={"hidden tablet:flex pl-[10px] "}>
            +7 (915) 097-23-97
          </span>
        </a>
        <Link href="/" scroll={false}>
          <div
            className={
              "flex flex-col items-center text-[30px] font-[800] mobile:text-[20px]"
            }
          >
            <Logo size={{ height: 140, width: 140 }} />
            <span className={"p-[25px] max"}>ОРГНЕФТЕХИМ</span>
          </div>
        </Link>
        <a
          href={"mailto:info@orgneftekhim.ru"}
          className={
            "flex items-center absolute right-10 mobile:right-5 mobile:top-5 tablet:top-[100px]"
          }
        >
          <div className={"hidden tablet:flex pr-[10px]"}>
            info@orgneftekhim.ru
          </div>
          <Image src={mail} alt="" />
        </a>
      </div>

      <div
        className={
          "top-25 w-full h-20 flex items-center justify-center bg-black text-white "
        }
      >
        {isMobile ? (
          <MobileNavBtn path={path} />
        ) : (
          <DesktopNavBtn path={path} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
