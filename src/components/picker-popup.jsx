import React, { useRef } from "react"
import ReactDOM from 'react-dom'
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Button from "@/components/button"
import Confetti from "@/components/confetti"
import Envelope from "@/components/envelope"
import BackButton from "@/components/back"

const Popup = ({ callback }) => {
  const popupEl = useRef(null)

  // const onPopupClick = e => {
  //   if (e.target === popupEl.current) callback()
  // }

  return ReactDOM.createPortal(
    <div className="popup">
      <div className="popup__content">
        <div className="header">
          <div className="row">
            <h2 className="title">Sukces!</h2>
            <Confetti></Confetti>
          </div>
          <h3 className="subheader">
            Udało Ci się pobrać kartę Twojego nowego mieszkania.
          </h3>
          <p className="text--dark-blue">
            Jeżeli chciałbyś dowiedzieć się więcej wypełnij formularz
            kontaktowy, zadzwoń lub odwiedź nas w biurze sprzedaży.
          </p>
        </div>
        <div className="row jc-sb wrap">
          <AnchorLink to="/#kontakt" onAnchorLinkClick={callback}>
            <Button color="light" onClick={() => {}}>
              <span>Wypełnij formularz</span>
              <div className="icon">
                <Envelope></Envelope>
              </div>
            </Button>
          </AnchorLink>
          <Button color="empty" onClick={() => callback()}>
            Powrót
            <div className="icon">
              <BackButton></BackButton>
            </div>
          </Button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  )
}

export default Popup
