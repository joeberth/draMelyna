import React, { useState } from "react";
import ReactPlayer from 'react-player'

export default function Features() {

    const [features, setFeatures] = useState([{
            "icon": "fa fa-phone",
            "title": "82 3333-3333",
            "text": "Telefone e agende  sua consulta."
        },
        {
          "icon": "fa fa-whatsapp",
          "title": "Whatsapp",
          "text": "Clique e Marque Sua Consulta"
        }
    ])

    return (
      <div id="features" className="text-center">
        <div className="container">
          <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-10 col-md-offset-1 section-title">
                    <h2>MARQUE SUA CONSULTA!</h2>
                  </div>
                </div>
                <div className="row">
                  {features
                    ? features.map((d,i) => (
                        <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-6">
                          {" "}
                          <a href="https://api.whatsapp.com/send?phone=5582988029052&text=Oi%2C+Tudo+Bem%3F+Gostaria+de+marcar+uma+consulta.&lang=pt_br">
                            <i className={d.icon}></i>
                          </a>
                          <h3>{d.title}</h3>
                          <p>{d.text}</p>
                        </div>
                      ))
                    : "Loading..."}
                </div>
              </div>
              <div className="col-md-6">
                <ReactPlayer style={{
                marginTop: '5%',
                marginLeft: '5%',
              }}
                  url="https://www.youtube.com/watch?v=8T-QfJBdm6k  " // Reqiured
                  width="100%"
                  height="48%"
               />
              </div>
          </div>
        </div>
      </div>
    );
}
