/* 
Inside this we wrote that code which is repeated in multiples files , that's why we use this to look clean that files where this code is used
 */
import { useState } from "react";
import currencyStore from "../components/state/store";
import { useQuery } from "react-query";
import { fetchCoinHistoricData } from "../components/Services/fetchCoinHistoricData";

function useFetchCoinHistory(coinId){
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

  return [
    historicData,
    isLoading,
    isError,
    setDays,
    setCoinInterval,
    days,
    currency
  ]

}