
import './App.css';
import React from 'react';
import Title from './Components/Title';
import Gretting from './Components/Greeting';
import Gallery from './Components/Gallery';
import Location from './Components/Location'; 
import CongratulatoryMoney from './Components/CongratulatoryMoney';
import Visitor from './Components/Visitor';
import Share from './Components/Share';
import { Layout } from 'antd';
import GroovePaper from './Assets/GroovePaper.png';

function App() {
  return (
    <div className="App">
      <Title/>
      <Gretting/>
      <Gallery/>
      <Location/>
      <CongratulatoryMoney/>
      <Share/>
      <Visitor/>
      <Layout
        style={{
          background: '#D7CCC8',
          backgroundImage: `url(${GroovePaper})`,
          opacity: 0.6,
          textAlign: 'center',
        }}
      >
        Copyright © 2022 EulYeon Cho
      </Layout>
    </div>
    
  );
}

export default App;
