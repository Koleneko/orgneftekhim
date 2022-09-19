import type { NextPage } from "next";
import { GetStaticProps } from "next";

const ForCustomers: NextPage<{ title: string }> = () => {
  return <div className={"placeholder-box"}>Клиентам</div>;
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Клиентам",
    },
  };
};

export default ForCustomers;
