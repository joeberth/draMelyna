import React, { useState } from "react";

export default function Features() {

    const [features, setFeatures] = useState([{
            "icon": "fa fa-comments-o",
            "title": "Consultas",
            "text": "Realize aqui suas consultas ná área escolhida, a saúde é importante."
        },
        {
            "icon": "fa fa-bullhorn",
            "title": "Exames",
            "text": "Após as consultas, que tal realizar os exames necessários? Nós temos disponíveis diversos tipos de exames!!"
        },
        {
            "icon": "fa fa-group",
            "title": "Procedimentos",
            "text": "Após os exames, realizamos os procedimentos necessários, venha conhecer!"
        },
        {
            "icon": "fa fa-magic",
            "title": "Cirurgias",
            "text": "Temos um departamento cirurgico de qualidade, com o que há de mais moderno no mercado."
        }
    ])

    return (
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Funcionalidades</h2>
          </div>
          <div className="row">
            {features
              ? features.map((d,i) => (
                  <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                    {" "}
                    <i className={d.icon}></i>
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
