import { useState } from "react"
import Form from "../../components/form/Form"
import { checkEmail, checkPassword } from "../../utils/regex"

const Register = () => {
  const [registerData, setRegisterData] = useState({})
  const { email, password, confirmPassword } = registerData

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
    {
      id: "confirm-password",
      label: "Confirm password",
      type: "password",
      prop: "confirmPassword",
      required: true,
      invalid: () => (confirmPassword === password ? null : "The passwords don't match"),
    },
  ]

  // Send the data to server
  const onSubmit = () => ({})

  return (
    <main>
      <div className="col-10 col-md-5 mx-auto pt-5">
        <h2>Register</h2>
        <Form inputs={inputs} onSubmit={onSubmit} setValue={setRegisterData} submitButton="Register" />
      </div>
    </main>
  )
}

export default Register
