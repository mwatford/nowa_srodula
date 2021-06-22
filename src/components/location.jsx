import React from "react"
import LinkToTheTop from "@/components/home/link-to-the-top"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Location = () => {
  const images = useStaticQuery(graphql`
    query {
      prace: file(relativePath: { eq: "prace.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1366) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const img = images.prace.childImageSharp.fluid

  return (
    <div className="location" id="lokalizacja">
      <div className="gutters" data-aos="fade-left" data-aos-offset="200">
        <figure>
          <Img fluid={img}></Img>
          <figcaption>
            Aktualne zdjęcie z postępujących prac na budowie.
          </figcaption>
        </figure>
        <div className="header">
          <h2 className="title">Zapraszamy na prezentację.</h2>
          <p>Przyjedź do naszego biura sprzedaży na terenie budowy.</p>
        </div>
      </div>
      <iframe
        data-aos="fade-right"
        data-aos-offset="200"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2548.773096937723!2d19.16207731606655!3d50.29616327945434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDE3JzQ2LjIiTiAxOcKwMDknNTEuNCJF!5e0!3m2!1spl!2spl!4v1614868487869!5m2!1spl!2spl"
        className="google-map"
        loading="lazy"
        title="lokalizacja"
      ></iframe>
      <LinkToTheTop></LinkToTheTop>
    </div>
  )
}

export default Location
