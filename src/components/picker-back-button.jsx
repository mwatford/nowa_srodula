import React from "react"
import BackIcon from "@/components/back"

const ArrowLeft = ({ color, onClick }) => {
  return (
    <button className="picker__back" onClick={onClick}>
      <div className="icon">
        <BackIcon></BackIcon>
      </div>
      Powrót
    </button>
  )
}

export default ArrowLeft
