import axiosInstances from "../Utils/axiosInstance.js";
export async function fetchCoinData() {
  try {
    const response = await axiosInstances.get("/coins/markets?vs_currency=usd");
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
}
