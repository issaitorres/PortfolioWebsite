import "./IconButton.css"

const IconButton = ({ icon, href }) => {
  return (
    <a
      className="button iconbutton"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
        <span className="iconbutton__icon-container">
            {icon}
        </span>
    </a>
  )
}

export default IconButton