import React from "react";
import { NavHeader } from './style';

export default function Navigation() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
                <a style={{
                marginTop: 0,
              }} className="navbar-brand page-scroll" href="#page-top">
                  Dra. Melyna Pessoa
                </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#features" className="page-scroll">
                  Marque sua consulta
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  Endocrinologia
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Onde estamos?
                </a>
              </li>
              {/*
              <li>
                <a href="signin">
                  Login
                </a>
              </li>
              
              */}
            </ul>
          </div>
        </div>
      </nav>
    );
  
}
