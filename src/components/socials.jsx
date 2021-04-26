import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Socials = () => {
  const images = useStaticQuery(graphql`
    query {
      fb: file(relativePath: { eq: "socials/fb.svg" }) {
        publicURL
      }
      ig: file(relativePath: { eq: "socials/ig.svg" }) {
        publicURL
      }
      email: file(relativePath: { eq: "socials/email.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <ul className="row socials">
      {/* <li className="socials__item">
        <a
          href="https://www.instagram.com/segments.development/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={images.ig.publicURL} alt="#" />
        </a>
      </li> */}
      <li className="socials__item">
        <AnchorLink to="/#kontakt">
          <img src={images.email.publicURL} alt="#" />
        </AnchorLink>
      </li>
      <li className="socials__item">
        <a
          href="https://www.facebook.com/nowasrodula"
          target="_blank"
          rel="noreferrer"
        >
          <img src={images.fb.publicURL} alt="#" />
        </a>
      </li>
    </ul>
  )
}

export default Socials
