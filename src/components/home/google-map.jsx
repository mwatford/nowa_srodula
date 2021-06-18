import React from "react"
import LinkToTheTop from "@/components/home/link-to-the-top"

const GoogleMap = () => {
  return (
    <div className="location" id="lokalizacja">
      <div className="googleMap">{/* iframe */}</div>
      <LinkToTheTop></LinkToTheTop>
      <div className="gutters">
        <figure>
          <picture></picture>
          <figcaption>
            Aktualne zdjęcie z postępujących prac na budowie.
          </figcaption>
        </figure>
        <div className="header">
          <h2 className="title">Zapraszamy na prezentację.</h2>
          <p>Przyjedź do naszego biura sprzedaży na terenie budowy.</p>
        </div>
      </div>
    </div>
  )
}

export default GoogleMap
