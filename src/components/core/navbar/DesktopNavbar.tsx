import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import mail from "public/assets/svg/mail.svg";
import tel from "public/assets/svg/tel.svg";
import React, { FC, useRef, useState } from "react";
import Logo from "src/components/misc/Logo";
import BurgerBtn from "src/components/ui/burger-button/BurgerBtn";
import { buttonsInfo } from "src/constants/buttons-info";
import useMediaQuery from "src/hooks/useMediaQuery";

const DesktopNavBtn: FC<{ path: string }> = ({ path }) => {
  return (
    <>
      {buttonsInfo.map((btn) => (
        <Link href={btn.link} key={btn.link} scroll={false}>
          <div
            className={
              "nav-button-desktop" +
              (path === btn.link ? " bg-gray-400 text-black" : "")
            }
          >
            {btn.title}
          </div>
        </Link>
      ))}
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
        <div
          id="dropdownNavbar"
          ref={menuRef}
          className=" bg-gray-800 absolute flex flex-col items-center w-screen justify-self-center gap-2 p-5 mt-[270px]"
        >
          {buttonsInfo.map((btn) => (
            <Link href={btn.link} key={btn.link} scroll={false}>
              <div
                onClick={() => setShowMenu(false)}
                className={
                  "cursor-pointer hover:bg-white hover:text-black rounded-md"
                }
              >
                {btn.title}
              </div>
            </Link>
          ))}
        </div>
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
          "bg-white bg-gradient-to-l from-[#B7C9CF] flex items-center justify-center pt-[2.5rem] sm:pt-2.5"
        }
      >
        <a
          href={"tel:8(800)550-7-550"}
          className={
            "flex items-center absolute left-10 sm:left-5 sm:top-5 md:top-[100px]"
          }
        >
          <Image src={tel} alt={"Телефон"} />
          <span className={"hidden md:flex pl-[10px] "}>8 (800) 550-7-550</span>
        </a>
        <Link href="/" scroll={false}>
          <div
            className={
              "flex flex-col items-center text-[30px] font-[800] sm:text-[20px]"
            }
          >
            <Logo size={{ height: 140, width: 140 }} />
            <span className={"p-[25px] max"}>ОРГНЕФТЕХИМ</span>
          </div>
        </Link>
        <a
          href={"mailto:info@orgneftekhim.ru"}
          className={
            "flex items-center absolute right-10 sm:right-5 sm:top-5 md:top-[100px]"
          }
        >
          <div className={"hidden md:flex pr-[10px]"}>info@orgneftekhim.ru</div>
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
