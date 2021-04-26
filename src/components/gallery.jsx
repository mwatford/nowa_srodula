import React from "react"
import ImageGallery from "react-image-gallery"
import { graphql, useStaticQuery } from "gatsby"

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

  return (
    <section id="galeria">
      <ImageGallery
        items={data.allImageSharp.nodes.map(img => ({
          original: img.fluid.srcWebp,
        }))}
        showThumbnails={false}
        showIndex={true}
        autoPlay={true}
        showPlayButton={false}
        showFullscreenButton={false}
        lazyLoad={true}
        renderLeftNav={renderLeftNav}
        renderRightNav={renderRightNav}
        originalAlt="wizualizacja"
      ></ImageGallery>
    </section>
  )
}

export default Gallery
