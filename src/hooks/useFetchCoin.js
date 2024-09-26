import { useQuery } from "react-query";
import currencyStore from "../components/state/store";
import { fetchCoinDetails } from "../components/Services/fetchCoinDetails";

function useFetchCoin(coinId) {
  const { currency } = currencyStore();

  const {
    isError,
    isLoading,
    data: coin,
  } = useQuery(["coin", coinId], () => fetchCoinDetails(coinId), {
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });
  return {
    currency,
    isError,
    isLoading,
    coin

  }
}

export default useFetchCoin;
