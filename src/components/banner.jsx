import React, { useEffect } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import anime from "animejs"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Button from "@/components/button"

const animation = () => {
  anime({
    targets: ".strike-through",
    width: ["0%", "100%"],
    duration: 2000,
    delay: 500,
    easing: "easeInSine",
  })
}

const Banner = () => {
  const images = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "banner.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const img = images.banner.childImageSharp.fluid

  useEffect(() => {
    animation()
  }, [])

  return (
    <section className="banner col">
      <div className="banner__image">
        <Img fluid={img} className="banner__image--desktop" />
      </div>
      <div className="header">
        <h1>Osiedle Nowa Środula.</h1>
        <h2 className="title">
          Twoje miejsce <br />w Sosnowcu.
        </h2>
        <AnchorLink to="/#kontakt">
          <Button onClick={() => {}}>Zapytaj o ofertę</Button>
        </AnchorLink>
      </div>
    </section>
  )
}

export default Banner
