import Header from "../../components/header/Header"
import CardsList from "../../components/cardslist/CardsList"
import Error from "../../components/error/Error"
import { usePizzas } from "../../context/PizzasContext"

const Home = () => {
  const { error, pizzas } = usePizzas()

  return (
    <main>
      <Header />
      {error ? <Error error={error} /> : <CardsList data={pizzas} />}
    </main>
  )
}

export default Home
