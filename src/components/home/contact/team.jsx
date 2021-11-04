import React from "react"
import TeamMember from "@/components/team-member"
import LinkToTheTop from "@/components/home/link-to-the-top"
import { graphql, useStaticQuery } from "gatsby"

let teamMembers = [
  {
    name: "Joanna",
    phone: "+48 795 755 924",
    email: "joanna@segments.pl",
    image: "../../team-member-3.webp",
  },
  {
    name: "Barbara",
    phone: "+48 661 538 871",
    email: "barbara@segments.pl",
    image: "../../team-member-2.webp",
  },
  {
    name: "Monika",
    phone: "+48 695 902 902",
    email: "monika@segments.pl",
    image: "../../team-member-1.webp",
  },
]

const Team = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allImageSharp(
  //       filter: { fluid: { originalName: { regex: "/team-member*/" } } }
  //     ) {
  //       nodes {
  //         fluid(maxWidth: 500, quality: 100) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  // const images = data.allImageSharp.nodes.map(el => el)

  // teamMembers = teamMembers.map((el, index) => ({
  //   ...el,
  //   image: images[index],
  // }))

  // console.log(teamMembers)

  return (
    <div className="col team gutters" id="zespol">
      <div className="header">
        <h2 className="title">Porozmawiaj z nami.</h2>
        <p>Nasi specjaliści są do Twojej dyspozycji.</p>
      </div>
      {teamMembers.map((el, index) => (
        <TeamMember {...el} delay={index * 150} key={el.name}></TeamMember>
      ))}
      <LinkToTheTop></LinkToTheTop>
    </div>
  )
}

export default Team
