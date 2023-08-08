import { useState, useEffect } from "react"
import Main from "./Components/Main";
import Loader from "./Components/Loader";

import FetchData from '../services/FetchData'
import { Data } from "./Types/Data";

const App = () => {

  const [data, setData] = useState([] as Data[]);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      setData(await FetchData())
      setIsLoading(false)
    }
    setIsLoading(true)
    fetchData()
  }, [])

  return (
    <div className="min-h-screen">
      {isLoading ?
        <Loader /> :
        <Main data={data} />
      }
    </div>
  )
}

export default App
