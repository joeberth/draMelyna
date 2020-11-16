import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import logo from '../../assets/logo2.svg'

import { Container, Content, Profile } from './style'

const Navbar = () => {
    const profile = useSelector(state => state.user.profile);

    return ( 
        <Container>
            <Content> 
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
                        <a className="navbar-brand page-scroll" href="#page-top">
                        Doctor ME, To help You!
                        </a>{" "}
                    </div>

                    <div
                        className="collapse navbar-collapse"
                        id="bs-example-navbar-collapse-1"
                    >
                        <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link to="/dashboard">AGENDA DO DIA</Link>
                        </li>
                        
                        <li>
                            <Link to="/patients">PACIENTES</Link>
                        </li>
                        <li>
                            <Link to="/schedule">MARCAR CONSULTA</Link>
                        </li>
                            <li>
                                <Profile>
                                <div>
                                    <strong> { profile.name } </strong>
                                    <Link to="/profile">Meu perfil </Link>
                                </div>
                                <img style={{width: "53px"}} src="http://pixelartmaker.com/art/f02a30798ac49ca.png" alt="Joh Link"/>
                            </Profile>
                            </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </Content>
        </Container>
    )};

export default Navbar;
