import React, { useState } from "react"
import StepOne from "@/components/step-1"
import StepTwo from "@/components/step-2"
import StepThree from "@/components/picker-step-3"
import StepFour from "@/components/picker-step-4"
import PickerBackButton from "@/components/picker-back-button"

const Picker = () => {
  const [step, setStep] = useState(0)
  const [type, setType] = useState("")
  const [floor, setFloor] = useState(0)
  const [flat, setFlat] = useState(0)

  const pages = [
    {
      header: "wybierz budynek",
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
    <section className={`picker step-${step}`} id="mieszkania">
      {pages[step].header && (
        <h1 className={`picker__header ${step >= 2 ? "text--dark-blue" : ""}`}>
          {pages[step].header}
        </h1>
      )}
      {pages[step].component}
      {step > 0 && (
        <PickerBackButton
          color={step >= 2 ? "#060f2d" : "#fff"}
          onClick={() => setStep(step - 1)}
        >
          {" "}
        </PickerBackButton>
      )}
    </section>
  )
}

export default Picker
