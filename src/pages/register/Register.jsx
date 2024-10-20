import { useContext, useState } from "react"

import Form from "../../components/form/Form"
import { UserContext } from "../../context/UserContext"

const Register = () => {
  const { register } = useContext(UserContext)
  const [registerData, setRegisterData] = useState({})
  const { email, password, confirmPassword } = registerData

  const inputs = [
    {
      id: "email",
      label: "Email",
      type: "email",
      prop: "email",
      required: true,
      invalid: () => (email?.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g) ? null : "Please provide a valid email address"),
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      prop: "password",
      required: true,
      invalid: () => (password?.match(/^.{6,}$/g) ? null : "The password must be at least 6 characters long"),
    },
    {
      id: "confirm-password",
      label: "Confirm password",
      type: "password",
      prop: "confirmPassword",
      required: true,
      invalid: () => (password && password === confirmPassword ? null : "The passwords don't match"),
    },
  ]

  const handleSubmit = () => register(registerData)

  return (
    <main>
      <div className="col-10 col-md-5 mx-auto pt-5">
        <h2>Register</h2>
        <Form inputs={inputs} onSubmit={handleSubmit} setValue={setRegisterData} submitButton="Register" />
      </div>
    </main>
  )
}

export default Register
