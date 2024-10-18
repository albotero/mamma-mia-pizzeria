import { useEffect, useState } from "react"

import Header from "../../components/header/Header"
import CardsList from "../../components/cardslist/CardsList"
import Error from "../../components/error/Error"
import { fetchData } from "../../utils/fetch"

const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    fetchData({
      data: { endpoint: "http://localhost:5000/api/pizzas" },
      callback: setPizzas,
      errorCallback: setError,
    })
  }, [setPizzas, setError])

  return (
    <main>
      <Header />
      {error ? <Error error={error} /> : <CardsList data={pizzas} />}
    </main>
  )
}

export default Home
