import React, { useEffect } from 'react';
// import axios from 'axios';
import './App.css';
import logo from './assets/logo.png';
import Card from './components/Card/Card';
import AppForm from './components/AppForm/AppForm';
// import Playground from './components/Playground'
import { connect, ConnectedProps } from 'react-redux';
import { AdvertState } from './store/advert/types';
import * as advertThunks from './store/advert/thunks';

function App(props: CmpProps) {
  const { getAdverts, adverts } = props;

  useEffect(
    () => { getAdverts(); console.log('helmut')}, 
    [getAdverts]
  );

  return (
    <div className="App">
      <img src={logo} alt="LOGO"/>
      <AppForm/>
      <div className="cards container">
        {adverts.map(car => 
          <Card
            key={car._id}
            car={car}
          />
        )}
      </div>
      {/* <Playground /> */}
    </div>
  );
}

interface CmpProps extends PropsFromRedux {}

type PropsFromRedux = ConnectedProps<typeof connector>;

const mapStateToProps = (state: AdvertState) => ({
  adverts: state.adverts
})

const mapDispatchToProps = {
  getAdverts: () => (advertThunks.thunkGetAdverts())
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(App);
