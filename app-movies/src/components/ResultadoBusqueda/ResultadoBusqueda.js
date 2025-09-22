import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CardSola from "../CardSola/CardSola";


class ResultadoBusqueda extends Component {
    constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading : false,
    }
  }

  componentDidMount() {
    const nombrePeli = this.props.match.params.nombre;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=0030cb6d5a827e996db3c37d4e1cadf3&language=es-ES&query=${nombrePeli}`)
      .then(res => res.json())
      .then(data => this.setState({
        data: data.results,
        loading : false,
      }))
      .catch(err => console.log(err))
  }

  componentDidUpdate(prevProps){
    let propsAntiguas = prevProps.match.params.nombre
    let propsActuales = this.props.match.params.nombre
    
    if (propsAntiguas !== propsActuales) {
      
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=0030cb6d5a827e996db3c37d4e1cadf3&language=es-ES&query=${propsActuales}`)
      .then(res => res.json())
      .then(data => this.setState({
        data: data.results,
        loading : false             
      }))
      .catch(err => console.log(err))
  }
    
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="alert alert-primary"> Resultados de Busqueda</h2>
        <section className="row cards" id="movies">
          {this.state.data && this.state.data.length > 0
            ? this.state.data.map((movie) => (
                <CardSola info={movie}/>
              ))
            : <p>Cargando...</p>
          }
        </section>
      </React.Fragment>
    );
  }
}






export default withRouter (ResultadoBusqueda)