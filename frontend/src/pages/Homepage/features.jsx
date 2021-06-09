import React, { useState } from "react";

export default function Features() {

    const [features, setFeatures] = useState([{
            "icon": "fa fa-comments-o",
            "title": "Consultas",
            "text": "Realize aqui suas consultas ná área escolhida, a saúde é importante."
        },
        {
          "icon": "fa fa-whatsapp",
          "title": "Whatsapp",
          "text": "Marque Sua Consulta"
        }
    ])

    return (
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>MARQUE SUA CONSULTA!</h2>
          </div>
          <div className="row">
            {features
              ? features.map((d,i) => (
                  <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
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
      </div>
    );
}
