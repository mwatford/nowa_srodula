import React from "react"
import axios from "axios"
import Button from "@/components/button"

const cloneDeep = x => JSON.parse(JSON.stringify(x))

const validateForm = ({ name, email, accept }) => !!(name && email && accept)

const defaultState = {
  name: "",
  email: "",
  phone: "",
  surname: "",
  message: "",
  accept: false,
  formValid: false,
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = cloneDeep(defaultState)
    this.formRef = React.createRef()
  }

  async submitForm(e) {
    try {
      e.preventDefault()

      const data = new FormData()

      for (const key in this.state) {
        data.append(key, this.state[key])
      }

      await axios({
        method: "post",
        url: "api/contact.php",
        headers: { "Content-Type": "application/json" },
        data,
      })

      window.gtag("event", "conversion", {
        send_to: "AW-392310836/UWaZCLaR7_8BELTgiLsB",
      })
      this.props.callback(true, "Otrzymaliśmy Twoją wiadomość!", false)
    } catch (error) {
      this.props.callback(true, "Wystąpił błąd!", true)
    }
  }

  resetForm() {
    this.setState(cloneDeep(defaultState))
    this.formRef.current.reset()
  }

  async onUserInput(data) {
    await this.setState(data)
    await this.setState({ formValid: validateForm(this.state) })
  }

  render() {
    return (
      <form className="contact__form" ref={this.formRef} autoComplete="off">
        <div className="col">
          <label htmlFor="name" className="label">
            Imię
          </label>
          <input
            type="text"
            name="name"
            required
            onChange={e => {
              this.onUserInput({ name: e.target.value })
            }}
          />
        </div>
        <div className="col">
          <label htmlFor="surname" className="label">
            Nazwisko
          </label>
          <input
            type="text"
            name="surname"
            onChange={e => {
              this.onUserInput({
                surname: e.target.value,
              })
            }}
          />
        </div>
        <div className="col">
          <label htmlFor="phone" className="label">
            Telefon
          </label>
          <input
            type="text"
            name="phone"
            onChange={e => {
              this.onUserInput({ phone: e.target.value })
            }}
          />
        </div>
        <div className="col">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            onChange={e => {
              this.onUserInput({ email: e.target.value })
            }}
          />
        </div>
        <label htmlFor="message" className="label">
          Treść wiadomości
        </label>
        <textarea
          name="message"
          cols="30"
          rows="10"
          onChange={e => {
            this.onUserInput({
              message: e.target.value,
            })
          }}
        ></textarea>
        <label class="polityka">
          AKCEPTUJĘ &ensp;
          <a href="/polityka-prywatności" target="_blank">
            POLITYKĘ PRYWATNOŚCI
          </a>
          <input
            type="checkbox"
            name="accept"
            required
            onChange={e => this.onUserInput({ accept: !this.state.accept })}
          />
          <span className="checkmark"></span>
        </label>
        <Button
          color="light"
          onClick={e => this.submitForm(e)}
          disabled={!this.state.formValid}
        >
          Wyślij
        </Button>
      </form>
    )
  }
}

export default ContactForm
