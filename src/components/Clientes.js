import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import firebase from '../Firebase';

class Home extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('Clientes');
    
    this.unsubscribe = null;
    this.state = {
      Clientes: []
    };
  }
  RegistrarCliente = () => {
    this.props.history.push("/Crear");
  }
  onCollectionUpdate = (querySnapshot) => {
    const Clientes = [];
    querySnapshot.forEach((doc) => {
  const { Cedula, Nombre, Concesionario } = doc.data();
      Clientes.push({
        key: doc.id,
        doc, 
        Cedula,
        Nombre,
        Concesionario,
      });
    });
    this.setState({
      Clientes
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Lista de Clientes
              <div className="Botones">
             <button type="submit"onClick={this.RegistrarCliente} >Registrar Cliente</button> 
             </div> 
            </h3>
          </div>
          <div class="panel-body">
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Cedula</th>
                  <th>Nombre</th>
                  <th>Concesionario</th>
                  <th>Tareas</th>
                </tr>
              </thead>
              <tbody>
                {this.state.Clientes.map(Cliente =>
                  <tr>
                    <td>{Cliente.Cedula}</td>
                    <td>{Cliente.Nombre}</td>
                    <td>{Cliente.Concesionario}</td>
                    <td><Link to={`/Tareas/${Cliente.key}`} class="btn btn-primary">Editar</Link></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;