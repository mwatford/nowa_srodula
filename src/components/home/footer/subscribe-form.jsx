import React from "react"
import Logo from "@/components/logo"

const Subscribe = () => {
  return (
    <form className="subscribe">
      <div className="header">
        <h2 className="title">Zostaw swój email</h2>
        <p>aby otrzymywać informacje o najnowszych promocjach</p>
      </div>
      <Logo color="#16F47F"></Logo>
      <input type="email" placeholder="Email" />
      <button className="subscribe__button">SUBSKRYBUJ</button>
    </form>
  )
}

export default Subscribe
