import React, { Component } from "react";
import { Link } from "react-router-dom";
import './style.css'

class CardsAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritos: 'Agregar a favoritos',
      textoBoton: "Ver descripción",
      data: [],
      verMas: false,
    }
  }

  componentDidMount() {

    fetch(this.props.api)
      .then(res => res.json())
      .then(data => this.setState({
        data: data.results,
      }))
      .catch(err => console.log(err))
  }

  cambiarEstado = () => {
    this.setState({
      favoritos: this.state.favoritos === 'Agregar a favoritos' ? "Quitar de favoritos" : 'Agregar a favoritos',
    });
  };

  verDescripcion = () => {
    this.setState({
      verMas: this.state.verMas === false ? true : false,
      textoBoton: this.state.textoBoton === 'Ver descripción' ? "Ver menos" : 'Ver descripción',
    });
  };

  render() {
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
                  {this.state.verMas ? <p className="card-text">{movie.overview}</p> : null}
                  <Link to={`/movie/${movie.id}`} className="btn btn-primary">
                    Ir a detalle
                  </Link>
                  <button
                    className="btn btn-secondary"
                    onClick={() => this.verDescripcion()}
                  >
                    {this.state.textoBoton}
                  </button>
                  <button
                    onClick={() => this.cambiarEstado()}
                    className="btn alert-primary"
                  >
                    {this.state.favoritos}
                  </button>
                </div>
              </article>
            ))
            : "cargando..."}
        </section>
        <p className="btn btn-primary"> Cargar mas peliculas </p>
      </>
    );
  }
}

export default CardsAll;