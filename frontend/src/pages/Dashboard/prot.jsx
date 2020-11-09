import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import Patients from './patients'

import { Container } from './style'


const Doctor = ( ) => {
  // eslint-disable-next-line
  const empty =  {name: '', email: ''}
  const [patientTest, setPatient] = useState(empty)
  const [patients, setPatients] = useState([{name: 'joao', email: 'adsd@a.com'}, {name: 'maria', email: 'adsasdd@a.com'}]);
  const handleAddPatient =  () => {
    setPatients(patients.concat(patientTest))
    setPatient(empty)
  }

  return (
    <>
       <form>
        <label>
          Nome:
          <input type="text" value={patientTest.name} onChange={(e) => setPatient({...patientTest, name: e.target.value})} />
          Email:
          <input type="text" value={patientTest.email} onChange={(e) => setPatient({...patientTest, email: e.target.value})} />
        </label>
        <button type="button" onClick={handleAddPatient}>Teste</button>
      </form>
      <Patients patientsList={patients} />
    </>
  )
}

export default Doctor;
