import { createContext, useState } from "react"
import { fetchData } from "../utils/fetch"

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"))

  const login = async (email, password) => {
    let result
    await fetchData({
      data: {
        endpoint: "http://localhost:5000/api/auth/login",
        options: {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        },
      },
      callback: ({ token }) => {
        localStorage.setItem("token", token)
        setToken(token)
      },
      errorCallback: async (error) => {
        result = { error: await error?.message }
      },
    })
    return result
  }

  const logout = () => {
    setToken(undefined)
    localStorage.removeItem("token")
  }

  const context = { token, login, logout }
  return <UserContext.Provider value={context}>{children}</UserContext.Provider>
}

export default UserProvider
