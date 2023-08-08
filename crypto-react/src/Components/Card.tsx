import { Item } from "../Types/Data"

type Props =  {
    data:Item
}

const Card = ({data}:Props) => {
    const {name,price,market_cap , image , price_change_24h:price_change , symbol} = data;
  return (
    <div className="w-full h-20 bg-slate-200 lg:grid-cols-6 grid grid-cols-3 md:grid-cols-5 sm:grid-cols-4 sm:px-6 border border-slate-300">
        {/* <div className="flex gap-10 "> */}
        <img src={image} className="w-12 my-auto mx-auto" />
        <p className="my-auto mx-auto ">{name}</p>
        {/* </div> */}
        <p className="my-auto mx-auto px-6 text-center hidden sm:block">{symbol}</p>
        <p className="my-auto mx-auto">${price}</p>
        <p className={`my-auto mx-auto font-bold hidden md:block ${price_change>0? 'text-rose-500' : 'text-green-600'}`}>{price_change.toFixed(2)}%</p>
        <p className="my-auto mx-auto lg:block hidden">{market_cap}</p>
    </div>
  )
}

export default Card
