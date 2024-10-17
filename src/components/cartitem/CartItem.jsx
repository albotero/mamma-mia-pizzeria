import { Button } from "react-bootstrap"
import { BsTrash3 } from "react-icons/bs"
import { IoMdAdd, IoMdRemove } from "react-icons/io"

import { currency } from "../../utils/format"

const CartItem = ({ pizza, count, setCart }) => {
  const { id, name, price, img } = pizza

  const modifyCount = (type) => {
    setCart((prev) => {
      const newArr = [...prev]
      const newCount = type === "add" ? count + 1 : count - 1
      const i = prev.findIndex((el) => el.id === id)
      newArr.splice(i, 1, { id, count: newCount })
      return newArr
    })
  }

  return (
    count > 0 && (
      <div className="row align-items-center my-4">
        <img src={`/img/pizzas/${img}`} className="col-2" />
        <p className="col m-0 h5">{name}</p>
        <p className="col me-2 my-0 d-flex flex-column align-items-end">
          <span className="h5 m-0">{currency(price * count)}</span>
          <span className="small text-secondary">{currency(price)} c/u</span>
        </p>
        <Button variant="outline-danger" className="col-1" onClick={() => modifyCount("rem")}>
          {count > 1 ? <IoMdRemove size="1.2rem" /> : <BsTrash3 size="1.2rem" />}
        </Button>
        <p className="col-1 m-0 h6 text-center">{count}</p>
        <Button variant="outline-primary" className="col-1" onClick={() => modifyCount("add")}>
          <IoMdAdd size="1.2rem" />
        </Button>
      </div>
    )
  )
}

export default CartItem
