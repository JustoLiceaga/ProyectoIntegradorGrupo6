import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";


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

    fetch(``)
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
        <h2 className="alert alert-primary">{this.props.title}</h2>
        <section className="row cards" id="movies">
          {this.state.data && this.state.data.length > 0
            ? this.state.data.map((movie) => (
              <article className="single-card-movie" key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} className="card-img-top" alt={movie.title} />
                <div className="cardBody">
                  <h5 className="card-title">{movie.title}</h5>
                  {this.state.verMas === movie.id ? (
                    <p className="card-text">{movie.overview}</p>
                  ) : null}
                  <button
                    className="btn btn-secondary"
                    onClick={() => this.verDescripcion(movie.id)}
                  >
                    {this.state.verMas === movie.id ? "Ver menos" : "Ver descripción"}
                  </button>
                  <button
                    onClick={() => this.cambiarEstado(movie.id)}
                    className="btn alert-primary"
                  >
                    {this.state.favoritos === movie.id ? "Quitar de favoritos" : 'Agregar a favoritos'}
                  </button>
                  <Link to={`/PeliculasPopulare/${movie.id}`} className="btn btn-primary">
                    Ir a detalle
                  </Link>
                </div>
              </article>
            ))
            : "cargando..."}
        </section>
        <button onClick={()=> this.cargarPaginaSiguiente()} className="btn btn-primary"> Cargar mas peliculas </button>
      </>
        );
    }
}









export default ResultadoBusqueda