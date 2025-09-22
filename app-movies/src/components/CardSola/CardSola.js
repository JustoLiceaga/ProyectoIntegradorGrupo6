import React, { Component } from "react";
import { Link } from "react-router-dom";
import './style.css';

class CardSola extends Component {
  constructor(props) {
    super(props);
    this.state = {
      esFavorito: false,
      verMas: false,
    };
  }

  componentDidMount() {
    let favLocal = localStorage.getItem('favoritos');
    let favParse = JSON.parse(favLocal);

    if (favParse !== null && favParse.includes(this.props.info.id)) {
      this.setState({
        esFavorito: true
      });
    }
  }

  agregarAFavoritos = (id) => {
    let favLocal = localStorage.getItem('favoritos');
    let favParse = JSON.parse(favLocal);

    if (favParse !== null) {
      favParse.push(id);
      localStorage.setItem('favoritos', JSON.stringify(favParse));
    } else {
      localStorage.setItem('favoritos', JSON.stringify([id]));
    }

    this.setState({
      esFavorito: true
    });
  };

  quitarDeFavoritos = (id) => {
    let favLocal = localStorage.getItem('favoritos');
    let favParse = JSON.parse(favLocal);

    if (favParse !== null) {
      let nuevosFavoritos = favParse.filter(favId => favId !== id);
      localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
      this.setState({
        esFavorito: false
      });
    }

    if (this.props.QuitarFavs) {
      this.props.QuitarFavs(this.props.info.id);
    }
  };

  verDescripcion = (id) => {
    this.setState({
      verMas: this.state.verMas === id ? null : id
    });
  };

  render() {
    let info = this.props.info;
    return (
      <React.Fragment>
        <article className="single-card-movie" key={info.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${info.backdrop_path}`}
            className="card-img-top"
            alt={info.title}
          />
          <div className="cardBody">
            <h5 className="card-title">{info.title}</h5>

            {this.state.verMas === info.id ? (
              <p className="card-text">{info.overview}</p>
            ) : null}

            <button
              className="btn btn-secondary"
              onClick={() => this.verDescripcion(info.id)}
            >
              {this.state.verMas === info.id ? "Ver menos" : "Ver descripción"}
            </button>

            {this.state.esFavorito ? (
              <button
                onClick={() => this.quitarDeFavoritos(info.id)}
                className="btn btn-primary"
              >
                Quitar de favoritos
              </button>
            ) : (
              <button
                onClick={() => this.agregarAFavoritos(info.id)}
                className="btn btn-primary"
              >
                Agregar a favoritos
              </button>
            )}

            <Link to={`/detalle/${info.id}`} className="btn btn-primary">
              Ir a detalle
            </Link>
          </div>
        </article>
      </React.Fragment>
    );
  }
}

export default CardSola;
