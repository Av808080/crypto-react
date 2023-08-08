import { Data } from "../Types/Data";

const NeededInfo = (item: Data) => {
  return {
    name: item.name,
    image: item.image,
    price: item.current_price,
    market_cap: item.market_cap,
    symbol: item.symbol,
    price_change_24h: item.price_change_24h,
  };
};

export default NeededInfo;
