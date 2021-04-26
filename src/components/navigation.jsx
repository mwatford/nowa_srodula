import React from "react"
import Links from "@/components/links"
import Socials from "@/components/socials"

const Navigation = () => {
  return (
    <nav className="navigation navigation--desktop">
      <div className="navigation__content">
        <img src="../../logo.svg" className="logo" alt="logo" />
        <Links></Links>
        <Socials></Socials>
      </div>
    </nav>
  )
}

export default Navigation
