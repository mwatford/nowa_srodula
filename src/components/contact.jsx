import React, { useState } from "react"
import ContactForm from "@/components/contact-form"

const Contact = () => {
  const [submitted, setSubmitted] = useState({
    state: false,
    error: false,
    message: "",
  })

  return (
    <section className="col contact" id="kontakt">
      <div className="gutters col">
        <h1>jesteśmy w kontakcie?</h1>
        <p>
          Chciałbyś dowiedzieć się więcej? Masz dodatkowe pytania? Może chcesz
          umówić krótką, <span className="text--pink">niezobowiązującą </span>
          rozmowę z naszym konsultantem? Wypełnij poniższy formularz, a
          skontaktujemy się z Tobą jak najszybciej!
        </p>
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
      </div>
    </section>
  )
}

export default Contact
