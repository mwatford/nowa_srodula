import React, { useState, useEffect, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-plugin-image"
import { x } from "@/utility/picker"

const buildings = [
  // {
  //   type: "F",
  //   coords: "287,301,407,581",
  //   x: "21%",
  //   y: "27%",
  // },
  // {
  //   type: "F",
  //   coords: "586,305,706,585",
  //   x: "42%",
  //   y: "27%",
  // },
  // {
  //   type: "F",
  //   coords: "281,626,401,906",
  //   x: "21%",
  //   y: "56%",
  // },
  // {
  //   type: "F",
  //   coords: "591,628,696,906",
  //   x: "42%",
  //   y: "56%",
  // },
  {
    type: "E",
    key: 1,
    x: "63%",
    y: "27%",
  },
  {
    type: "F",
    key: 2,
    x: "63%",
    y: "56%",
  },
]

const StepOne = ({ callback }) => {
  const data = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "picker-1.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const image = data.img.childImageSharp.fluid
  const [points, setPoints] = useState("")
  const imgEl = useRef(null)

  useEffect(() => {
    const onResize = () =>
      setPoints(
        x(
          imgEl.current,
          "0 0, 0 100, 60 101, 60 25, 75 25, 75 85, 20 85, 20 101, 100 101, 100 0"
        )
      )

    onResize()

    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <div className="picker__image" ref={imgEl}>
      <Img fluid={image} />
      {/* <img src="asd.png" alt="#" ref={imgEl} /> */}
      <svg width="100%" height="100%">
        <g>
          <polygon fill="#060F2DB7" points={points}></polygon>
          {buildings.map(el => (
            <rect
              key={el.key}
              width="10%"
              height="25%"
              x={el.x}
              y={el.y}
              className="overlay"
              onClick={() => callback(1, el.type)}
            ></rect>
          ))}
        </g>
      </svg>
    </div>
  )
}

export default StepOne
