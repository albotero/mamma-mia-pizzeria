import { useState } from "react"
import { Button } from "react-bootstrap"
import { FaRegCircleCheck } from "react-icons/fa6"
import { MdOutlineReportGmailerrorred } from "react-icons/md"
import Input from "../../components/input/Input"

const Form = ({ inputs, setValue, onSubmit, successMessage, submitButton }) => {
  const [result, setResult] = useState()

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
        color: "success",
        message: (
          <p className="d-flex align-items-center my-1">
            <FaRegCircleCheck size="1.2rem" />
            <span className="ms-2">{successMessage || "Data sent to server"}</span>
          </p>
        ),
      })
    } catch ({ errors }) {
      // Render error message
      setResult({
        title: "Error",
        color: "danger",
        message: (
          <>
            <p className="my-2">The following error{errors.length === 1 ? "" : "s"} occurred:</p>
            {errors.map((err, i) => (
              <p key={`error-${i}`} className="d-flex align-items-center my-1">
                <MdOutlineReportGmailerrorred size="1.5rem" />
                <span className="ms-1">{err}</span>
              </p>
            ))}
          </>
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

      {result && (
        <div
          className={`border border-${result.color} bg-${result.color} bg-opacity-10 text-${result.color} rounded mt-4 p-4 pb-2`}
        >
          <p className="h4">{result.title}</p>
          <div className="d-flex flex-column align-center ms-2 mb-2">{result.message}</div>
        </div>
      )}
    </>
  )
}

export default Form
