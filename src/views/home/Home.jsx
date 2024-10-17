import Header from "../../components/header/Header"
import CardsList from "../../components/cardslist/CardsList"
import { pizzas } from "../../utils/pizzas"

const Home = () => {
  return (
    <main>
      <Header />
      <CardsList data={pizzas} />
    </main>
  )
}

export default Home
