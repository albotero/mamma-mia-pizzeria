import { useState } from "react"
import Form from "../../components/form/Form"
import { checkEmail, checkPassword } from "../../utils/regex"

const Login = () => {
  const [loginData, setLoginData] = useState({})
  const { email, password } = loginData

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

  // Send the data to server
  const onSubmit = () => ({})

  return (
    <main>
      <div className="col-10 col-md-5 mx-auto pt-5">
        <h2>Login</h2>
        <Form
          inputs={inputs}
          onSubmit={onSubmit}
          setValue={setLoginData}
          submitButton="Login"
          successMessage="Authentication successful!"
        />
      </div>
    </main>
  )
}

export default Login
