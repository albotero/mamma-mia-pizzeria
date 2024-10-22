import { FaRegCircleCheck } from "react-icons/fa6"
import { MdOutlineReportGmailerrorred } from "react-icons/md"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

export const showSweetAlert = ({ success, message, list }) => {
  const html = (Icon) => (
    <>
      <p className="d-flex align-items-center my-1">
        {list ? null : <Icon size="1.2rem" />}
        <span className="ms-2">{message}</span>
      </p>

      {list?.map((line, i) => (
        <p key={`line-${i}`} className="d-flex align-items-center my-1">
          <Icon size="1.5rem" />
          <span className="ms-1">{line}</span>
        </p>
      ))}
    </>
  )

  withReactContent(Swal).fire({
    title: success ? "Success" : "Error",
    icon: success ? "success" : "error",
    html: html(success ? FaRegCircleCheck : MdOutlineReportGmailerrorred),
    confirmButtonText: "Ok!",
    confirmButtonColor: "#333",
  })
}
