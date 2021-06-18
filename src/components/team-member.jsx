import React from "react"

const TeamMember = ({ name, phone, email }) => {
  return (
    <div className="teamMember">
      <picture>
        <img src="" alt="#" />
      </picture>
      <div className="col">
        <h3>{name}</h3>
        <span>{phone}</span>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  )
}

export default TeamMember
