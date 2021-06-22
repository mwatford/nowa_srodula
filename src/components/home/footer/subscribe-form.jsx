import React, { useState } from "react"
import Logo from "@/components/logo"
import axios from "axios"


const Subscribe = () => {
  const [email, setEmail] = useState("")
  
  const submitForm = async e => {
    try {
      e.preventDefault()

      const data = new FormData()
      data.append("email", email)
  
      await axios({
        method: 'post',
        url: "api/subscribe.php",
        headers: { "Content-Type": "application/json" },
        data
      })
    } catch (error) {
    }
  }

  return (
    <form className="subscribe">
      <div className="header">
        <h2 className="title">Zostaw swój email</h2>
        <p>aby otrzymywać informacje o najnowszych promocjach</p>
      </div>
      <Logo color="#16F47F"></Logo>
      <input
        type="email"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />
      <button className="subscribe__button" onClick={e => submitForm(e)}>SUBSKRYBUJ</button>
    </form>
  )
}

export default Subscribe
