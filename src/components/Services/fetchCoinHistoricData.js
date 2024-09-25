
import axiosInstances from "../Utils/axiosInstance.js";
export async function fetchCoinHistoricData(id , interval , days = 7 , currency = "usd") {
  
  try {
    const response = await axiosInstances.get(`/coins/${id}/market_chart?days=${days}&vs_currency=${currency}&interval=${interval}`);
      console.log("data is in fetch coin Historic data for map ",response.data)
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
