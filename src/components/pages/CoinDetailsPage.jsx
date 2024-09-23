import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "../Services/fetchCoinDetails";
import currencyStore from "../state/store";
import parse from "html-react-parser";
const CoinDetailsPage = () => {
  const { coinId } = useParams();
  const { currency } = currencyStore();

  const {
    isError,
    isLoading,
    data: coin,
  } = useQuery(["coin", coinId], () => fetchCoinDetails(coinId), {
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  if (isLoading) {
    return <div>Loading ....</div>;
  }

  if (isError) {
    return <div> Error : something went wrongs</div>;
  }

  //TODO , MAKE THE API CALL AND FETCH COIN DATA

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/3 w-full flex flex-col items-center mt-6 md:mt-0 border-r-2 border-gray-600">
        <img src={coin?.image?.large} alt={coin?.name} className="h-52 mb-5" />
        <h1 className="text-4xl font-bold mb-5">{coin?.name}</h1>
        <p className="w-full px-6 py-6 text-justify">
          {parse(coin?.description?.en)}
        </p>

        <div className="w-full flex flex-col md:flex-row md:justify-around">
          <div className="flex items-center mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Rank</h2>
            <span className="ml-3 text-xl">{coin?.market_cap_rank}</span>
          </div>

          <div className="flex items-center mb-4 md:mb-0">
            <h2 className="text-xl text-yellow-600 font-bold">Current Price</h2>
            <span className="ml-3 text-xl">
              {coin?.market_data.current_price[currency]}
            </span>
          </div>
        </div>
      </div>

      <div className="md:w-2/3 w-full px-6 ">coin information</div>
    </div>
  );
};

export default CoinDetailsPage;
