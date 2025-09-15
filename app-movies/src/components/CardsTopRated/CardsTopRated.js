import React, { Component } from "react";
import { Link } from "react-router-dom";
import CardSola from "../CardSola/CardSola";
import './style.css'


class CardsTopRated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      esFavorito: false,
      data: [],
      verMas: false,
    }
  }

  componentDidMount() {

    let favLocal = localStorage.getItem('favoritos')
    let favParse = JSON.parse(favLocal)
    if (favParse !== null) {
      if (favParse.includes(this.props.id)) {
        this.setState({
          esFavoritoavoritos: true
        })
      }
    }

    fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=0030cb6d5a827e996db3c37d4e1cadf3")
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        const resultados = data.results
        const resultadosFiltrados = resultados.filter((pelis, index) => index < 4)

        this.setState({
          data: resultadosFiltrados
        })
      })
      .catch(err => console.log(err))
    }

  agregarAFavoritos = (id) => {
    let fav = []
    let favLocal = localStorage.getItem('favoritos')
    let favParse = JSON.parse(favLocal)

    if (favParse !== null) {
      favParse.push(id)
      let favString = JSON.stringify(favParse)
      localStorage.setItem('favoritos', favString)
      this.setState({
        esFavorito: true
      })
    } else {
      fav.push(id)
      let favString = JSON.stringify(fav)
      localStorage.setItem('favoritos', favString)
      this.setState({
        esFavorito: true
      })
    }

  }

  quitarDeFavoritos = (id) => {
    console.log(id)
  }

  cambiarEstado = (id) => {
    this.setState({
      esFavorito: this.state.esFavorito === id ? null : id
    });
  };

  verDescripcion = (id) => {
    this.setState({
      verMas: this.state.verMas === id ? null : id
    });
  };

  render() {
    return (
      <>
        <h2 className="alert alert-primary"> Peliculas mejor valoradas de la semana</h2>
        <section className="row cards" id="movies">
          {this.state.data && this.state.data.length > 0
            ? this.state.data.map((movie) => (
                <CardSola info={movie} />
              ))
            : <p>Cargando...</p>
          }
        </section>
        <Link to={`/peliculasmejorvaloradas`} className="btn btn-primary">
          Ver más
        </Link>
      </>
    );
  }
}

export default CardsTopRated;
