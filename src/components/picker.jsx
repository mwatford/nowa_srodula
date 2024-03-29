import React, { useState } from "react"
import StepOne from "@/components/step-1"
import StepTwo from "@/components/step-2"
import StepThree from "@/components/picker-step-3"
import StepFour from "@/components/picker-step-4"
import PickerBackButton from "@/components/picker-back-button"
import LinkToTheTop from "@/components/home/link-to-the-top"
import Logo from "@/components/logo"

const Picker = () => {
  const [step, setStep] = useState(0)
  const [type, setType] = useState("")
  const [floor, setFloor] = useState(0)
  const [flat, setFlat] = useState(0)

  const pages = [
    {
      header: "wybierz budynek",
      desc:
        "I pobierz kartę lokalu swojego nowego mieszkania. Porównaj metraż, rozkład pomieszczeń oraz specyfikację mieszkań. Wszystko do Twojej dyspozycji.",
      component: (
        <StepOne
          callback={(x, type) => {
            setType(type)
            setStep(step + x)
          }}
        ></StepOne>
      ),
    },
    {
      header: "wybierz piętro",
      component: (
        <StepTwo
          callback={(x, floor) => {
            setFloor(floor)
            setStep(step + x)
          }}
        ></StepTwo>
      ),
    },
    {
      header: "wybierz mieszkanie",
      component: (
        <StepThree
          type={type}
          floor={floor}
          callback={(x, flat) => {
            setStep(step + x)
            setFlat(flat)
          }}
        ></StepThree>
      ),
    },
    {
      header: "",
      component: <StepFour type={type} floor={floor} flat={flat}></StepFour>,
    },
  ]

  return (
    <>
      <section className={`picker step-${step}`} id="karty_lokali">
        {pages[step].header && (
          <div className="header">
            <div className="gutters">
              <h2 className="title">A teraz...</h2>
              <h3>{pages[step].header}</h3>
              {pages[step].desc && <p>{pages[step].desc}</p>}
            </div>
          </div>
        )}
        {pages[step].component}
        {step > 0 ? (
          <PickerBackButton
            color={step >= 2 ? "#060f2d" : "#fff"}
            onClick={() => setStep(step - 1)}
          >
            {" "}
          </PickerBackButton>
        ) : (
          <div className="picker__button">
            <Logo color="#fff"></Logo>
          </div>
        )}
      </section>
      <div className="gutters">
        <LinkToTheTop></LinkToTheTop>
      </div>
    </>
  )
}

export default Picker
