import React, { FC } from "react";
import Logo from "src/components/misc/Logo";

const Footer: FC = () => {
  return (
    <div>
      <div
        className={
          "text-white h-full bg-black flex items-center gap-5 p-5 flex-col text-center sm:flex-row "
        }
      >
        <div className={"flex flex-col sm:text-[10px] items-center"}>
          <Logo fillColor={"white"} size={{ width: 60, height: 60 }} />
          ОРГНЕФТЕХИМ
        </div>

        <div
          className={
            "text-base text-center md:text-justify sm:text-[12px] md:pl-[25%]"
          }
        >
          ООО &quot;ОРГНЕФТЕХИМ&quot;
          <br />
          142403, Россия, Московская область, г. Ногинск, ул. Индустриальная, д.
          41В, Э/О 2/332.
          <br />
          Телефон: +7(915) 097-39-27, +7(915) 097-23-97, E-mail:
          info@orgneftekhim.ru info@orgneftekhim.ru
        </div>
      </div>
    </div>
  );
};

export default Footer;
