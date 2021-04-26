import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Links = () => {
  return (
    <ul className="links">
      <li>
        <AnchorLink className="links__item" to="/#lokalizacja">
          Lokalizacja
          <span></span>
        </AnchorLink>
      </li>
      <li>
        <AnchorLink className="links__item" to="/#mieszkania">
          Karty lokali
          <span></span>
        </AnchorLink>
      </li>
      <li>
        <AnchorLink className="links__item" to="/#galeria">
          Galeria
          <span></span>
        </AnchorLink>
      </li>
      <li>
        <AnchorLink className="links__item" to="/#kontakt">
          Kontakt
          <span></span>
        </AnchorLink>
      </li>
    </ul>
  )
}

export default Links
