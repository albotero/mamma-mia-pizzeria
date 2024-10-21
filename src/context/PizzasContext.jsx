import { createContext, useEffect, useState } from "react"
import { fetchData } from "../utils/fetch"

export const PizzasContext = createContext()

const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([])
  const [error, setError] = useState()

  const findPizza = (id) => pizzas.find((el) => el.id === id) || {}

  useEffect(() => {
    fetchData({
      data: { endpoint: "http://localhost:5000/api/pizzas" },
      callback: setPizzas,
      errorCallback: setError,
    })
  }, [setPizzas, setError])

  const context = { pizzas, error, findPizza }
  return <PizzasContext.Provider value={context}>{children}</PizzasContext.Provider>
}

export default PizzasProvider
