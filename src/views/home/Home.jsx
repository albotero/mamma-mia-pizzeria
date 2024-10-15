import Header from "../../components/header/Header"
import CardsList from "../../components/cardslist/CardsList"

const Home = () => {
  // Data to be retrieved from backend
  const pizzas = [
    {
      id: 1,
      name: "Napolitana",
      price: 5950,
      ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
      img: "napolitana.png",
    },
    {
      id: 2,
      name: "Española",
      price: 6950,
      ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
      img: "espanola.png",
    },
    {
      id: 3,
      name: "Pepperoni",
      price: 6950,
      ingredients: ["mozzarella", "pepperoni", "orégano"],
      img: "pepperoni.png",
    },
  ]

  return (
    <main className="flex-grow-1">
      <Header />
      <CardsList data={pizzas} />
    </main>
  )
}

export default Home
