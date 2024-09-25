import React, { useState } from "react";
import Coininfo from "./Coininfo";
import currencyStore from "../state/store";
import { useQuery } from "react-query";
import { fetchCoinHistoricData } from "../Services/fetchCoinHistoricData";
import MyLoader from "../PageLoader/PageLoader";
import Alert from "../Alert/Alert";

const CoinInfoContainer = ({ coinId }) => {
  const { currency } = currencyStore();
  const [days, setDays] = useState(7);
  const [interval, setCoinInterval] = useState("daily");

  const {
    data: historicData,
    isLoading,
    isError,
  } = useQuery(
    ["coinHistoricData", coinId, currency, days, interval],
    () => fetchCoinHistoricData(coinId, interval, days, currency),
    {
      cacheTime: 1000 * 60 * 2,
      staleTime: 1000 * 60 * 2,
    }
  );

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
