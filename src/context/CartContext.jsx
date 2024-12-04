import { createContext, useContext, useEffect, useState } from "react"
import { usePizzas } from "./PizzasContext"
import { fetchData } from "../utils/fetch"
import { useUser } from "./UserContext"

const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])
  const [cartTotal, setCartTotal] = useState(0)
  const { findPizza } = usePizzas()
  const { token } = useUser()

  useEffect(() => {
    setCartTotal(cart.reduce((acc, { id, count }) => acc + findPizza(id).price * count, 0))
  }, [cart, findPizza, setCartTotal])

  const modifyCount = (id, type) => {
    setCart((prev) => {
      const i = prev.findIndex((el) => el.id === id)
      let newArr
      if (i === -1) {
        // If item does not exist
        newArr = [...prev, { id, count: 1 }]
      } else {
        // Modify count
        const newCount = type === "add" ? prev[i].count + 1 : prev[i].count - 1
        newArr = [...prev]
        newArr.splice(i, 1, { id, count: newCount })
      }
      localStorage.setItem("cart", JSON.stringify(newArr))
      return newArr
    })
  }

  const clearCart = () => {
    setCart([])
    localStorage.removeItem("cart")
  }

  const buyCart = async () => {
    let result
    await fetchData({
      data: {
        endpoint: "http://localhost:5000/api/checkouts",
        options: {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
          body: JSON.stringify(cart),
        },
      },
      callback: () => clearCart(),
      errorCallback: async (error) => {
        result = { error: await error?.message }
      },
    })
    return result
  }

  const context = { cart, cartTotal, setCart, modifyCount, clearCart, buyCart }
  return <CartContext.Provider value={context}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)

export default CartProvider
