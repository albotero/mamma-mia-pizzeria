import { useEffect, useState } from "react"
import { Button, Col, Container, Image, Row } from "react-bootstrap"
import { MdLogout } from "react-icons/md"

import { useUser } from "../../context/UserContext"
import Woman from "./woman.gif"

const Profile = () => {
  const { storedEmail, logout, me } = useUser()
  const [email, setEmail] = useState()

  useEffect(() => {
    if (storedEmail) {
      setEmail(storedEmail)
      return
    }
    const callback = ({ email }) => setEmail(email)
    const errorCallback = (err) => err && setEmail("ERROR while fetching data")
    me(callback, errorCallback)
  }, [storedEmail, me])

  return (
    <main>
      <Container className="mt-3">
        <Row>
          <Image src={Woman} className="col-6 col-md-2 mx-auto my-3" />
        </Row>
        <Row className="justify-content-center align-items-center">
          <Col className="col-10 col-md-3 fs-5">
            <span className="fw-semibold">Email:</span> {email}
          </Col>
          <Button variant="outline-dark" className="col-6 col-md-2 mt-4 mt-md-0" onClick={logout}>
            <MdLogout size="1.7rem" className="pb-1" /> Cerrar sesión
          </Button>
        </Row>
      </Container>
    </main>
  )
}

export default Profile
