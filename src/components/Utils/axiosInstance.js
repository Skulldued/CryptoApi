//This file is used to 
import axios from "axios";
import { COINGECO_URL } from "./constants";

const axiosInstnaces = axios.create({
    baseURL : COINGECO_URL 
})

export default axiosInstnaces;


/*
-->Baseurl , If you are hit multiple url but the starting part of that url are constant in each page only last two words are changes in that case the the constants part that is similiar in all page it is kept inside baseurl

Example:--
          https://api.coingecko.com/api/v3/
          https://api.coingecko.com/api/v3/sunny
          https://api.coingecko.com/api/v3/radhe
          https://api.coingecko.com/api/v3/ajay/test
          https://api.coingecko.com/api/v3//radha/papa/25685
          We notice in above examples that "https://api.coingecko.com/api/v3/" this part is constants in each url that's why we kept in baseurl 

*/