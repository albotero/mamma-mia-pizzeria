import { createContext, useContext, useEffect, useState } from "react"
import { PizzasContext } from "./PizzasContext"

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const { findPizza } = useContext(PizzasContext)

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

  const context = { cart, cartTotal, setCart, modifyCount, clearCart }
  return <CartContext.Provider value={context}>{children}</CartContext.Provider>
}

export default CartProvider
