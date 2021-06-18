import React from "react"
import Links from "@/components/links"
import Socials from "@/components/socials"
import Logo from "@/components/logo"

const Navigation = () => {
  return (
    <nav className="navigation navigation--desktop">
      <div className="gutters">
        <div className="navigation__content">
          <Logo color="#ffffff"></Logo>
          <Links></Links>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
