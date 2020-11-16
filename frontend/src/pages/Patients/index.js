import React, { useState,  useEffect } from 'react';
import {  useSelector, useDispatch } from 'react-redux';
import {
    Primary,
    Secondary,
    FontNumber,
    TitleFont,
    Font,
    Background,
  } from "./style";

import { Button } from 'react-bootstrap'
import { signUpPatient } from '../../store/modules/auth/actions'
import { deletePatient } from '../../store/modules/user/actions'

import {
    Modal,
    Select,
    MenuItem,
    TextField,
    InputLabel,
  } from "@material-ui/core";
import api from '../../services/api';

import  Table from './table'

import { Container, FormContent } from './style';


export default function Patients() {


    const dispatch = useDispatch();
    const [patients, setPatients] = useState([])
    const [patient, setPatient] = useState(0)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [id, setId] = useState('')
    const token = useSelector(state => state.auth.token);
    const [show, setShow] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShowDelete = () => setShowDelete(true);
    const handleCloseDelete = () => setShowDelete(false);

    
    async function loadPatients() {
        const resPatients = await api.get(`patients`, {
          headers: { Authorization: `Bearer ${token}`} 
        });
        
        const dataPatients = resPatients.data.patients.map(pat => {
            return {
                id: pat.id,
                name: pat.name,
                email: pat.email
            }
        })
        setPatients(dataPatients);
    }

    useEffect(() => {
        loadPatients()
        console.log(patients)
      }, [patient]);


    const handleOnNameChange = (e) =>  {
        setName(e.target.value)
    }

    const handleOnIdChange = (e) =>  {
        setId(e.target.value)
        
    }


    const handleOnEmailChange = (e) =>  {
        setEmail(e.target.value)
    }
    
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(signUpPatient(name, email))
    setEmail('')
    setName('')
  }

  async function handleSubmitDelete(e) {
    e.preventDefault();
    await deletePatient()
    setId('')
    setShowDelete(false)
    setPatient()
  }

  async function deletePatient() {
      await api.delete(`users`, {
            data: { id: id },
            headers: { Authorization: `Bearer ${token}`} 
    });
  }

  return (
    <Container>
        <Table patientsList={patients}></Table>
            <Button variant="primary" onClick={handleShow}>
                Adicionar Paciente
            </Button>
            <Button variant="primary" onClick={handleShowDelete}>
                Deletar Paciente
            </Button>
        <Modal
          open={show}
          onClose={handleClose}
          style={{
            width: "70%",
            height: 500,
            top: "20%",
            left: "15%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              width: "100%",
              height: "100%",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                fontSize: 30,
                fontFamily: FontNumber,
                marginTop: 30,
                color: Secondary,
              }}
            >
              Cadastrar Paciente
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
            >
            <FormContent>
                <form onSubmit={handleSubmit}>
                    <input placeholder="Nome completo" type="text" value={name} onChange={handleOnNameChange} />
                    <input name="email" value={email} type="email" placeholder="e-mail" onChange={handleOnEmailChange}  />
                    <button type="submit">Adicionar Paciente</button>
                </form>
            </FormContent>
            </div>
          </div>
        </Modal>
        <Modal
          open={showDelete}
          onClose={handleCloseDelete}
          style={{
            width: "70%",
            height: 500,
            top: "20%",
            left: "15%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              width: "100%",
              height: "100%",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                fontSize: 30,
                fontFamily: FontNumber,
                marginTop: 30,
                color: Secondary,
              }}
            >
              Deletar Paciente
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
            >
            <FormContent>
                <form onSubmit={handleSubmitDelete}>
                    <input placeholder="Digite o ID do paciente" type="text" value={id} onChange={handleOnIdChange} />
                    <button type="submit">Remover Paciente</button>
                </form>
            </FormContent>
            </div>
          </div>
        </Modal>
    </Container>
  );
}

