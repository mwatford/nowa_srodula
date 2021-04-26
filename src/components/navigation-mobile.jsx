import React from "react"
import anime from "animejs"
import MenuButton from "@/components/menu-icon"
import Socials from "@/components/socials"
import Links from "@/components/links"

const animation = direction => {
  const easing = "cubicBezier(.18, .89, .45, 1.36)"

  anime({
    targets: ".navigation--mobile .logo",
    opacity: [1, 0],
    duration: 300,
    easing,
    direction,
  })

  anime({
    targets: ".navigation--mobile .menu",
    translateX: ["100%", "0%"],
    duration: 600,
    easing,
    direction,
  })

  anime({
    targets: ".navigation--mobile .navigation__background",
    translateX: ["100%", "0%"],
    duration: 600,
    easing,
    direction,
  })

  anime({
    targets: ".navigation--mobile .links li",
    translateX: (el, index) => [index % 2 === 0 ? "-100%" : "100%", "0%"],
    // opacity: [0, 1],
    duration: 600,
    easing,
    direction,
  })

  anime({
    targets: ".navigation--mobile .socials",
    translateY: [100, 0],
    // opacity: [0, 1],
    duration: 600,
    easing,
    direction,
  })
}

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navOpen: false,
      runAnimation: false,
    }
  }

  shouldComponentUpdate() {
    return this.state.runAnimation
  }

  componentDidMount() {
    this.setState({ runAnimation: true })
  }

  componentDidUpdate() {
    this.state.navOpen ? animation("normal") : animation("reverse")
  }

  render() {
    return (
      <nav
        className={`navigation navigation--mobile ${
          this.state.navOpen ? "navigation--open" : ""
        }`}
      >
        {this.state.navOpen && <div className="navigation__background"></div>}
        <div className={`x gutters ${this.state.navOpen ? " x--open" : ""}`}>
          <img src="../../logo.svg" className="logo" alt="" />
          <button
            onClick={() => this.setState({ navOpen: !this.state.navOpen })}
            style={{ cursor: "pointer" }}
            aria-label={this.state.navOpen ? "zamknij menu" : "otwórz menu"}
          >
            <MenuButton close={this.state.navOpen}></MenuButton>
          </button>
        </div>
        {this.state.navOpen && (
          <div className="navigation__content">
            <div className="relative">
              <h1 className="menu">MENU</h1>
              <span className="line"></span>
            </div>
            <Links></Links>
            <Socials></Socials>
          </div>
        )}
      </nav>
    )
  }
}

export default Navigation
