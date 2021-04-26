import React, { useState } from "react"
import Popup from "@/components/picker-popup"

const Step = ({ type, floor, flat }) => {
  const imgURL = `../../picker/${type}_karty_lokali_pietro_${floor}/${type}_karty_lokali_pietro_${floor}-${flat}.webp`
  const fileURL = `../../karty/${type}_karty_lokali_pietro_${floor}.pdf`

  const [displayPopup, setDisplayPopup] = useState(false)

  return (
    <div className="picker__image">
      {displayPopup && <Popup callback={() => setDisplayPopup(false)}></Popup>}

      <a
        href={fileURL}
        download
        onClick={() => setDisplayPopup(true)}
        className="picker__download"
      >
        pobierz
      </a>
      <img src={imgURL} alt="karta lokalu" />
    </div>
  )
}

export default Step
