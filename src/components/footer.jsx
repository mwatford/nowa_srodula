import React from "react"

const Footer = () => {
  return (
    <section>
      <footer className="footer" id="footer">
        <div className="gutters">
          <div className="col">
            <h1>Skontaktuj się z nami</h1>
            <address>
              <a href="mailto:buira@nowa-srodula.pl">biuro@nowa-srodula.pl</a>
              <br />
              Joanna – 795 755 924 <br />
              Barbara – 661 538 871
            </address>
          </div>
          <div className="col">
            <h1>Adres</h1>
            <address>
              Stefana Jędryczki 1 <br />
              41-219 Sosnowiec
            </address>
          </div>
          <img src="../../logo-black.svg" alt="#" className="footer__logo" />
        </div>
      </footer>
    </section>
  )
}

export default Footer
