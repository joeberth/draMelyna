import React, { useState } from "react";

export default function Features() {

    const [features, setFeatures] = useState([{
            "icon": "fa fa-comments-o",
            "title": "Consultas",
            "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
        },
        {
            "icon": "fa fa-bullhorn",
            "title": "Exames",
            "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
        },
        {
            "icon": "fa fa-group",
            "title": "Procedimentos",
            "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
        },
        {
            "icon": "fa fa-magic",
            "title": "Cirurgias",
            "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
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
