import React, { useState, useEffect, useRef } from "react"
import Popup from "@/components/picker-popup"
import { x } from "@/utility/picker"
import Button from "@/components/button"
import DownloadIcon from "@/components/download"

const Step = ({ type, floor, flat }) => {
  const imgURL = `../../picker/${type}_karty_lokali_pietro_${floor}/${type}_karty_lokali_pietro_${floor}-${flat}.jpg`
  const fileURL = `../../karty/${type}_karty_lokali_pietro_${floor}.pdf`

  const [displayPopup, setDisplayPopup] = useState(false)
  const [points, setPoints] = useState("")
  const imgEl = useRef(null)

  useEffect(() => {
    const onResize = () =>
      setPoints(
        x(
          imgEl,
          "0 0, 0 100, 60 101, 60 25, 75 25, 75 85, 20 85, 20 101, 100 101, 100 0"
        )
      )

    onResize()

    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <div className="picker__image" ref={imgEl}>
      {displayPopup && <Popup callback={() => setDisplayPopup(false)}></Popup>}
      <a
        href={fileURL}
        download
        onClick={() => setDisplayPopup(true)}
        className="picker__download"
      >
        <Button color="green" onClick={() => {}}>
          Pobierz
          <div className="icon">
            <DownloadIcon></DownloadIcon>
          </div>
        </Button>
      </a>
      <img src={imgURL} alt="karta lokalu" />
    </div>
  )
}

export default Step
