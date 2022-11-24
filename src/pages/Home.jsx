import React, { useEffect, useState } from 'react'
import './Home.css';
import { getImage, getInfo } from '../services/fetch';
import Loader from '../components/Loader/Loader'
import Quote from '../components/Quote/Quote'
import Clock from '../components/Clock/Clock';

const Home = ({ handleClick, click, location }) => {
    const [background, setBackground] = useState({});
    const [info, setInfo] = useState({});

    useEffect(() => {
        const fetchImage = async () => {
            const hours = new Date().getHours();
            let daytime = '';
            if (hours >= 5 && hours <= 17) {
                daytime = 'daytime';
            } else {
                daytime = 'night';
            }
            let query = `${daytime}-${location.city.name}`;
            setBackground(await getImage(query));
        }

        const fetchInfo = async () => {
            setInfo(await getInfo());
        }

        if (Object.keys(location).length !== 0) {
            fetchImage(); 
            fetchInfo();
            setInterval(fetchImage, 3600000);
        }
    }, [location]);

    if (Object.keys(background).length === 0 || Object.keys(location).length === 0 || Object.keys(info).lengh === 0) {
        return <Loader />
    }

    return (
        <div className="Home" style={{ backgroundImage: `url(${background.urls.regular})` }}>
            <div className={click ? 'top-widget active' : 'top-widget'}>
                <Quote />
                <Clock handleClick={handleClick} click={click} city={location.city.name} country={location.country.code} timeZone={info.abbreviation}/>
            </div>


            <div className={click ? 'bottom-widget active' : 'bottom-widget'}>
                <div className="grid-container">
                    <div className="info-time-zone">
                        <div>Current timezone</div>
                        <div>{info.timezone}</div>
                    </div>
                    <div className="week">
                        <div>Day of the week</div>
                        <div>{info.day_of_week}</div>
                    </div>
                    <div className="year">
                        <div>Day of the year</div>
                        <div>{info.day_of_year}</div>
                    </div>
                    <div className="week-number">
                        <div>week number</div>
                        <div>{info.week_number}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home