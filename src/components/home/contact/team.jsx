import React from "react"
import TeamMember from "@/components/team-member"
import LinkToTheTop from "@/components/home/link-to-the-top"
import { shuffle } from "lodash"

const teamMembers = [
  {
    name: "Joanna",
    phone: "+48 795 755 924",
    email: "joanna@segments.pl",
  },
  {
    name: "Barbara",
    phone: "+48 661 538 871",
    email: "barbara@segments.pl",
  },
  {
    name: "Monika",
    phone: "+48 695 902 902",
    email: "monika@segments.pl",
  },
]

const Team = () => {
  return (
    <div className="col team gutters" id="zespol">
      <div className="header">
        <h2 className="title">Porozmawiaj z nami.</h2>
        <p>Nasi specjaliści są do Twojej dyspozycji.</p>
      </div>
      {shuffle(teamMembers).map(el => (
        <TeamMember {...el}></TeamMember>
      ))}
      <LinkToTheTop></LinkToTheTop>
    </div>
  )
}

export default Team
