import { Col, Container, Image, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { MdLogout } from "react-icons/md"

import Woman from "./woman.gif"

const Profile = () => {
  return (
    <main>
      <Container className="mt-3">
        <Row>
          <Image src={Woman} className="col-6 col-md-2 mx-auto" />
        </Row>
        <Row className="justify-content-center align-items-center">
          <Col className="col-10 col-md-3 fs-5">
            <span className="fw-semibold">Email:</span> usuario@mammamia.com
          </Col>
          <Link to="/logout" className="col-6 col-md-2 btn btn-outline-dark mt-4 mt-md-0">
            <MdLogout size="1.7rem" className="pb-1" /> Cerrar sesión
          </Link>
        </Row>
      </Container>
    </main>
  )
}

export default Profile
