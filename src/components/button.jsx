import React from "react"

const Button = ({ children, onClick, color, small }) => {
  return (
    <button
      className={`button ${color ? "button--" + color : ""} ${
        small ? "button--small" : ""
      }`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  )
}

export default Button
