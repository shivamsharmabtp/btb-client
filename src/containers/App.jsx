import React from 'react';
import './../tailwind.output.css';
import { Router } from "@reach/router"

import Home from './Home';
import Watch from './Watch';
import Search from './Search';

const App = () => (
  <Router>
    <Home path="/" />
    <Watch path="/watch" />
    <Search path="/search" />
  </Router>
);

export default App;