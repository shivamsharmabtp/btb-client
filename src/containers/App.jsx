import React from 'react';
import './../tailwind.output.css';
import { Router } from "@reach/router"

import Home from './Home';
import Watch from './Watch';
import Search from './Search';
import Channel from './Channel';
import About from './About';
import Tv from './Tv';
import SpRadio from './SpRadio';
import Test from './Test';
import Register from './Register';
import constants from '../constants';

const App = () => {
  let origin = window.location.origin;
  if(origin.includes('localhost')){
    window.env = 'local'
    window.tb = 'btb'
  }else if(origin.includes('reactiontube')){
    window.env='prod'
    window.tb = 'rtb'
  }else {
    window.env = 'prod'
    window.tb = 'btb'
  }
  constants.setTitle();

  return (
    <Router>
      <Home path="/" />
      <Watch path="/watch" />
      <Search path="/search" />
      <Channel path="/channels" />
      <About path="/about" />
      <Tv path="/tv" />
      <SpRadio path="/srila-prabhupada-radio" />
      <Test path="/test" />
      <Register path="/signin" />
    </Router>
  )
};

export default App;