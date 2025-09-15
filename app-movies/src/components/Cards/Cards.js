import React, { Component } from "react";
import { Link } from "react-router-dom";
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

  agregarAFavoritos = (id) => {
    let fav = []
    let favLocal = localStorage.getItem('favoritos')
    let favParse = JSON.parse(favLocal)

    if (favParse !== null) {
      favParse.push(id)
      let favString = JSON.stringify(favParse)
      localStorage.setItem('favoritos', favString)
    } else {
      fav.push(id)
      let favString = JSON.stringify(fav)
      localStorage.setItem('favoritos', favString)
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
        <h2 className="alert alert-primary"> Peliculas populares de la semana</h2>
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
                  
                  {this.state.esFavorito ? <button onClick = {() => this.quitarDeFavoritos(movie.id)} className="btn btn-primary">
                  Quitar de favoritos
                </button>  
                  : 
                  <button onClick = {() => this.agregarAFavoritos(movie.id)} className="btn btn-primary">
                  Agregar a favoritos
                </button>}
                  

                  
                  <Link to={`/peliculaspopulares/detalle${movie.id}`} className="btn btn-primary">
                    Ir a detalle
                  </Link>
                </div>
              </article>
            ))
            : "cargando..."}
        </section>
        <Link to={`/peliculaspopulares`} className="btn btn-primary">
          Ver más
        </Link>
      </>
    );
  }
}

export default Cards;
