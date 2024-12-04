import { useState } from "react"
import { IoWarningOutline } from "react-icons/io5"

import CartItem from "../../components/cartitem/CartItem"
import Form from "../../components/form/Form"
import { currency } from "../../utils/format"
import { useCart } from "../../context/CartContext"
import { usePizzas } from "../../context/PizzasContext"
import { useUser } from "../../context/UserContext"

const Cart = () => {
  const { cart, cartTotal, buyCart, clearCart } = useCart()
  const { findPizza } = usePizzas()
  const { token } = useUser()
  const [resultAvailable, setResultAvailable] = useState(false)

  return (
    <main>
      <div className="col-10 col-md-5 mx-auto pt-5">
        <h2>Detalles del pedido</h2>
        {cartTotal === 0 && !resultAvailable ? (
          <p className="my-4 fs-4 text-secondary text-center text-md-start">
            <IoWarningOutline className="mb-2 me-2" size="2rem" />
            No tiene ninguna pizza en el carrito
          </p>
        ) : (
          <>
            {cart.map(({ id, count }) => (
              <CartItem key={id} pizza={findPizza(id)} count={count} />
            ))}
            <Form
              submit={{
                callback: buyCart,
                title: "Pagar",
                success: "¡Compra exitosa!",
                variant: "dark",
                disabled: !token,
              }}
              reset={{
                callback: clearCart,
                title: "🛒 Vaciar carrito",
              }}
              resultOpts={{
                hideForm: true,
                setResultAvailable,
              }}
            >
              <p className="h1 m-0 text-center text-md-start">Total: {currency(cartTotal)}</p>
            </Form>
          </>
        )}
      </div>
    </main>
  )
}

export default Cart
