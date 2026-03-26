import React from "react";
import Banner from "../../component/Banner/Banner";
import { useLoaderData } from "react-router";
import AllApp from "../AllApp/AllApp";

const Home = () => {
  const allAppData = useLoaderData();
  //   console.log(allAppData);
  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] min-h-screen">
      <Banner></Banner>
      <AllApp allAppData={allAppData}></AllApp>
    </div>
  );
};

export default Home;
