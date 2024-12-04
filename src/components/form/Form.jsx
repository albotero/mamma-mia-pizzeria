import { Button, FormLabel, Row } from "react-bootstrap"

import { showSweetAlert } from "../../utils/sweet-alert"
import Input from "../input/Input"

const Form = ({ children, inputs, setValue, submit, reset }) => {
  const resetForm = () => reset?.callback()

  const sendForm = async (e) => {
    e.preventDefault()
    try {
      // Check if inputs have valid data
      if (inputs) {
        const errors = inputs.map(({ invalid }) => invalid()).filter((el) => el)
        if (errors.length) throw { errors }
      }
      // Send data to server
      const result = await submit.callback()
      if (result?.error) throw { errors: [result.error] }
      // Render success message
      showSweetAlert({ message: submit.success || "Data sent to server", success: true })
    } catch ({ errors }) {
      // Render error message
      showSweetAlert({ message: `The following error${errors.length === 1 ? "" : "s"} occurred:`, list: errors })
    }
  }

  return (
    <>
      {
        <form onSubmit={sendForm} onReset={resetForm} className="d-flex flex-column gap-4 mt-4">
          {children}

          {inputs?.map(({ id, label, prop, type, invalid, required }) => (
            <Row key={id} className="form-group">
              <FormLabel htmlFor={id} className="col-md-4">
                {label}: {required && <span className="text-danger">*</span>}
              </FormLabel>
              <Input
                className="col-md-8"
                type={type}
                id={id}
                invalid={invalid()}
                setValue={{ callback: setValue, prop }}
              />
            </Row>
          ))}

          <Row>
            <Button
              type="submit"
              variant={submit.variant || "outline-dark"}
              className="btn-lg col-6 col-md-4 mx-auto mt-2"
              disabled={submit.disabled}
            >
              {submit.title}
            </Button>
            {reset && (
              <Button type="reset" variant="outline-dark" className="btn-lg col-6 col-md-4 mx-auto mt-2">
                {reset.title}
              </Button>
            )}
          </Row>
        </form>
      }
    </>
  )
}

export default Form
