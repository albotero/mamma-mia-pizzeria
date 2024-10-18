import { useContext } from "react"
import { ListGroup, ListGroupItem } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

import { currency } from "../../utils/format"
import IngredientList from "../ingredientlist/IngredientList"
import { CartContext } from "../../context/CartContext"

const CardPizza = ({ pizza: { id, name, price, ingredients, img } }) => {
  const { modifyCount } = useContext(CartContext)

  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="mb-0">Pizza {name}</Card.Title>
      </Card.Body>
      <ListGroup className="rounded-0 border-0 text-center">
        <ListGroupItem className="border-start-0 border-end-0">
          <IngredientList ingredients={ingredients} />
        </ListGroupItem>
        <ListGroupItem className="border-start-0 border-end-0 border-bottom-0">
          <p className="h4 my-2">Precio: {currency(price)}</p>
        </ListGroupItem>
      </ListGroup>
      <Card.Footer className="d-flex justify-content-evenly mb-3">
        <Button variant="outline-dark">Ver más 👀</Button>
        <Button variant="dark" onClick={() => modifyCount(id, "add")}>
          Añadir 🛒
        </Button>
      </Card.Footer>
    </Card>
  )
}

export default CardPizza
