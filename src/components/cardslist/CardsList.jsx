import CardPizza from "../cardpizza/CardPizza"
import { CardGroup, Col, Row } from "react-bootstrap"
import Container from "react-bootstrap/Container"

const CardsList = ({ data }) => {
  return (
    <Container className="p-4 py-md-5">
      <CardGroup>
        <Row xs={1} md={3} className="g-4">
          {data.map((el) => (
            <Col key={el.id}>
              <CardPizza {...el} />
            </Col>
          ))}
        </Row>
      </CardGroup>
    </Container>
  )
}

export default CardsList
