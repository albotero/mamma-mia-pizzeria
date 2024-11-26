import { Button, Col, Row } from "react-bootstrap"
import { BsTrash3 } from "react-icons/bs"
import { IoMdAdd, IoMdRemove } from "react-icons/io"

import { useCart } from "../../context/CartContext"
import { currency } from "../../utils/format"

const CartItem = ({ pizza, count }) => {
  const { modifyCount } = useCart()
  const { id, name, price, img } = pizza

  return (
    count > 0 && (
      <Row className="align-items-start my-4">
        <img src={img} className="col-4 col-md-3" />
        <Col className="row row-cols-2 row-cols-md-3">
          <Col className="h5 m-0 col-md-4 order-1 text-capitalize">{name}</Col>
          <Col className="m-0 text-end order-2">
            <span className="h5">{currency(price * count)}</span>
            <span className="small text-secondary text-end d-none d-md-block">{currency(price)} c/u</span>
          </Col>
          <Col className="small text-secondary text-end order-4 d-md-none">{currency(price)} c/u</Col>
          <Col className="col-md-3 row order-3 pt-1 pb-md-1 mt-md-0 mx-auto ms-md-2 me-md-0">
            <Button variant="outline-danger" className="col-4 px-1 p-2 lh-1" onClick={() => modifyCount(id, "rem")}>
              {count > 1 ? <IoMdRemove /> : <BsTrash3 />}
            </Button>
            <Col className="col-4 m-0 h6 text-center align-self-center lh-1">{count}</Col>
            <Button variant="outline-primary" className="col-4 px-1 py-2 lh-1" onClick={() => modifyCount(id, "add")}>
              <IoMdAdd />
            </Button>
          </Col>
        </Col>
      </Row>
    )
  )
}

export default CartItem
