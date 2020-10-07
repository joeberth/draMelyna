import React from 'react';

const Patients= ({patientsList}) => {
 return (
   <div class="container">
    {patientsList.map((patient, i) => (
     <li key={i} >
       <span>{patient.name} </span>
       <span>{patient.email}</span>
     </li>
    ))}

  </div>
 )
}
export default Patients;
