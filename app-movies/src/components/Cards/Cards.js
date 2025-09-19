import React, { Component } from "react";
import { Link } from "react-router-dom";
import CardSola from "../CardSola/CardSola";
import './style.css'


class Cards extends Component {
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

    fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=0030cb6d5a827e996db3c37d4e1cadf3")
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

  render() {
    return (
      <>
        <h2 className="alert alert-primary"> Peliculas populares de la semana</h2>
        <section className="row cards" id="movies">
          {this.state.data && this.state.data.length > 0
            ? this.state.data.map((movie) => (
                <CardSola info={movie} />
              ))
            : <p>Cargando...</p>
          }
        </section>
        <Link to={`/peliculaspopulares`} className="btn btn-primary">
          Ver más
        </Link>
      </>
    );
  }
}

export default Cards;
