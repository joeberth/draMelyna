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
                <nav>
                    <img src={logo} alt="doctorMe"/>
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>

                <aside>
                    <Profile>
                        <div>
                            <strong> { profile.name } </strong>
                            <Link to="/profile">Meu perfil </Link>
                        </div>
                        <img src="http://pixelartmaker.com/art/f02a30798ac49ca.png" alt="Joh Link"/>
                    </Profile>
                </aside>
            </Content>
        </Container>
    )};

export default Navbar;
