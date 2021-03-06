import React from 'react';
import './../tailwind.output.css';
import { Router } from "@reach/router"

import Home from './Home';
import Watch from './Watch';
import Search from './Search';
import Channel from './Channel';
import Terms from './Terms';
import Privacy from './Privacy';
import About from './About';
import Tv from './Tv';
import SpRadio from './SpRadio';
import Test from './Test'

const App = () => (
  <Router>
    <Home path="/" />
    <Watch path="/watch" />
    <Search path="/search" />
    <Channel path="/channels" />
    <Terms path="/terms" />
    <Privacy path="/privacy" />
    <About path="/about" />
    <Tv path="/tv" />
    <SpRadio path="/srila-prabhupada-radio" />
    <Test path="/test" />
  </Router>
);

export default App;