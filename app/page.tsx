import { NextPage } from "next";
import Head from "next/head";
import UnitConverter from "./components/UnitConverter";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <Head>
        <title>Unit Converter</title>
      </Head>
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Unit Converter</h1>
      <UnitConverter />
    </div>
  );
};

export default Home;