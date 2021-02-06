import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import './App.css';
import logo from './assets/logo.png';
import Card from './components/Card/Card';
import AppForm from './components/AppForm/AppForm';
import ICar from './models/Car';
import Playground from './components/Playground'

function App() {
  const [ cars, setCars ] = useState<ICar[]>([]);
  
  useEffect(() => {
    fetch('http://localhost:8080/cars/')
      .then(respStream => {
        return respStream.json()
      })
      .then(resp => {
        setCars(resp.cars) // WARNING: Use prevState.
      })
      .catch(err => {
        console.log(err) 
      });
  });

  return (
    <div className="App">
      <img src={logo} alt="LOGO"/>
      <AppForm/>
      <div className="cards container">
        {cars.map(car => 
          <Card
            key={car._id}
            car={car}
          />
        )}
      </div>
      <Playground />
    </div>
  );
}

export default App;
