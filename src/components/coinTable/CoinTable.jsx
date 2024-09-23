import React, { useContext, useState } from "react";
import { fetchCoinData } from "../Services/fetchCoinDate";
import { useQuery } from "react-query";
// import { CurrencyContext } from "../context/CurrencyContext";
import currencyStore from "../state/store";
import { useNavigate } from "react-router-dom";
const CoinTable = () => {
  // const {currency} = useContext(CurrencyContext);
  const { currency } = currencyStore();
  const navigate = useNavigate();

  /*Inplace of this above useEffect we use this method also to fetch data */
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery(
    ["coins", page, currency],
    () => fetchCoinData(page, currency),

    {
      // retry: 2,
      // retryDelay: 1000,
      cacheTime: 1000 * 60 * 2,
      staleTime: 1000 * 60 * 2,
    }
  );

  // What is the use of useEffect

  function handleCoinRedirect(id) {
    navigate(`/details/${id}`);
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  console.log("Fetched data in CoinTable component:", data);
  return (
    <>
      <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
        <div className="w-full bg-yellow-400 text-black p-3 font-semibold flex justify-center items-center ">
          <div className="basis-[35%]">Coin</div>
          <div className="basis-[25%]">Price</div>
          <div className="basis-[20%]">24 Change</div>
          <div className="basis-[20%]">Market Cap</div>
        </div>
        <div className="flex flex-col w-[80vw] mx-auto">
          {isLoading && <div>Loading....</div>}
          {data?.map((coin) => {
            return (
              <div
                onClick={() => {
                  handleCoinRedirect(coin.id);
                }}
                key={coin.id}
                className="w-full bg-transparent cursor-pointer text-white flex p-3 font-semibold items-center justify-between"
              >
                <div className="flex items-center justify-start gap-3 basis-[35%]">
                  <div className="w-[5rem] h-[5rem]">
                    <img src={coin.image} className="w-full h-full" alt="" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-xl">{coin.name}</div>
                    <div>{coin.symbol}</div>
                  </div>
                </div>

                <div className="basis-[25%]">{coin.current_price}</div>
                <div className="basis-[20%]">{coin.price_change_24h}</div>
                <div className="basis-[20%]">{coin.market_cap}</div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-4 justify-center items-center">
          <button
            disabled={page === 1}
            onClick={() => {
              setPage(page - 1);
            }}
            className="btn btn-primary btn-wide text-white text-2xl"
          >
            Previous
          </button>
          <button
            onClick={() => {
              setPage(page + 1);
            }}
            className="btn btn-secondary btn-wide text-white text-2xl"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default CoinTable;
