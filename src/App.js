import React, { Component } from 'react';
import Avatar from "./IMG/Avatar.jpg"
import './components/Css/Main.css';


class App extends Component {
  RedireccionarClientes = () => {
    this.props.history.push("/Clientes");
  }

  render() {
    return (
      <div className="contenedor">
        <div className="contenedor-articulo">
                <div className="articulo" data-aos="zoom-in-right">
                <img
                src={Avatar}
                alt="avatar"
                className="avatar-proyect"/>
                    <h3>Empresa de Automóviles</h3>
                    
                    <button type="submit"  onClick={this.RedireccionarClientes} >Acceder</button>
                </div>
            </div>
            </div>
    );
  }
}

export default App;
