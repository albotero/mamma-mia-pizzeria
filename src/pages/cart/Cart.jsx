import { useContext } from "react"
import { Button } from "react-bootstrap"
import { IoWarningOutline } from "react-icons/io5"

import CartItem from "../../components/cartitem/CartItem"
import { currency } from "../../utils/format"
import { CartContext } from "../../context/CartContext"
import { PizzasContext } from "../../context/PizzasContext"
import { UserContext } from "../../context/UserContext"

const Cart = () => {
  const { cart, cartTotal, clearCart } = useContext(CartContext)
  const { findPizza } = useContext(PizzasContext)
  const { token } = useContext(UserContext)

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
            <div className="d-flex flex-column flex-md-row my-4 align-items-center" style={{ gap: 20 }}>
              <p className="h1 m-0 text-center text-md-start">Total: {currency(cartTotal)}</p>
              <Button variant="dark" className="btn-lg col-5 col-md-3" disabled={!token}>
                Pagar
              </Button>
              <Button variant="outline-dark" className="btn-lg col-8 col-md-5" onClick={clearCart}>
                🛒 Vaciar carrito
              </Button>
            </div>
          </>
        )}
      </div>
    </main>
  )
}

export default Cart
