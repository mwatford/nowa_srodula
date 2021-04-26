import React, { useEffect } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import anime from "animejs"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
      mobile: file(relativePath: { eq: "banner-mobile.webp" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      xxl: file(relativePath: { eq: "banner.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      # sm: file(relativePath: { eq: "banner.webp" }) {
      #   childImageSharp {
      #     fluid(maxWidth: 768, quality: 100) {
      #       ...GatsbyImageSharpFluid
      #     }
      #   }
      # }
      # md: file(relativePath: { eq: "banner.webp" }) {
      #   childImageSharp {
      #     fluid(maxWidth: 992, quality: 100) {
      #       ...GatsbyImageSharpFluid
      #     }
      #   }
      # }
      # lg: file(relativePath: { eq: "banner.webp" }) {
      #   childImageSharp {
      #     fluid(maxWidth: 1200, quality: 100) {
      #       ...GatsbyImageSharpFluid
      #     }
      #   }
      # }
      # xl: file(relativePath: { eq: "banner.webp" }) {
      #   childImageSharp {
      #     fluid(maxWidth: 1440, quality: 100) {
      #       ...GatsbyImageSharpFluid
      #     }
      #   }
      # }
    }
  `)

  const sources = [
    images.mobile.childImageSharp.fluid,
    // {
    //   ...images.sm.childImageSharp.fluid,
    //   media: "(min-width: 768px)",
    // },
    // {
    //   ...images.md.childImageSharp.fluid,
    //   media: "(min-width: 992px)",
    // },
    // {
    //   ...images.lg.childImageSharp.fluid,
    //   media: "(min-width: 1200px)",
    // },
    // {
    //   ...images.xl.childImageSharp.fluid,
    //   media: "(min-width: 1440px)",
    // },
    {
      ...images.xxl.childImageSharp.fluid,
      media: "(min-width: 576px)",
    },
  ]

  useEffect(() => {
    animation()
  }, [])

  return (
    <section className="banner col">
      <div className="banner__image">
        <Img fluid={sources} className="banner__image--desktop" />
      </div>
      <div className="gutters">
        <h1>
          prawdopodobnie
          <span className="strike-through"></span>
        </h1>
        <h1>najlepsza lokalizacja</h1>
        <h1>w sosnowcu</h1>
        <AnchorLink to="/#kontakt" className="button">
          <span className="button__text">
            zapytaj o ofertę
            <span className="underline"></span>
          </span>
        </AnchorLink>
        <AnchorLink className="col" to="/#inwestycja">
          <p>Poznaj inwestycję</p>
          <img src="../../arrow-down.svg" alt="" />
        </AnchorLink>
      </div>
    </section>
  )
}

export default Banner
