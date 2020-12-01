import React, {useState} from "react";

export default function Services() {
    const [services, useServices] = useState([{
        "icon": "fa fa-wordpress",
        "name": "Marque Pelo Telefone",
        "text": "Nos ligue, verifique a disponibilidade e marque sua consulta."
    },
    {
        "icon": "fa fa-cart-arrow-down",
        "name": "Marque sua Consulta Online",
        "text": "Em breve, também vai ser possível criar sua consulta online."
    },
    {
        "icon": "fa fa-cloud-download",
        "name": "Faça o Download dos Resultados",
        "text": "Nós o avisaremos quando seus resultados estiverem disponíveis, você só precisa aguardar enquanto providenciamos os resultados."
    }
])
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Nossos serviços</h2>
            <p>
              Consultas, exames, procedimentos e cirurgia, tudo que existe de melhor para a sua saúde, em um só lugar!
            </p>
          </div>
          <div className="row">
            {services
              ? services.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-4">
                    {" "}
                    <i className={d.icon}></i>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
}
