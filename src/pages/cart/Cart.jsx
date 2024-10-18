import { useState } from "react"
import { Button } from "react-bootstrap"
import { IoWarningOutline } from "react-icons/io5"

import { pizzas, pizzaCart } from "../../utils/pizzas"
import CartItem from "../../components/cartitem/CartItem"
import { currency } from "../../utils/format"

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart)

  const findPizza = (id) => pizzas.find((el) => el.id === id)
  const total = cart.reduce((acc, { id, count }) => acc + findPizza(id).price * count, 0)

  return (
    <main>
      <div className="col-10 col-md-5 mx-auto pt-5">
        <h2>Detalles del pedido</h2>
        {total === 0 ? (
          <p className="my-4 fs-4 text-secondary text-center text-md-start">
            <IoWarningOutline className="mb-2 me-2" size="2rem" />
            No tiene ninguna pizza en el carrito
          </p>
        ) : (
          <>
            {cart.map(({ id, count }) => (
              <CartItem key={id} pizza={findPizza(id)} count={count} setCart={setCart} />
            ))}
            <p className="h1 my-4">Total: {currency(total)}</p>
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
