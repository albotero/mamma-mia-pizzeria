import { Button } from "react-bootstrap"
import { IoWarningOutline } from "react-icons/io5"

import CartItem from "../../components/cartitem/CartItem"
import { currency } from "../../utils/format"
import { useCart } from "../../context/CartContext"
import { usePizzas } from "../../context/PizzasContext"
import { useUser } from "../../context/UserContext"

const Cart = () => {
  const { cart, cartTotal } = useCart()
  const { findPizza } = usePizzas()
  const { token } = useUser()

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
            <div className="d-flex flex-column flex-md-row my-4">
              <p className="h1 mt-2 text-center text-md-start">Total: {currency(cartTotal)}</p>
              <Button variant="dark" className="btn-lg col-5 col-md-3 mx-auto ms-md-4 my-2" disabled={!token}>
                Pagar
              </Button>
            </div>
          </>
        )}
      </div>
    </main>
  )
}

export default Cart
