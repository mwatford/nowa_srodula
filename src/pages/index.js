import * as React from "react"
import Contact from "../components/contact"
import "../styles/scss/main.scss"
import NavigationMobile from "@/components/navigation-mobile"
import Navigation from "@/components/navigation"
import Banner from "@/components/banner"
import Location from "@/components/location"
import Gallery from "@/components/gallery"
import Footer from "@/components/footer"
import Picker from "@/components/picker"
import SEO from "../components/seo"

const IndexPage = () => (
  <main>
    <SEO title="Mieszkania w Sosnowcu" />
    <div className="mobile-nav-wrapper">
      <NavigationMobile></NavigationMobile>
    </div>
    <div className="desktop-nav-wrapper">
      <Navigation></Navigation>
    </div>
    <div className="content">
      <Banner></Banner>
      <Location></Location>
      <Picker></Picker>
      <Gallery></Gallery>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  </main>
)

export default IndexPage
