import { currency } from "../../utils/format"
import { ListGroup, ListGroupItem } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Card>
      <Card.Img variant="top" src={`/img/pizzas/${img}`} />
      <Card.Body>
        <Card.Title className="mb-0">Pizza {name}</Card.Title>
      </Card.Body>
      <ListGroup className="rounded-0 border-0 text-center">
        <ListGroupItem className="border-start-0 border-end-0">
          <p className="fs-5 fw-light text-secondary mb-1">🍕 Ingredientes:</p>
          <ul className="mb-1 list-inline text-capitalize">
            {ingredients.map((ingredient, i) => (
              <li key={ingredient} className="list-inline-item">
                {i > 0 && <span className="me-2 text-body-tertiary">|</span>}
                {ingredient}
              </li>
            ))}
          </ul>
        </ListGroupItem>
        <ListGroupItem className="border-start-0 border-end-0 border-bottom-0">
          <p className="h4 my-2">Precio: {currency(price)}</p>
        </ListGroupItem>
      </ListGroup>
      <Card.Body className="d-flex justify-content-evenly mb-3">
        <Button variant="dark">Ver más 👀</Button>
        <Button variant="outline-dark">Añadir 🛒</Button>
      </Card.Body>
    </Card>
  )
}

export default CardPizza
