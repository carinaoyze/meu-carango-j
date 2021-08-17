import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import{HelmetProvider} from 'react-helmet-async';

import HomePage from './pages/HomePage';
import FaleConosco from './pages/FaleConosco';
import Sobre from './pages/Sobre';
import Veiculos from './pages/Veiculos';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Switch>
          <Route path = "/" component = {HomePage} exact />
          <Route path = "/sobre" component = {Sobre} exact />
          <Route path = "/fale-conosco" component = {FaleConosco} exact />
          <Route path = "/veiculos" component = {Veiculos} exact />      
        </Switch>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

