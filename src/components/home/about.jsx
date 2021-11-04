import React from "react"
import LinkToTheTop from "./link-to-the-top"

const About = () => {
  return (
    <div className="gutters about" id="o_inwestycji">
      <div className="col about__text" data-aos="fade-left">
        {/* header 1 */}
        <div className="header">
          <h2 className="title">Proces sprzedaży trwa.</h2>
          <p>
            W poszukiwaniu swojego miejsca często zapominamy o tym, co naprawdę
            ważne. Dla nas najważniejsze jest Twoje zadowolenie, dlatego
            inwestycja Nowa Środula powstała z dbałością o każdy szczegół.
          </p>
          <p>
            Dogodna lokalizacja, wysoki standard wykonania, zastosowanie
            nowoczesnych technologii, szereg mieszkań o zróżnicowanych
            powierzchniach i układach pomieszczeń - nie przeoczyliśmy żadnego
            detalu. Tutaj niczego Ci nie zabraknie.
          </p>
          {/* header 2 */}
        </div>
        <div className="header header--small">
          <h2 className="title">Duży wybór</h2>
          <p>
            Aż <strong>384 mieszkania</strong> o powierzchniach od 34m
            <sup>2</sup> do 71m<sup>2</sup>! <br />
            Wybierz to, co odpowiada Ci najbardziej.
          </p>
        </div>
      </div>
      <div className="square" data-aos="fade-left" data-aos-delay="200">
        <h3>Zalety inwestycji:</h3>
        <ul>
          <li>Plac zabaw z klubem malucha,</li>
          <li>Osiedle zamknięte,</li>
          <li>Osiedlowy park ze strefą relaksu,</li>
          <li>Osiedle monitorowane,</li>
          <li>Brama wjazdowa oraz garażowa z systemem rozpoznawania tablic,</li>
          <li>Internet światłowodowy w każdym mieszkaniu,</li>
          <li>Wideodomofony,</li>
          <li>Ogrzewanie podłogowe w standardzie,</li>
          <li>Okna trzy szybowe sześcio komorowe akustyczne,</li>
          <li>Sterowanie strefowe ogrzewaniem podłogowym,</li>
          <li>Ściany mędzy lokalami z pustaków ceramicznych akustycznych,</li>
          <li>Ogrzewanie i ciepła woda miejska,</li>
          <li>Bardzo dobra komunikacja z centrum Sosnowca i Katowic,</li>
          <li>Stacja roweru miejskiego przy osiedlu,</li>
          <li>
            Garaże podziemne, winda, sklepy, szkoły, parki, widok na Górkę
            Środulską i wiele więcej...
          </li>
        </ul>
      </div>
      <LinkToTheTop></LinkToTheTop>
    </div>
  )
}

export default About
