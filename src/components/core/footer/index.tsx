import React, { FC } from "react";
import Logo from "src/components/misc/Logo";

const Footer: FC = () => {
  return (
    <div
      className={
        "text-white h-full bg-black flex items-center gap-5 p-5 flex-col text-center tablet:flex-row justify-center desktop: "
      }
    >
      <div className={"flex flex-col mobile:text-[10px] items-center"}>
        <Logo fillColor={"white"} size={{ width: 60, height: 60 }} />
        ОРГНЕФТЕХИМ
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
