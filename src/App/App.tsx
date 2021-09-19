import React from 'react';
import Hero from '../Hero';
import Pool from '../Pool';
import PoolFeatures from '../PoolFeatures';
import About from '../About';
import Fundraising from '../Fundraising';
import Footer from '../Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Pool/>
      <PoolFeatures/>
      <About/>
      <Fundraising/>
      <Footer/>
    </div>
  );
}

export default App;
