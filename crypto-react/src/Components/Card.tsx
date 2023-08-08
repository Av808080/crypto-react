import { Item } from "../Types/Data"

type Props =  {
    data:Item
}

const Card = ({data}:Props) => {
    const {name,price,market_cap , image , price_change_24h:price_change , symbol} = data;
  return (
    <div className="w-full h-20 bg-slate-200 grid grid-cols-5 sm:px-6 border border-slate-300">
        <div className="flex gap-8">
        <img src={image} className="w-12 my-auto" />
        <p className="my-auto ">{name}</p>
        </div>
        <p className="my-auto px-4">{symbol}</p>
        <p className="my-auto">${price}</p>
        <p className={`my-auto font-bold ${price_change>0? 'text-rose-500' : 'text-green-600'}`}>{price_change.toFixed(2)}%</p>
        <p className="my-auto">{market_cap}</p>
    </div>
  )
}

export default Card
