import React, { useEffect, useState } from 'react'
import './Clock.css'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import arrow from '../../assets/arrow.svg'

const Clock = ({ handleClick, click, city, country, timeZone }) => {

  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [greet, setGreet] = useState('');
  const [daytime, setDaytime] = useState(true);

  // get system time
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();

      if (hours >= 5 && hours <= 11) {
        setGreet('morning');
      } else if (hours >= 12 && hours <= 17) {
        setGreet('afternoon');
      } else {
        setGreet('evening');
      }

      if (hours >= 5 && hours <= 17) {
        setDaytime(true);
      } else {
        setDaytime(false);
      }

      hours = hours <= 9 ? '0' + hours : hours;
      minutes = minutes <= 9 ? '0' + minutes : minutes;
      setHour(hours);
      setMinute(minutes);

    }, 1000);
  }, [])

  return (
    <div className="clock-container">
      <div className="greeting">
        <div>
          { daytime ? <LightModeIcon style={{ marginRight: '8px', transform: 'translateY(6px)' }} /> : <DarkModeIcon style={{ marginRight: '8px', transform: 'translateY(6px)' }} />}
          Good {greet}, It's currently
        </div>
      </div>
      <span className="time">{hour}:{minute}</span><span className="time-zone">{timeZone}</span>
      <div className="city">In {city}, {country}</div>
      <div className="more-btn">
        <button onClick={handleClick}><div>{click ? "LESS" : "MORE"}</div> <img className={click ? 'arrow active' : 'arrow'} src={arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Clock