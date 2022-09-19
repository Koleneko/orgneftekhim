import { GetStaticProps, NextPage } from "next";

const Certificates: NextPage<{ title: string }> = () => {
  return <div className={"placeholder-box"}>Паспорта качества</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Паспорта качества",
    },
  };
};

export default Certificates;
