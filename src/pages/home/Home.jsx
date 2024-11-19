import { useContext } from "react"

import Header from "../../components/header/Header"
import CardsList from "../../components/cardslist/CardsList"
import Error from "../../components/error/Error"
import { PizzasContext } from "../../context/PizzasContext"

const Home = () => {
  const { error, pizzas } = useContext(PizzasContext)

  return (
    <main>
      <Header />
      {error ? <Error error={error} /> : <CardsList data={pizzas} />}
    </main>
  )
}

export default Home
