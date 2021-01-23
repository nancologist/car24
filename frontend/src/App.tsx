import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import './App.css';
import logo from './assets/logo.png';

interface ICar {
  _id: string;
  name: string;
  power: number;
}

function App() {
  const [ cars, setCars ] = useState<ICar[]>([]);
  
  useEffect(() => {
    fetch('http://localhost:8080/cars/')
      .then(respStream => {
        return respStream.json()
      })
      .then(resp => {
        setCars(resp.cars)
      })
      .catch(err => {
        console.log(err) 
      });
  }, []);

  return (
    <div className="App">
      <img src={logo} alt="LOGO"/>
      <div className="main-list">
        <div className="main-list__item">
          {cars.map(car => 
            <p key={car._id}>
              <strong>Name: </strong>{car.name} -
              <strong> Power: </strong>{car.power} HP
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
