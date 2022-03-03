import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home/Home';
import Layers from './pages/Layers/Layers'; 

import {backendurl} from './config';

import './App.css';

function App() {
  console.log(backendurl);
  return (
    <div className="root">
      <div className="content">
        <Router>
          <Switch>
            <Route exact={true} path={'/'}>
              <Home />
            </Route>
            <Route exact={true} path={'/layers'}>
              <Layers />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
