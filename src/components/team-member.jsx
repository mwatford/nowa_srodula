import React from "react"
import Img from "gatsby-image"

const TeamMember = ({ name, phone, email, image, delay }) => {
  return (
    <div className="teamMember">
      {/* <Img
        fluid={image.fluid}
        className="teamMember__image"
        imgStyle={{ objectPosition: "0 0" }}
      ></Img> */}
      <picture className="teamMember__image">
        <img src={image} alt="#" data-aos="flip-right" data-aos-delay={delay}></img>
      </picture>
      <div className="col" data-aos="fade-up">
        <h3>{name}</h3>
        <span>{phone}</span>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  )
}

export default TeamMember
