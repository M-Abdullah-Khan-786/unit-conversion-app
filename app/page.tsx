import { NextPage } from "next";
import Head from "next/head";
import UnitConverter from "./components/UnitConverter";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200 p-6">
      <Head>
        <title>Unit Converter</title>
      </Head>
      <h1 className="text-5xl font-extrabold mb-8 text-gray-900  shadow-md">Unit Converter</h1>
      <div className="w-full max-w-lg p-6 bg-white shadow-xl rounded-2xl">
        <UnitConverter />
      </div>
    </div>
  );
};

export default Home;