import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Links = () => {
  return (
    <ul className="links">
      <li>
        <AnchorLink className="links__item" to="/#o_inwestycji">
          O inwestycji
        </AnchorLink>
      </li>
      <li>
        <AnchorLink className="links__item" to="/#lokalizacja">
          Lokalizacja
        </AnchorLink>
      </li>
      <li>
        <AnchorLink className="links__item" to="/#mieszkania">
          Karty lokali
        </AnchorLink>
      </li>
      <li>
        <AnchorLink className="links__item" to="/#zespol">
          Zespół
        </AnchorLink>
      </li>
      <li>
        <AnchorLink className="links__item" to="/#kontakt">
          Kontakt
        </AnchorLink>
      </li>
    </ul>
  )
}

export default Links
