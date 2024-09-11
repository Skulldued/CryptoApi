import React, { useState } from "react";
import { fetchCoinData } from "../Services/fetchCoinDate";
import { useQuery } from "react-query";
const CoinTable = () => {
  /*Inplace of this above useEffect we use this method also to fetch data */
  const [page, setPage] = useState(1);

  /*
  useQuery()
  ->This is a react query function
  ->It takes 3 parameter
  ->First aruguments pass in the form of array
      ->> useQuery(["queryName , pagination"])
  ->second argument is a callback function
  ->Third argument is configration object
       ->>Inside configration object we add such type of property like retry:2, it means maximum you can try this 2 times only another peoperty is retryDelay:1000 means after u takes 2 times retry then it take a 1000 second to start the execution again if you again try more than 2 time then again it will not work after 1000 it will start again working another properrty is cacheTime :1000 * 60 * 5 , it means how much time you store the data in cache memory 
   */

  const { data, isLoading, isError, error } = useQuery(
    ["coins", page],
    () => fetchCoinData(page, "usd"),

    {
      // retry: 2,
      // retryDelay: 1000,
      // cacheTime: 1000 * 60 * 2,
      staleTime : 1000 * 60 *2
    }
  );

  // What is the use of useEffect
 

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  console.log("Fetched data in CoinTable component:", data);
  return (
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
              key={coin.id}
              className="w-full bg-transparent text-white flex p-3 font-semibold items-center justify-between"
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
  );
};

export default CoinTable;
