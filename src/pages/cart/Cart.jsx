import { useContext } from "react"
import { Button } from "react-bootstrap"
import { IoWarningOutline } from "react-icons/io5"

import CartItem from "../../components/cartitem/CartItem"
import { findPizza } from "../../utils/cart"
import { currency } from "../../utils/format"
import { CartContext } from "../../context/CartContext"

const Cart = () => {
  const { cart, cartTotal } = useContext(CartContext)

  return (
    <main>
      <div className="col-10 col-md-5 mx-auto pt-5">
        <h2>Detalles del pedido</h2>
        {cartTotal === 0 ? (
          <p className="my-4 fs-4 text-secondary text-center text-md-start">
            <IoWarningOutline className="mb-2 me-2" size="2rem" />
            No tiene ninguna pizza en el carrito
          </p>
        ) : (
          <>
            {cart.map(({ id, count }) => (
              <CartItem key={id} pizza={findPizza(id)} count={count} />
            ))}
            <p className="h1 my-4">Total: {currency(cartTotal)}</p>
            <Button variant="dark" className="btn-lg">
              Pagar
            </Button>
          </>
        )}
      </div>
    </main>
  )
}

export default Cart
