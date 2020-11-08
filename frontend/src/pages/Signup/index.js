import React, {useState} from 'react';
import { useDispatch } from 'reactotron-redux';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { signUpRequest } from '../../store/modules/auth/actions'

// import { Container } from './styles';

export default function SignUp() {
  const dispatch = useDispatch();
  const [name, setName] = useState('')  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleOnNameChange = (e) =>  {
    setName(e.target.value)
  }

  const handleOnEmailChange = (e) =>  {
    setEmail(e.target.value)
  }
  const handleOnPassChange = (e) =>  {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch( signUpRequest(name, email, password))
    setPassword('')
    setEmail('')
    setName('')
  }
  return (
    <>
    <img src={logo} alt="DoctorMe" />
    <form onSubmit={handleSubmit}>
      <input placeholder="Nome completo" type="text" value={name} onChange={handleOnNameChange} />
      <input name="email" value={email} type="email" placeholder="Seu e-mail" onChange={handleOnEmailChange}  />
      <input name="password" value={password} type="password" placeholder="Sua senha" onChange={handleOnPassChange}  />
      <button type="submit">Criar conta gratuita</button>
      <Link to="/signin"> Já tenho login </Link>
    </form>
    </>
  );
}


