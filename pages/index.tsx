import { GetServerSideProps } from "next/types";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    notFound: true
  };
};

export default function Home() {
  return null
}
