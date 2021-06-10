import React, { useState} from "react";

export default function Contact(){
    const [contact, setContact] = useState({
        "address": "Av. Deputada Ceci Cunha, 1179, Sala 102 (1º Andar) - Novo Horizonte, Arapiraca - AL, 57312-675",
        "phone": "+82 988888888",
        "email": "dramelynapessoa@gmail.com",
        "facebook": "fb.com",
        "instagram": "https://www.instagram.com/dramelynapessoa/",
        "youtube": "youtube.com"
    })
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Onde estamos?</h2>
               
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <img width="100%" height="50%" src="img/metropolitan.png"  /> 
                </div>
                <div className="col-md-6">
                  <iframe width="100%" height="50%"  scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Av.%20Deputada%20Ceci%20Cunha,%201179%20-%20Novo%20Horizonte,%20Arapiraca%20-%20AL,%2057312-675+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.maps.ie/draw-radius-circle-map/"></a>
                </div>
              </div>
                                
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Informaçoes de contato</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Endereço
                  </span>
                  {contact ? contact.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Telefone
                  </span>{" "}
                  {contact ? contact.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {contact ? contact.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href={contact ? contact.facebook : "/"}
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={contact ? contact.instagram : "/"}>
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href={contact ? contact.youtube : "/"}>
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
