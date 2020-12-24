import React from 'react';
import './../tailwind.output.css';
import { Router } from "@reach/router"

import Home from './Home';
import Watch from './Watch';
import Search from './Search';
import Channel from './Channel';
import Terms from './Terms';
import Privacy from './Privacy';

const App = () => (
  <Router>
    <Home path="/" />
    <Watch path="/watch" />
    <Search path="/search" />
    <Channel path="/channels" />
    <Terms path="/terms" />
    <Privacy path="/privacy" />
  </Router>
);

export default App;