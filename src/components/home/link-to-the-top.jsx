import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import BackIcon from '@/components/back'

const LinkToTheTop = () => {
  return (
    <AnchorLink to="#" className="topLink">
      <BackIcon></BackIcon>
      Wróć na górę
    </AnchorLink>
  )
}

export default LinkToTheTop
