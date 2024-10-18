import { Link } from "react-router-dom"
import { Container, Row } from "react-bootstrap"
import { TiArrowBackOutline } from "react-icons/ti"

import ErrorGif from "./error.gif"
import Error from "../../components/error/Error"

const NotFound = () => {
  const error = {
    name: "Error 404",
    message: "No encontramos la página que buscas",
  }

  return (
    <main>
      <Container>
        <Error error={error} img={ErrorGif} />
        <Row>
          <Link to="/" className="col-6 col-md-3 btn btn-lg btn-dark mx-auto mt-3">
            <TiArrowBackOutline size="2rem" className="pb-2" />
            Volver a la página principal
          </Link>
        </Row>
      </Container>
    </main>
  )
}

export default NotFound
