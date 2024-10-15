import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import { Button, Navbar } from "react-bootstrap"
import { currency } from "../../utils/format"

const MenuBar = () => {
  // Variables to be retrieved from backend
  const total = 25000
  const token = false

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top" className="px-1 px-lg-4">
      <Container>
        <Navbar.Brand href="/">Pizzería Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">🍕 Home</Nav.Link>
            {token ? (
              <>
                <Nav.Link href="/">🔓 Profile</Nav.Link>
                <Nav.Link href="/">🔒 Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/">🔐 Login</Nav.Link>
                <Nav.Link href="/">🔐 Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Button variant="outline-info" className="mx-auto">
        🛒 Total: {currency(total)}
      </Button>
    </Navbar>
  )
}

export default MenuBar
