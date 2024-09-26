import React, { useState } from "react";
import Coininfo from "./Coininfo";
import MyLoader from "../PageLoader/PageLoader";
import Alert from "../Alert/Alert";
import useFetchCoinHistory from "../../hooks/useFetchCoinHistory";
const CoinInfoContainer = ({ coinId }) => {
  const{
    historicData,
    isError,
    isLoading,
    currency,
    days,
    setDays,
    setCoinInterval,
   } = useFetchCoinHistory(coinId);

  if (isLoading) {
    return <MyLoader />;
  }

  if (isError) {
    return <Alert message="Error fetching data" type="error" />;
  }

  return (
    <div>
      <Coininfo
        historicData={historicData}
        setDays={setDays}
        setCoinInterval={setCoinInterval}
        days={days}
        currency={currency}
      />
    </div>
  );
};

export default CoinInfoContainer;
