import { createContext, useContext, useEffect, useState } from "react"

import { fetchData } from "../utils/fetch"
import { PizzasContext } from "./PizzasContext"
import { UserContext } from "./UserContext"

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const { findPizza } = useContext(PizzasContext)
  const { token } = useContext(UserContext)

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("cart"))
    if (localData) setCart(localData)
  }, [setCart])

  const cartTotal = cart.reduce((acc, { id, count }) => acc + findPizza(id).price * count, 0)

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

export default CartProvider
