// import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import CoinTable from "./components/coinTable/CoinTable";
import Home from "./components/pages/Home";
// import { CurrencyContext } from "./components/context/CurrencyContext";

const App = () => {
  // const [currency, setCurrency] = useState("usd");
  return (
    <>
    {/* <CurrencyContext.Provider value={{currency,setCurrency}}> */}
      <Home />
      {/* </CurrencyContext.Provider> */}
    </>
  );
};

export default App;
