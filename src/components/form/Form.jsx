import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { FaRegCircleCheck } from "react-icons/fa6"
import { MdOutlineReportGmailerrorred } from "react-icons/md"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

import Input from "../../components/input/Input"
import SwalHtml from "../swalhtml/SwalHtml"

const MySwal = withReactContent(Swal)

const Form = ({ inputs, setValue, onSubmit, successMessage, submitButton }) => {
  const [result, setResult] = useState()

  useEffect(() => {
    if (result)
      MySwal.fire({
        ...result,
        confirmButtonText: "Ok!",
        confirmButtonColor: "#333",
      })
  }, [result])

  const sendForm = (e) => {
    try {
      // Check if inputs have valid data
      const errors = inputs.map(({ invalid }) => invalid()).filter((el) => el)
      if (errors.length) throw { errors }
      // Send data to server
      const result = onSubmit()
      if (result?.error) throw { errors: [result.error] }
      // Render success message
      setResult({
        title: "Success",
        icon: "success",
        html: <SwalHtml message={successMessage || "Data sent to server"} Icon={FaRegCircleCheck} />,
      })
    } catch ({ errors }) {
      // Render error message
      setResult({
        title: "Error",
        icon: "error",
        html: (
          <SwalHtml
            message={`The following error${errors.length === 1 ? "" : "s"} occurred:`}
            list={errors}
            Icon={MdOutlineReportGmailerrorred}
          />
        ),
      })
    } finally {
      e.preventDefault()
    }
  }

  return (
    <>
      <form action="" onSubmit={sendForm} className="d-flex flex-column gap-4 mt-4">
        {inputs.map(({ id, label, prop, type, invalid, required }) => (
          <div key={id} className="form-group row">
            <label htmlFor={id} className="col-md-4 col-form-label">
              {label}: {required && <span className="text-danger">*</span>}
            </label>
            <Input
              className="col-md-8"
              type={type}
              id={id}
              invalid={invalid()}
              setValue={{ callback: setValue, prop }}
            />
          </div>
        ))}

        <div className="row">
          <Button type="submit" variant="outline-dark" className="btn-lg col-6 col-md-4 mx-auto mt-2">
            {submitButton}
          </Button>
        </div>
      </form>
    </>
  )
}

export default Form
