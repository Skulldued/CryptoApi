import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import CoinTable from "../coinTable/CoinTable";

const Home = () => {
  return (
    <>
      <Navbar  />
      <Banner />
      <CoinTable  />
    </>
  );
};

export default Home;
