
import './App.css';
import React from 'react';
import Title from './Components/Title';
import Gretting from './Components/Greeting';
import Gallery from './Components/Gallery';
import Location from './Components/Location'; 
import CongratulatoryMoney from './Components/CongratulatoryMoney';
import Visitor from './Components/Visitor';




function App() {
  return (
    <div className="App">
      <Title/>
      <Gretting/>
      <Gallery/>
      <Location/>
      <CongratulatoryMoney/>
      <Visitor/>
    </div>
    
  );
}

export default App;
