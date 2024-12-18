import { Navigate, Route, Routes } from "react-router-dom"

import Footer from "./components/footer/Footer"
import MenuBar from "./components/menubar/MenuBar"
import Home from "./pages/home/Home"
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
import Cart from "./pages/cart/Cart"
import Pizza from "./pages/pizza/Pizza"
import NotFound from "./pages/notfound/NotFound"
import Profile from "./pages/profile/Profile"
import CartProvider from "./context/CartContext"
import PizzasProvider from "./context/PizzasContext"
import { useUser } from "./context/UserContext"

function App() {
  const { token } = useUser()

  return (
    <PizzasProvider>
      <CartProvider>
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={token ? <Navigate to="/" replace /> : <Register />} />
          <Route path="/login" element={token ? <Navigate to="/" replace /> : <Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" replace />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
        <Footer />
      </CartProvider>
    </PizzasProvider>
  )
}

export default App
