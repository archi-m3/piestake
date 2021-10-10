import React from 'react';
import Hero from '../Hero';
import Pool from '../Pool';
import PoolFeatures from '../PoolFeatures';
import About from '../About';
import Fundraising from '../Fundraising';
import Footer from '../Footer';
import Wallet from '../Wallet';
import './App.less';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Pool/>
      <PoolFeatures/>
      <About/>
      <Fundraising/>
      <Wallet/>
      <Footer/>
    </div>
  );
}

export default App;
