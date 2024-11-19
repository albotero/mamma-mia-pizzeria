import { createContext, useContext, useEffect, useState } from "react"
import { PizzasContext } from "./PizzasContext"

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  const { findPizza } = useContext(PizzasContext)

  useEffect(() => {
    setCartTotal(cart.reduce((acc, { id, count }) => acc + findPizza(id).price * count, 0))
  }, [cart, findPizza, setCartTotal])

  const modifyCount = (id, type) => {
    setCart((prev) => {
      const i = prev.findIndex((el) => el.id === id)
      // If item does not exist
      if (i === -1) return [...prev, { id, count: 1 }]
      // Modify count
      const newCount = type === "add" ? prev[i].count + 1 : prev[i].count - 1
      const newArr = [...prev]
      newArr.splice(i, 1, { id, count: newCount })
      return newArr
    })
  }

  const context = { cart, cartTotal, setCart, modifyCount }
  return <CartContext.Provider value={context}>{children}</CartContext.Provider>
}

export default CartProvider
