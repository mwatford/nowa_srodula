import React from "react"
import axios from "axios"

const cloneDeep = x => JSON.parse(JSON.stringify(x))

const validateForm = ({ name, email, accept }) => !!(name && email && accept)

const defaultState = {
  name: "",
  email: "",
  phone: "",
  surname: "",
  message: "",
  accept: false,
  discount: false,
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
        <div className="input-group">
          <input
            type="text"
            placeholder="IMIĘ*"
            name="name"
            required
            onChange={e => {
              this.onUserInput({ name: e.target.value })
            }}
          />
          <input
            type="email"
            placeholder="EMAIL*"
            name="email"
            required
            onChange={e => {
              this.onUserInput({ email: e.target.value })
            }}
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="TELEFON"
            name="phone"
            onChange={e => {
              this.onUserInput({ phone: e.target.value })
            }}
          />
          <input
            type="text"
            placeholder="NAZWISKO"
            name="surname"
            onChange={e => {
              this.onUserInput({
                surname: e.target.value,
              })
            }}
          />
        </div>
        <textarea
          name="message"
          cols="30"
          rows="10"
          onChange={e => {
            this.onUserInput({
              message: e.target.value,
            })
          }}
          placeholder="TREŚĆ WIADOMOŚCI"
        ></textarea>
        <label>
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
        <label>
          chcę otrzymać rabat 5 tys. zł na mieszkanie
          <input
            type="checkbox"
            name="discount"
            required
            onChange={e => this.onUserInput({ discount: !this.state.discount })}
          />
          <span className="checkmark"></span>
        </label>
        <button
          className="button button--filled"
          onClick={e => this.submitForm(e)}
          disabled={!this.state.formValid}
        >
          WYŚLIJ
        </button>
      </form>
    )
  }
}

export default ContactForm
