import { useState, ChangeEvent } from 'react'
import Card from './Card'
import { Data } from '../Types/Data'
import NeededInfo from '../helpers/NeededInfo'

type Props = {
    data: Data[]
}
const Main = ({ data }: Props) => {
    const [input, setInput] = useState("")
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    return (
        <div className='py-8'>
            <input type="text" placeholder="Search..." value={input} onChange={changeHandler}
                className="px-3 py-0.5 block mx-auto focus:outline-none ring-1 ring-slate-400 rounded-lg focus:ring-2"
            />
            <div className='w-11/12 xl:w-10/12 2xl:w-9/12 mx-auto rounded-2xl overflow-hidden mt-10 '>
                {input.length >= 1 ? <>{
                    data.filter((item: Data) => (item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()))).map((item: Data) =>
                        <Card key={item.id} data={NeededInfo(item)} />
                    )
                }
                </> : <>
                    {
                        data.map((item: Data) =>
                            <Card key={item.id} data={NeededInfo(item)} />
                        )
                    }
                </>
                }
            </div>
        </div>
    )
}

export default Main
