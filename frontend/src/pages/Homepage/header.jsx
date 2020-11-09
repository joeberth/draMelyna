import React from "react";

export default function Header() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    Doctor Me!
                    <span></span>
                  </h1>
                  <p>
                  Nós podemos lhe ajudar, aqui é possível marcar consultas, agendar exames e procedimentos, dê valor a sua saúde!
                  </p>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Conheça mais!
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
}
