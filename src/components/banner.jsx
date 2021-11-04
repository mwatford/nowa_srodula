import React, { useEffect } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import anime from "animejs"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Button from "@/components/button"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "banner.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      md: file(relativePath: { eq: "banner-md.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobile: file(relativePath: { eq: "banner-mobile-2.webp" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  let sources = [
    data.mobile.childImageSharp.fluid,
    {
      ...data.banner.childImageSharp.fluid,
      media: `(min-width: 1024px)`,
    },
    {
      ...data.md.childImageSharp.fluid,
      media: `(min-width: 500px)`,
    },
  ]

  return (
    <section className="banner col">
      <div className="banner__image">
        <Img fluid={sources} className="banner__image--desktop" />
      </div>
      <div className="header" data-aos="fade-left">
        <h1>Osiedle Nowa Środula.</h1>
        <h2 className="title">
          Twoje miejsce <br />w Sosnowcu.
        </h2>
        <AnchorLink to="/#kontakt">
          <Button onClick={() => {}}>
            Zapytaj o ofertę
            <div className="icon">
              <div className="arrow-right"></div>
            </div>
          </Button>
        </AnchorLink>
      </div>
    </section>
  )
}

export default Banner
