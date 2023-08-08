import { Item } from "../Types/Data"

type Props =  {
    data:Item
}

const Card = ({data}:Props) => {
  return (
    <div className="w-full bg-slate-400 grid grid-cols-6">
        <img src={data.image} />
        <p>{data.name}</p>
        <p>{data.symbol}</p>
        <p>{data.price}</p>
        <p>{data.market_cap}</p>
        <p>{data.price_change_24h}</p>
    </div>
  )
}

export default Card
