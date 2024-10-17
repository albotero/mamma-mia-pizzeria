import { useEffect, useState } from "react"

import Header from "../../components/header/Header"
import CardsList from "../../components/cardslist/CardsList"
import Error from "../../components/error/Error"

const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    const getPizzas = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas")
        // Check for errors
        if (res.error) {
          const message = {
            400: "Solicitud no exitosa",
            403: "Sin autorización para consultar",
            404: "No se encontró el servidor",
            500: "El servidor no pudo procesar la solicitud",
          }
          throw {
            name: `Error ${res.status}`,
            message: message[res.status] || res.statusText,
          }
        }
        // Update data
        setPizzas(await res.json())
      } catch (err) {
        setError(err)
      }
    }
    getPizzas()
  }, [setPizzas])

  return (
    <main>
      <Header />
      {error ? <Error error={error} /> : <CardsList data={pizzas} />}
    </main>
  )
}

export default Home
