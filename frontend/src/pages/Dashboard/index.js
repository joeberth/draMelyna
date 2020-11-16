import React, { useState, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '../../services/api';

import { Container, Time } from './style';

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());
  const profile = useSelector(state => state.user.profile);
  const token = useSelector(state => state.auth.token);
  
  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadSchedule() {
      const availableTime = await api.get(`providers/${profile.id}/available`, {
        params: { date: date.getTime() },
        headers: { Authorization: `Bearer ${token}`} 
      });
      const res = await api.get(`schedule`, {
        params: { date: format(date, "yyyy-MM-dd'T'HH:mm:ssxxx") },
        headers: { Authorization: `Bearer ${token}`} 
      });
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const data = availableTime.data.map(hour => {
        const [hourAva, _] =  hour.time.split(':')
        
        const checkDate = setSeconds(setMinutes(setHours(date, Number(hourAva)), 0), 0);
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour.time}h`,
          past: isBefore(compareDate, new Date()),
          appointment: res.data.find(a =>
            isEqual(parseISO(a.date).getHours(), compareDate.getHours())
          ),
        };
      });

      setSchedule(data);
    }

    loadSchedule();
  }, [date]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
     
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#FFF" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#FFF" />
        </button>
      </header>

      <ul>
        {schedule.map(time => (
          <Time key={time.time} past={time.past} available={!time.appointment}>
            <strong>{time.time}</strong>
            <span>
              {time.appointment ? time.appointment.patient : 'Em aberto'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
}