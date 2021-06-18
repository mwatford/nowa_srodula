import React from "react"
import Navbar from "@/components/navbar"
import Button from "@/components/button"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Banner = () => {
  return (
    <section className="banner">
      <Navbar></Navbar>
      <div className="gutters col">
        <h1>Osiedle Nowa Środula w Sosnowcu.</h1>
        <h2 className="title">Miejsce dla Ciebie z myślą o Tobie</h2>
        <AnchorLink to="/#contact">
          <Button>Zapytaj o ofertę</Button>
        </AnchorLink>
      </div>
    </section>
  )
}

export default Banner
