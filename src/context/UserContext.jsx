import { createContext, useState } from "react"
import { fetchData } from "../utils/fetch"

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [email, setEmail] = useState(localStorage.getItem("email"))

  const post = async (formData, endpoint) => {
    let result
    await fetchData({
      data: {
        endpoint: `http://localhost:5000/api/auth/${endpoint}`,
        options: {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      },
      callback: ({ token, email }) => {
        localStorage.setItem("token", token)
        localStorage.setItem("email", email)
        setToken(token)
        setEmail(email)
      },
      errorCallback: async (error) => {
        result = { error: await error?.message }
      },
    })
    return result
  }

  const login = (data) => post(data, "login")

  const register = (data) => post(data, "register")

  const logout = () => {
    setToken(undefined)
    setEmail(undefined)
    localStorage.removeItem("token")
    localStorage.removeItem("email")
  }

  const me = async (callback, errorCallback) => {
    await fetchData({
      data: {
        endpoint: "http://localhost:5000/api/auth/me",
        options: {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        },
      },
      callback,
      errorCallback,
    })
  }

  const context = { token, storedEmail: email, login, register, logout, me }
  return <UserContext.Provider value={context}>{children}</UserContext.Provider>
}

export default UserProvider
