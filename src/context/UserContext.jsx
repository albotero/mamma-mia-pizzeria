import { createContext, useContext, useState } from "react"

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true)

  const logout = () => setToken(false)

  return <UserContext.Provider value={{ token, logout }}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)

export default UserProvider
