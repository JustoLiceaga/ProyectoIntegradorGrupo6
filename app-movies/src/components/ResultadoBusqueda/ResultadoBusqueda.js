import React, { Component } from "react";
import { withRouter } from "react-router-dom";



class ResultadoBusqueda extends Component {
    constructor(props) {
    super(props);
    this.state = {
      favoritos: null,
      data: [],
      verMas: null,
      
    }
  }

  componentDidMount() {

    fetch(this.props.api)
      .then(res => res.json())
      .then(data => this.setState({
        data: data.results,
        numeroDePagina: this.state.numeroDePagina + 1,
      }))
      .catch(err => console.log(err))
  }

  cambiarEstado = (id) => {
    this.setState({
      favoritos: this.state.favoritos === id ? null : id
    });
  };

  verDescripcion = (id) => {
    this.setState({
      verMas: this.state.verMas === id ? null : id
    });
  };
    render() {
        const { pelicula } = this.state;

        if (!pelicula) {
        return <p>Cargando...</p>;
        }
        return (

            <>

                <div>

                </div>




                <section className="row cards" id="movies">
                    <article className="single-card-movie" key={pelicula.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${pelicula.id}`} className="card-img-top" alt={pelicula.title} />
                        <div className="cardBody">
                            <h5 className="card-title">{pelicula.title}</h5>
                            
                            
                            <button
                                onClick={() => this.cambiarEstado(pelicula.id)}
                                className="btn alert-primary"
                            >
                                {this.state.favoritos === pelicula.id ? "Quitar de favoritos" : 'Agregar a favoritos'}
                            </button>
                        </div>
                    </article>
                </section>
            </>
        );
    }
}









export default ResultadoBusqueda