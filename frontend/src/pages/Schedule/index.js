import React ,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { Container } from './style';

export default function Schedule() {
  const [patients, setPatients] = useState([])
  
  return (
    <Container>
        <div className="row">
            <div className="col-md-4">
                <Form.Group controlId="dob">
                <Autocomplete
                  id="combo-box-demo"
                  options={patients}
                  getOptionLabel={(option) => option.title}
                  style={{ width: 300, backgroundColor: "#FFF" }}
                  renderInput={(params) => <TextField {...params} label="Pesquise paciente pelo nome" variant="outlined" />}
                />
                    <Form.Label>Select Date</Form.Label>
                    <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                    <Form.Label>Select Date</Form.Label>
                    <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                    <Form.Label>Select Date</Form.Label>
                    <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                </Form.Group>
            </div>
        </div>
    </Container>
  );
}