import React, { useState, useRef } from "react"
import Logo from "@/components/logo"
import axios from "axios"

const Subscribe = ({ callback }) => {
  const form = useRef(null)
  const [email, setEmail] = useState("")

  const submitForm = async e => {
    try {
      e.preventDefault()

      const data = new FormData()
      data.append("email", email)

      form.current.reset()

      await axios({
        method: "post",
        url: "api/subscribe.php",
        headers: { "Content-Type": "application/json" },
        data,
      })

      return callback(true, "", false)
    } catch (error) {
      callback(true, "", true)
    }
  }

  return (
    <form className="subscribe" onSubmit={e => submitForm(e)} ref={form}>
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
      <button className="subscribe__button">SUBSKRYBUJ</button>
    </form>
  )
}

export default Subscribe
