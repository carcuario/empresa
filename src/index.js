import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import  Editar from './components/Editar';
import Crear from './components/Crear';
import Tareas from './components/Tareas';
import Clientes from './components/Clientes';



ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/Editar/:id' component={Editar} />
        <Route path='/Crear' component={Crear} />
        <Route path='/Tareas/:id' component={Tareas} />
        <Route path='/Clientes' component={Clientes} />
        
      </div>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();