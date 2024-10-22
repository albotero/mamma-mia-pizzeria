const SwalHtml = ({ Icon, list, message }) => {
  return (
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
}

export default SwalHtml
