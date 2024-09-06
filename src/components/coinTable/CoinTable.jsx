import React, { useState } from "react";
import { fetchCoinData } from "../Services/fetchCoinDate";
import { useQuery } from "react-query";
const CoinTable = () => {
  // useEffect(() => {
  //   console.log("Cointable mount/initial stage");
  //   fetchCoinData(1,'usd');
  // }, []);

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

  const {data, isLoading, isError, error, isFetching} = useQuery(
    ["coins", page],
    () => {
      fetchCoinData(page, "usd");
    },
    {
      retry: 2,
      retryDelay: 1000,
      cacheTime: 1000 * 60 * 2,
    }
  );

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return <div>CoinTablesunny</div>;
};

export default CoinTable;
