import Image from "next/image";
import bg from "public/assets/images/bg.png";
import React from "react";
import Navbar from "../core/navbar";
import Footer from "../core/footer";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <div className="h-full w-full">
        <div className="absolute -z-10 h-full w-full">
          <Image
            src={bg}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={60}
            alt="Фоновое изображение"
          />
        </div>
        <main className={"h-screen flex items-center justify-center"}>
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
