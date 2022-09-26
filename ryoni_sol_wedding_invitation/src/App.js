
import './App.css';
import React from 'react';
import Title from './Components/Title';
import Gretting from './Components/Greeting';
import Gallery from './Components/Gallery';
import Location from './Components/Location'; 
import CongratulatoryMoney from './Components/CongratulatoryMoney';
import Disqus from 'disqus-react'

const discusShortName='https-ryoniandsol-github-io'
const discusConfig=
{
  url: "https://ryoniandsol.github.io"
}


function App() {
  return (
    <div className="App">
      <Title/>
      <Gretting/>
      <Gallery/>
      <Location/>
      <CongratulatoryMoney/>
      <Disqus.DiscussionEmbed shortname={discusShortName} config={discusConfig}/>
    </div>
    
  );
}

export default App;
