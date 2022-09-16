import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <div className="flex flex-col my-2 py-10 px-2 tracking-wide max-h-full  items-center justify-center bg-white md:rounded-2xl md:h-auto md:gap-4 md:py-24 md:px-16 md:mx-20 max-w-7xl">
      <p className="mb-2 text-base md:font-medium text-xl text-justify ">
        <span className="text-4xl font-black self-start mb-2">
          ОРГНЕФТЕХИМ{" "}
        </span>
        — это команда опытных специалистов, имеющих за плечами по несколько
        десятков лет работы в нефтяной, газовой и химической промышленности.
      </p>
      <p className="mb-2 text-base md:font-medium text-xl text-justify indent-10">
        Мы на практике знаем, что такое бурение скважин, добыча нефти и газового
        конденсата, переработка этого сырья на нефтеперерабатывающих и
        нефтехимических заводах, хорошо понимаем логистические процессы при
        различных видах транспортировки сырья и готовой продукции.
      </p>
      <p className="mb-2 text-base md:font-medium text-xl text-justify indent-10">
        Свою работу мы строим на простых человеческих ценностях, таких как
        честность, порядочность, доверие. Если Ваши ценности совпадают с нашими
        ценностями, то Вы нашли то, что искали, так как
      </p>
      <span className="text-center text-2xl mb-2 font-bold ">
        ООО &quot;ОРГНЕФТЕХИМ&quot; - КОМАНДА НАДЕЖНЫХ ПРОФЕССИОНАЛОВ.
      </span>
    </div>
  );
};

export default About;
