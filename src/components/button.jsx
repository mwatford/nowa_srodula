import React from "react"

const Button = ({ children, onClick, color }) => {
  return (
    <button
      className={`button ${color ? `button--${color}` : ""}`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  )
}

export default Button
