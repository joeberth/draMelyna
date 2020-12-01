import React, { useState } from 'react'

export default function About() {
  const [about, setAbout ] = useState({
    "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Why": [
        "Equipe qualificada",
        "Horários marcados",
        "Atendimento Humanizado",
        "Cirurgias"
    ],
    "Why2": [
        "Procedimentos",
        "Espaço Kids",
        "Pós-Consulta",
        "All in one"
    ]
})
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/groupDoctor.jpg" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>Sobre nós</h2>
                <p>Temos uma vasta experiência no ramo da medicina, com 15 anos no mercado e muito a lhe oferecer.</p>
                <h3>Porque nos escolher?</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {about ? about.Why.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                    {about ? about.Why2.map((d, i) => <li  key={`${d}-${i}`}> {d}</li>) : 'loading'}

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
