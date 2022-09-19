import { GetStaticProps, NextPage } from "next";

const Products: NextPage<{ title: string }> = () => {
  return <div className={"placeholder-box"}>Продукция</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Продукция",
    },
  };
};

export default Products;
