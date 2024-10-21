import { useState } from "react"
import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6"

const Input = ({ type, id, invalid, setValue, className }) => {
  const [touched, setTouched] = useState(false)
  const borderColor = invalid && touched ? "danger" : "secondary"
  const iconClasses = "position-absolute top-50 end-0 me-4 translate-middle-y"

  const handleChange = (e) => {
    // Update touched status
    setTouched(true)
    // Update value on parent Element
    const { callback, prop } = setValue
    callback((prev) => ({ ...prev, [prop]: e.target.value }))
  }

  return (
    <div className={`position-relative ${className}`}>
      <input
        type={type}
        name={id}
        id={id}
        className={`form-control border rounded-2 focus-ring border-${borderColor}`}
        style={{
          "--bs-focus-ring-width": "2px",
          "--bs-focus-ring-color": `rgba(var(--bs-${borderColor}-rgb), .25)`,
        }}
        onChange={handleChange}
      />
      {touched &&
        (invalid ? (
          <FaRegCircleXmark className={`${iconClasses} text-danger`} style={{ cursor: "help" }} title={invalid} />
        ) : (
          <FaRegCircleCheck className={`${iconClasses} text-success`} />
        ))}
    </div>
  )
}

export default Input
