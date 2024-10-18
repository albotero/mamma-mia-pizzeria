import { Route, Routes } from "react-router-dom"

import Footer from "./components/footer/Footer"
import MenuBar from "./components/menubar/MenuBar"
import Home from "./pages/home/Home"
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
import Cart from "./pages/cart/Cart"
import Pizza from "./pages/pizza/Pizza"

function App() {
  return (
    <>
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/001" element={<Pizza />} />
        <Route path="/profile" />
        <Route path="*" />
      </Routes>
      <Footer />
    </>
  )
}

export default App
