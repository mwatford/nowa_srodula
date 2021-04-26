import React, { useRef } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Popup = ({ callback }) => {
  const popupEl = useRef(null)

  const onPopupClick = e => {
    if (e.target === popupEl.current) callback()
  }

  return (
    <div className="popup" onClick={e => onPopupClick(e)} ref={popupEl}>
      <div className="popup__content">
        <h1 className="text--pink">UDAŁO SIĘ!</h1>
        <h1 className="text--dark-blue">POBRANO KARTĘ LOKALU.</h1>
        <p className="text--dark-blue">
          Jeżeli masz dodatkowe pytania skontaktuj się z działem
          <br />
          sprzedaży pod numerem 795 755 924 lub
        </p>
        <AnchorLink
          className="button button--filled"
          to="/#kontakt"
          onAnchorLinkClick={callback}
        >
          wypełnij formularz
        </AnchorLink>
      </div>
    </div>
  )
}

export default Popup
