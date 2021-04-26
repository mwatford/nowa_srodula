import React from "react"

const Location = () => {
  return (
    <div className="location">
      <section className="" id="inwestycja">
        <div className="gutters col">
          <div className="h-wrapper">
            <h1 className="text--dark-blue">proces</h1>
            <h1 className="text--dark-blue">sprzedaży</h1>
            <h1 className="text--pink">rozpoczęty.</h1>
          </div>
          <p className="text--dark-blue">
            Zapraszamy do zapoznania się z ofertą 384 najciekawszych mieszkań w
            Sosnowcu – inwestycją „Nowa Środula”. Szeroka gama możliwości oraz
            szereg mieszkań o zróżnicowanych powierzchniach i układach
            pomieszczeń – tutaj każdy znajdzie coś dla siebie! Lokalizacja,
            wysoki standard wykonania, zastosowanie nowoczesnych technologii,
            dbałość o szczegóły to najważniejsze elementy tej inwestycji.
          </p>
          <img src="../../char.svg" alt="#" className="char" />
        </div>
      </section>
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2548.773096937723!2d19.16207731606655!3d50.29616327945434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDE3JzQ2LjIiTiAxOcKwMDknNTEuNCJF!5e0!3m2!1spl!2spl!4v1614868487869!5m2!1spl!2spl"
          className="google-map"
          id="lokalizacja"
          loading="lazy"
          title="lokalizacja"
        ></iframe>
      </section>
      <section>
        <div className="gutters col">
          <div className="adv">
            <p className="text--dark-blue">
              osiedle zamknięte,
              <br />
              ogrzewanie miejskie,
              <br />
              niskie koszty utrzymania,
              <br />
              balkony z widokiem na górkę Środulską,
              <br />
              oszczędne i ekologiczne źródło ogrzewania
            </p>
            <div className="h-wrapper">
              <h1 className="text--dark-blue">zalety</h1>
              <h1 className="text--pink">inwestycji</h1>
            </div>
            <p>
              mieszkania o powierzchniach od 35 m² do 69 m²,
              <br />
              duża liczba miejsc parkingowych,
              <br />
              garaże podziemne,
              <br /> plac zabaw,
              <br /> winda.
            </p>
            <img src="../../char.svg" alt="#" className="char" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Location
