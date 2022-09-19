import type { GetServerSideProps, NextPage } from "next";

const Home: NextPage<{ title: string }> = () => {
  return <div className={"placeholder-box"}>САЙТ В РАЗРАБОТКЕ</div>;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/about",
    },
    props: {},
  };
};
