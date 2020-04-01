import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      board: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('Clientes').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          board: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('Clientes').doc(id).delete().then(() => {
      console.log("Documento eliminado con éxito!");
      this.props.history.push("/Clientes")
    }).catch((error) => {
      console.error("Error al eliminar documento: ", error);
    });
  }

  ListadeClientes = () => {
    this.props.history.push("/Clientes");
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4>Lista de Clientes</h4>
            <p class="panel-Cedula">
            <dt>Cedula:</dt>
              {this.state.board.Cedula}
            </p>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Nombre:</dt>
              <dd>{this.state.board.Nombre}</dd>
              <dt>Concesionario:</dt>
              <dd>{this.state.board.Concesionario}</dd>
            </dl>
            <Link to={`/Editar/${this.state.key}`} class="btn btn-success">Editar</Link><br></br><br></br>
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Eliminar</button>
            <br></br><br></br>
            <div className="Botones">
             <button type="submit"onClick={this.ListadeClientes} >Lista de Clientes</button> 
             </div> 

          </div>
        </div>
      </div>
    );
  }
}

export default Show;