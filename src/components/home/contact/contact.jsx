import React, { useState } from "react"
import ContactForm from "./contact-form"
import Team from "./team"
import LinkToTheTop from "@/components/home/link-to-the-top"

const Contact = () => {
  const [submitted, setSubmitted] = useState({
    state: false,
    error: false,
    message: "",
  })

  return (
    <>
      <Team></Team>
      <section className="col contact" id="kontakt">
        <div className="gutters col">
          <div className="header" data-aos="fade-up">
            <h2 className="title">Potrzebujesz konsultacji?</h2>
            <p>
              Śmiało, chętnie odpowiemy na wszystkie Twoje pytania! Wypełnij
              formularz jeśli potrzebujesz porady lub chcesz dowiedzieć się
              więcej, a nasz konsultant odezwie się do Ciebie tak szybko, jak to
              tylko możliwe.
            </p>
          </div>
          {!submitted.state ? (
            <ContactForm
              callback={(state, message, error) =>
                setSubmitted({ state, message, error })
              }
            ></ContactForm>
          ) : (
            <div>
              <p className={submitted.error ? "text--pink" : "text--green"}>
                {submitted.message}
              </p>
              {submitted.error && (
                <button
                  className="button button--filled"
                  onClick={() => {
                    setSubmitted(false, "", false)
                  }}
                >
                  spróbuj ponownie
                </button>
              )}
            </div>
          )}
          <LinkToTheTop></LinkToTheTop>
        </div>
      </section>
    </>
  )
}

export default Contact
