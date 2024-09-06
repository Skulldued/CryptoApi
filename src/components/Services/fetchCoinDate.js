import axiosInstances from "../Utils/axiosInstance.js";
export async function fetchCoinData(page=1 , current="usd") {
  
  /*
  PerPage means how many data you show on each page below we set perPage 10 then it will display 10 data in each page 
  */

  const perPage =  10;
  try {
    const response = await axiosInstances.get(`/coins/markets?vs_currency=${current}&order=market_cap_desc&per_page=${perPage}&page=${page}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
}
