import React, { Component } from 'react';

import firebase from '../Firebase';


class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('Clientes');
    this.state = {
      Cedula: '',
      Nombre: '',
      Concesionario: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { Cedula, Nombre, Concesionario } = this.state;

    this.ref.add({
      Cedula,
      Nombre,
      Concesionario
    }).then((docRef) => {
      this.setState({
        Cedula: '',
        Nombre: '',
        Concesionario: ''
      });
      this.props.history.push("/Clientes")
    })
    .catch((error) => {
      console.error("Error al agregar documento: ", error);
    });
  }

  ListadeClientes = () => {
    this.props.history.push("/Clientes");
  }

  render() {
    const { Cedula, Nombre, Concesionario } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-Cedula">
              Crear Cliente
            </h3>
          </div>
          <div class="panel-body">
           
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="Cedula">Cedula:</label>
                <input type="text" class="form-control" name="Cedula" value={Cedula} onChange={this.onChange} placeholder="Introduzca su Cedula" />
              </div>
              <div class="form-group">
                <label for="Nombre">Nombre:</label>
                <input type="text" class="form-control" name="Nombre" value={Nombre} onChange={this.onChange} placeholder="Introduzca su Nombre" />              </div>
              <div class="form-group">
                <label for="Concesionario">Concesionario:</label>
                <input type="text" class="form-control" name="Concesionario" value={Concesionario} onChange={this.onChange} placeholder="Introduzca su Concesionario" />
              </div>
              <button type="submit" class="btn btn-success">Listo</button><br></br><br></br>
              
              <div className="Botones">
             <button type="submit"onClick={this.ListadeClientes} >Lista de Clientes</button> 
             </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;