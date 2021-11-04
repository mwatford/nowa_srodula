import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ImageGallery from "react-image-gallery"
import X from "@/components/home/gallery-2"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp(
        filter: { fluid: { originalName: { regex: "/slajd*/" } } }
      ) {
        nodes {
          fluid(maxWidth: 1920, quality: 80) {
            srcWebp
          }
        }
      }
    }
  `)

  const renderLeftNav = (onClick, disabled) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className="image-gallery-custom-left-nav"
        aria-label="poprzednie"
      >
        <img src="../../arrow-left.svg" alt="#" draggable={false} />
      </button>
    )
  }

  const renderRightNav = (onClick, disabled) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className="image-gallery-custom-right-nav"
        aria-label="następne"
      >
        <img src="../../arrow-right.svg" alt="#" draggable={false} />
      </button>
    )
  }

  const images = data.allImageSharp.nodes.map(img => img.fluid.srcWebp)

  return (
    <section id="galeria" className="gallery" data-aos="fade-up">
      {/* <ImageGallery
          items={data.allImageSharp.nodes.map(img => ({
            original: img.fluid.srcWebp,
          }))}
          showThumbnails={false}
          showIndex={true}
          autoPlay={false}
          showPlayButton={false}
          showFullscreenButton={false}
          lazyLoad={true}
          renderLeftNav={renderLeftNav}
          renderRightNav={renderRightNav}
          originalAlt="wizualizacja"
        ></ImageGallery> */}
      <X images={images}></X>
    </section>
  )
}

export default Gallery
