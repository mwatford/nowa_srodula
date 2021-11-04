import React from "react"

const MenuIcon = ({ close }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 30 30"
      className="menu-button"
    >
      {!close ? (
        <g className="icon">
          <rect
            width="30"
            height="2"
            transform="translate(29.741 5.714) rotate(180)"
          />
          <rect
            width="30"
            height="2"
            transform="translate(29.741 15.852) rotate(180)"
          />
          <rect
            width="18.75"
            height="2"
            transform="translate(29.741 28) rotate(180)"
          />
        </g>
      ) : (
        <g transform="translate(0.258)" id="g14" className="icon--close">
          <path
            transform="translate(24.641 26.027) rotate(-135)"
            d="M 0,0 H 29.999001 V 2 H 0 Z"
          />
          <path
            transform="translate(25.633 5.375) rotate(135)"
            d="M 0,0 H 29.402 V 2 H 0 Z"
          />
        </g>
      )}
    </svg>
  )
}

export default MenuIcon
