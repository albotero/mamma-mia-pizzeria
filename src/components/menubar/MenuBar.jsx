import { useContext } from "react"
import { Navbar } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import { Link, NavLink } from "react-router-dom"

import { CartContext } from "../../context/CartContext"
import { currency } from "../../utils/format"

const MenuBar = () => {
  const { cartTotal } = useContext(CartContext)

  // Variables to be retrieved from backend
  const token = true

  const linkClassName = ({ isActive }) => "nav-link" + (isActive ? " text-light" : "")
  const cartButtonClassName = ({ isActive }) => "mx-auto btn " + (isActive ? "btn-info" : "btn-outline-info")

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top" className="px-1 px-lg-4">
      <Container>
        <Link to="/" className="navbar-brand">
          Pizzería Mamma Mia!
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className={linkClassName}>
              🍕 Home
            </NavLink>
            {token ? (
              <>
                <NavLink to="/profile" className={linkClassName}>
                  🔓 Profile
                </NavLink>
                <NavLink to="/logout" className={linkClassName}>
                  🔒 Logout
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/login" className={linkClassName}>
                  🔐 Login
                </NavLink>
                <NavLink to="/register" className={linkClassName}>
                  🔐 Register
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <NavLink to="/cart" className={cartButtonClassName}>
        🛒 Total: {currency(cartTotal)}
      </NavLink>
    </Navbar>
  )
}

export default MenuBar
