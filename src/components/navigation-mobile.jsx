import React from "react"
import anime from "animejs"
import MenuButton from "@/components/menu-icon"
import Socials from "@/components/socials"
import Links from "@/components/links"
import Logo from "@/components/logo"

const animation = direction => {
  const easing = "cubicBezier(.18, .89, .45, 1.36)"

  anime({
    targets: ".navigation--mobile .logo",
    duration: 300,
    easing,
    direction,
  })

  anime({
    targets: ".navigation--mobile .navigation__background",
    translateX: ["100%", "0%"],
    opacity: [0, 1],
    duration: 600,
    easing,
    direction,
  })

  anime({
    targets: ".navigation--mobile .links li",
    // translateX: (el, index) => [index % 2 === 0 ? "-100%" : "100%", "0%"],
    opacity: [0, 1],
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
        <div className="gutters--p">
          <div className={`x ${this.state.navOpen ? " x--open" : ""}`}>
            <Logo color={this.state.navOpen ? "#060f2d" : "#ffffff"}></Logo>
            <div className="row">
              {!this.state.navOpen && <h2 className="menu">Menu</h2>}
              <button
                onClick={() => this.setState({ navOpen: !this.state.navOpen })}
                style={{ cursor: "pointer" }}
                aria-label={this.state.navOpen ? "zamknij menu" : "otwórz menu"}
              >
                <MenuButton close={this.state.navOpen}></MenuButton>
              </button>
            </div>
          </div>
        </div>
        {this.state.navOpen && (
          <div className="navigation__content gutters--p">
            <Links></Links>
            {/* <Socials></Socials> */}
          </div>
        )}
      </nav>
    )
  }
}

export default Navigation
