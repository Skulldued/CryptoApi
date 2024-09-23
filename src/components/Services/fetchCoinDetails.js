
import axiosInstances from "../Utils/axiosInstance.js";
export async function fetchCoinDetails(id) {
  
  try {
    const response = await axiosInstances.get(`/coins/${id}`);
      console.log("data is in fetch coin data function",response.data)
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
