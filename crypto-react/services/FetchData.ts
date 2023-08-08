import axios from "axios";
const URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc";

const FetchData = async () => {
  try {
    const response = await axios.get(URL);
        return response.data;
  } catch (err) {
    console.log((err as Error).message);
  }
};

export default FetchData;
