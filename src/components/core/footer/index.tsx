import React, { FC } from "react";
import Image from "next/image";
import logoWhite from "public/assets/svg/logo-white.svg";

const Footer: FC = () => {
  return (
    <div
      className={
        "text-white h-full bg-black flex items-center gap-5 p-5 flex-col text-center tablet:flex-row justify-center desktop: "
      }
    >
      <div className={"flex flex-col mobile:text-[10px]"}>
        <Image src={logoWhite} alt="" />
        ОРГНЕФТЕХИМ
      </div>
      <div>
        <div className={"flex flex-col justify-center text-[5px]"}>
          <a>О компании</a>
          <a>Продукция</a>
          <a>Паспорта качества</a>
          <a>Клиентам</a>
          <a>Контакты</a>
        </div>
      </div>
      <div className={"text-[5px] text-center tablet:text-[8px] "}>
        ООО &quot;ОРГНЕФТЕХИМ&quot;
        <br />
        142403, Россия, Московская область, г. Ногинск, ул. Индустриальная, д.
        41В, Э/О 2/332.
        <br />
        Телефон: +7(915) 097-39-27, +7(915) 097-23-97, E-mail:
        orgneftekhim@gmail.com
      </div>
    </div>
  );
};

export default Footer;
