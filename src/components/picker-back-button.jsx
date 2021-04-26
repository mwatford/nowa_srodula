import React from "react"

const ArrowLeft = ({ color, onClick }) => {
  return (
    <button className="picker__button" style={{ color }} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 59.039 55.781"
        fill={color}
      >
        <path
          d="M674.183,153.736H663.092l-10.928-28.949c-2.038-5.462-4-10.926-5.951-16.553h-.164c-1.875,5.382-4,11.009-6.118,16.634L629,153.736H618.4L640.994,94.7h10.6Z"
          transform="translate(-94.697 674.183) rotate(-90)"
        />
      </svg>
      wróć
    </button>
  )
}

export default ArrowLeft
