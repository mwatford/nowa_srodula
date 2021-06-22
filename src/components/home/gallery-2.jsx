import React, { Component } from "react"
import Slider from "react-slick"

export default class Gallery extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      slidesToShow: 3,
      speed: 500,
      focusOnSelect: true,
      onEdge: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            centerMode: false,
            slidesToShow: 1,
            // dots: true,
          },
        },
      ],
    }

    return (
      <Slider {...settings}>
        {this.props.images.map(src => (
          <img src={src} className="gallery__image" key={src}></img>
        ))}
      </Slider>
    )
  }
}
