import { useState, useEffect } from "react"
import FetchData from '../services/FetchData'

import { Data } from "./Types/Data";
import Main from "./Components/Main";
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
      <Main data={data} />
    </div>
  )
}

export default App
