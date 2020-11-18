import React ,{useState , useEffect} from 'react';
import {  useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import {
  subDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ptBR from "date-fns/locale/pt-BR";
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers/";
import api from '../../services/api';

import { Container } from './style';


export default function Schedule() {
  const classes = useStyles();
  const minDate = new Date()
  console.log(minDate.setDate(minDate.getDate() - 1))
  const empty = {provider_id: "", user_id:"", date: ""}
  const [patients, setPatients] = useState([])
  const [patientID, setPatientID] = useState('')
  const [date, setDate] = useState(new Date())
  const [hour, setHour] = useState('')
  const [schedule, setSchedule] = useState([])
  const [appointment, setAppointment] = useState(empty)
  const profile = useSelector(state => state.user.profile);
  const token = useSelector(state => state.auth.token);
  

  const handleOnNameChange = (e, patient) =>  {
    setPatientID(patient.id)
    setAppointment({...appointment, user_id: patient.id, provider_id: profile.id})
  }
  const handleOnHourChange = (e) =>  {
    setHour(e.target.value)
    setAppointment({...appointment, date: e.target.value})
  }

  const handleAppointment = async (e) => {
    e.preventDefault()
    console.log(appointment )
    await api.post(`appointments`, {
      data: { ...appointment },
      headers: { Authorization: `Bearer ${token}`} 
    });
    setHour('')
    setPatientID('')
    setAppointment(empty)
    
    
  }



  useEffect(() => {
    async function loadSchedule() {
      const availableTime = await api.get(`providers/${profile.id}/available`, {
        params: { date: date.getTime() },
        headers: { Authorization: `Bearer ${token}`} 
      });
      
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const data = availableTime.data.map(hour => {
        const [hourAva, _] =  hour.time.split(':')
        const checkDate = setSeconds(setMinutes(setHours(date, Number(hourAva)), 0), 0);
        const compareDate = utcToZonedTime(checkDate, timezone);

        if (hour.available && !(isBefore(compareDate, new Date()))) {
          return hour;
        }
      }).filter(d => !!d );
      setSchedule(data);
    }

    loadSchedule();
  }, [date]);
  useEffect(() => {
    async function loadPatients() {
      const reqPatients = await api.get(`patients`, {
        paramrs: { Authorization: `Bearer ${token}`} 
      });
      setPatients(reqPatients.data.patients);
    }

    loadPatients();
  }, []);




  
  return (
    <Container>
        <div className="row">
            <div className="col-md-4">
                  <Autocomplete
                    
                    className={classes.autocomplete}
                    id="combo-box-demo"
                    options={patients}
                    getOptionLabel={(option) => option.name}
                    style={{ width: "200%", backgroundColor: "#FFF" }}
                    onChange={handleOnNameChange}
                    
                    renderInput={(params) => <TextField {...params} label="PESQUISE PACIENTE PELO NOME" variant="outlined" />}
                  />
                  <div style={{minWidth: "271%"}}>
                  <ThemeProvider className={classes.calendar} style={{ minWidth: "270%"}} theme={materialTheme}>
                    <MuiPickersUtilsProvider  locale={ptBR} utils={DateFnsUtils}>
                      <DatePicker
                        
                        autoOk
                        fullWidth
                        minDate={subDays(new Date(), 1)}
                        orientation="landscape"
                        variant="static"
                        openTo="date"
                        value={date}
                        onChange={setDate}
                      />
                    </MuiPickersUtilsProvider>
                  </ThemeProvider>
                  </div>
                  <FormControl className={classes.time}>
                    <InputLabel id="demo-simple-select-label">HORÁRIOS DISPONÍVEIS</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={hour}
                      onChange={handleOnHourChange}
                    >
                      {schedule.map((time, i) => (
                        <MenuItem key={i} value={time.value}>{time.time}</MenuItem>
                      ))}                    
                    </Select>
                  </FormControl>
                  <Container>
                    <button style={{ backgroundColor: "#28a745", width: "270%" }} onClick={handleAppointment}>Cadastrar Agendamento</button>
                  </Container>
            </div>
        </div>
    </Container>
  );
}


const useStyles = makeStyles((theme) => ({
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  autocomplete: {
    marginTop: "10px",
    minWidth: "270%",
    marginBottom: "30px",
  },
  calendar: {
    minWidth: "488px",
  },
  time: {
    marginTop: "10px",
    minWidth: "488px",
    backgroundColor: "#FFF"
  },
  
}));

const materialTheme = createMuiTheme({
  datePicker: {
    selectColor: "#FFF",
  },
});
