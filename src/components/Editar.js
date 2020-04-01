import React, { Component } from 'react';
import firebase from '../Firebase';



class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      Cedula: '',
      Nombre: '',
      Concesionario: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('Clientes').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const Cliente = doc.data();
        this.setState({
          key: doc.id,
          Cedula: Cliente.Cedula,
          Nombre: Cliente.Nombre,
          Concesionario: Cliente.Concesionario
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({board:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { Cedula, Nombre, Concesionario } = this.state;

    const updateRef = firebase.firestore().collection('Clientes').doc(this.state.key);
    updateRef.set({
      Cedula,
      Nombre,
      Concesionario
    }).then((docRef) => {
      this.setState({
        key: '',
        Cedula: '',
        Nombre: '',
        Concesionario: ''
      });
      this.props.history.push("/Tareas/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error al agregar documento: ", error);
    });
  }

  cancelar = () => {
    this.props.history.push("/Clientes");
}

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-Cedula">
              Editar Cliente
            </h3>
          </div>
          <div class="panel-body">
            
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="Cedula">Cedula:</label>
                <input type="text" class="form-control" name="Cedula" value={this.state.Cedula} onChange={this.onChange} placeholder="Introduzca su Cedula" />
              </div>
              <div class="form-group">
                <label for="Nombre">Nombre:</label>
                <input type="text" class="form-control" name="Nombre" value={this.state.Nombre} onChange={this.onChange} placeholder="Introduzca su Nombre" />
              </div>
              <div class="form-group">
                <label for="Concesionario">Concesionario:</label>
                <input type="text" class="form-control" name="Concesionario" value={this.state.Concesionario} onChange={this.onChange} placeholder="Introduzca su Concesionario" />
              </div>
              
              <button type="submit" class="btn btn-success">Listo</button><br></br><br></br>
              
              <button type="submit" class="btn btn-primary" onClick={this.cancelar} > Cancelar </button>
              
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;