import Image from "next/image";
import bg from "public/assets/images/bg.png";
import React, { useEffect, useState } from "react";
import Navbar from "src/components/core/navbar/DesktopNavbar";
import Footer from "../core/footer";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [showNav, setShowNav] = useState<boolean>();

  useEffect(() => {
    if (window) {
      window.innerWidth < 768 ? setShowNav(false) : setShowNav(true);
    }
  }, []);

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
        <main className={"min-h-screen flex items-center justify-center"}>
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
