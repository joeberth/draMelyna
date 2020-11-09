import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

import { Wrapper, Content } from './style';
import { signInRequest } from '../../store/modules/auth/actions';


export default function Signin() {

  const dispatch = useDispatch()
  const loading = useSelector(state => state.auth.loading)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleOnEmailChange = (e) =>  {
    setEmail(e.target.value)
  }
  const handleOnPassChange = (e) =>  {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signInRequest( email, password));
    setPassword('')
    setEmail('')
  }


  return (
    <Wrapper>
      <Content>
    <img src={logo} alt="DoctorMe" />
    <form onSubmit={handleSubmit}>
      <input name="email" value={email} type="email" placeholder="Seu e-mail" onChange={handleOnEmailChange} />
      <input name="password" value={password} type="password" placeholder="Sua senha" onChange={handleOnPassChange} />
      <button type="submit">{ loading ? 'Carregando...' : 'Acessar'}</button>
      <Link to="/register"> Criar conta gratuita</Link>
    </form>
      </Content>
    </Wrapper>
  );
}


