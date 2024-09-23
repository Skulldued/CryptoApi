// import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import CoinTable from "./components/coinTable/CoinTable";
import Home from "./components/pages/Home";
import Routing from "./components/Routing/Routing";
// import { CurrencyContext } from "./components/context/CurrencyContext";

const App = () => {
  // const [currency, setCurrency] = useState("usd");
  return (
    <>
    {/* <CurrencyContext.Provider value={{currency,setCurrency}}> */}
      <Routing/>
      {/* </CurrencyContext.Provider> */}
    </>
  );
};

export default App;
