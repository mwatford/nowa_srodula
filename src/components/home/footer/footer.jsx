import React, { useState } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Links from "@/components/links"
import SubscribeForm from "./subscribe-form"

const Footer = () => {
  const [submitted, setSubmitted] = useState({
    state: false,
    error: false,
    message: "",
  })

  return (
    <footer className="footer" id="footer">
      <div className="gutters" data-aos="fade-left">
        {!submitted.state ? (
          <SubscribeForm
            callback={(state, message, error) =>
              setSubmitted({ state, message, error })
            }
          ></SubscribeForm>
        ) : submitted.error ? (
          <div className="subscribe__response col">
            <p className="text--pink">Wystąpił błąd!</p>
            <button
              className="subscribe__button"
              onClick={() => setSubmitted(false, "", false)}
            >
              Spróbuj ponownie
            </button>
          </div>
        ) : (
          <div className="subscribe__response">
            <p className="text--green">Dziękujemy za subskrypcję!</p>
          </div>
        )}
        <div className="header">
          <h2 className="title title--small">SKONTAKTUJ SIĘ Z NAMI</h2>
          <address>
            +48 795 755 924 <br />
            <a href="mailto:biuro@nowa-srodula.pl">
              biuro@nowa-srodula.pl
            </a>{" "}
            <br />
            Stefana Jędryczki 1 <br />
            41-219 Sosnowiec
          </address>
        </div>
        <div className="header">
          <h2 className="title--small">OBSŁUGA KLIENTA</h2>
          <ul className="links">
            <li>
              <AnchorLink to="/#kontakt">Formularz kontaktowy</AnchorLink>
            </li>
            <li>
              <AnchorLink to="/#zespol">Zespół</AnchorLink>
            </li>
          </ul>
        </div>
        <div className="header col">
          <h2 className="title--small">NAWIGACJA</h2>
          <Links></Links>
        </div>
      </div>
    </footer>
  )
}

export default Footer
