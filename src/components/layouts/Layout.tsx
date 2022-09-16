import Image from "next/image";
import bg from "public/assets/images/bg.png";
import React, { useCallback, useEffect, useState } from "react";
import Navbar from "src/components/core/navbar/DesktopNavbar";
import Footer from "../core/footer";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShowNav(false);
      } else {
        // if scroll up show the navbar
        setShowNav(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  const controlNavbarCallback = useCallback(controlNavbar, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbarCallback);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbarCallback);
      };
    }
  }, [lastScrollY, controlNavbarCallback]);

  return (
    <>
      <div className="h-full w-full">
        <div className="fixed bg-local -z-10 h-screen w-screen">
          <Image
            src={bg}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={60}
            alt="Фоновое изображение"
          />
        </div>
        <Navbar hidden={showNav} />
        <main className={"h-screen flex items-center justify-center"}>
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
