import { useState, useEffect } from "react"
import FetchData from '../services/FetchData'
const App = () => {
  const [data, setData] = useState([] as any);
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
      
    </div>
  )
}

export default App
