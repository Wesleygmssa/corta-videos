import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from './components/AppWrapper';
import Home from './pages/Home';
import CorteVideo from './pages/CorteVideo';
import {BrowserRouter , Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper>
      <BrowserRouter>
      <Switch>
      < Route exact path="/"  component={Home}  / >
      < Route  path="/CorteVideo"  component = { CorteVideo }  / >
      </Switch>
      </BrowserRouter>
      <></>
    </AppWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
