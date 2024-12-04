import { useState } from "react"

import Form from "../../components/form/Form"
import { checkEmail, checkPassword } from "../../utils/regex"
import { useUser } from "../../context/UserContext"

const Login = () => {
  const { login } = useUser()
  const [credentials, setCredentials] = useState({})
  const { email, password } = credentials

  const inputs = [
    {
      id: "email",
      label: "Email",
      type: "email",
      prop: "email",
      required: true,
      invalid: () => checkEmail(email),
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      prop: "password",
      required: true,
      invalid: () => checkPassword(password),
    },
  ]

  const handleSubmit = () => login(credentials)

  return (
    <main>
      <div className="col-10 col-md-5 mx-auto pt-5">
        <h2>Login</h2>
        <Form
          inputs={inputs}
          setValue={setCredentials}
          submit={{
            callback: handleSubmit,
            title: "Login",
            success: "¡Autenticación exitosa!",
          }}
        />
      </div>
    </main>
  )
}

export default Login
