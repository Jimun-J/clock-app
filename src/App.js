import React, { useEffect, useState } from 'react'
import Home from "./pages/Home";
import { getLocation } from './services/fetch';

const App = () => {
  const [click, setClick] = useState(false);
  const [location, setLocation] = useState({});

  useEffect(() => {
    const fetchLocation = async () => {
      setLocation(await getLocation());
    }
    fetchLocation();
  }, []);

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <div className="App">
      <Home handleClick={handleClick} click={click} location={location} />
    </div>
  );
}

export default App;
