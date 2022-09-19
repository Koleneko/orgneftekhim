import { GetStaticProps, NextPage } from "next";

const Contacts: NextPage<{ title: string }> = () => {
  return (
    <div className="grid grid-rows-3 relative items-center text-center justify-center my-2 py-10 px-6 tracking-wide max-h-full  items-center justify-center bg-white rounded-2xl md:max-w-2xl  md:gap-4 md:py-24 md:px-16 md:mx-20 max-w-7xl">
      <div className="self-start">
        <h1 className="text-4xl font-black self-start mb-2">Контакты</h1>
      </div>
      <div className="flex flex-col self-center gap-4 text-center justify-center md:grid md:grid-cols-2 w-full pr-10 text-lg font-medium text-base md:font-medium text-xl text-justify">
        <div>
          <span>Телефон: </span>
          <br />
          <a
            href="tel:8 (800) 550-7-550"
            className="font-semibold hover:font-black transition-all"
          >
            8 (800) 550-7-550
          </a>
        </div>
        <div className="flex flex-col">
          <span>Электронная почта: </span>
          {/*<div className="text-center flex flex-col">*/}
          <a
            href="mailto:info@orgneftekhim.ru"
            className="font-semibold underline cursor-pointer hover:text-blue-800"
          >
            info@orgneftekhim.ru
          </a>
          <a
            href="mailto:trade@orgneftekhim.ru"
            className="font-semibold underline cursor-pointer hover:text-blue-800 "
          >
            trade@orgneftekhim.ru
          </a>
          {/*</div>*/}
        </div>
      </div>
      <span className="text-center text-xl mb-2 font-bold place-self-end">
        ООО &quot;ОРГНЕФТЕХИМ&quot; - КОМАНДА НАДЕЖНЫХ ПРОФЕССИОНАЛОВ
      </span>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Контакты",
    },
  };
};

export default Contacts;
