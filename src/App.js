import React from 'react';
import Navv from './Components/nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Board from './Components/tttboard';
import CFBoard from './Components/cfboard';
import Info from './Components/tttinfo'
import CFInfo from './Components/cfinfo'
import Home  from './Components/home';

function App() {
  return (
    <Router>
      <Navv/>
      <Switch>
          <Route path="/tic-tac-toe/play">
            <Board />
          </Route>
          <Route path="/connect-four/play">
            <CFBoard />
          </Route>
          <Route path="/connect-four">
            <CFInfo />
          </Route>
          <Route path="/tic-tac-toe">
            <Info />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
