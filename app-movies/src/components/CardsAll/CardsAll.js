import React, { Component } from "react";
import CardSola from "../CardSola/CardSola";
import './style.css'


class CardsAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      esFavorito: false,
      data: [],
      verMas: false,
      numeroDePagina: 1,
      busqueda: "",
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

    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${this.state.numeroDePagina}&sort_by=popularity.desc&api_key=0030cb6d5a827e996db3c37d4e1cadf3`)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ data: data.results })
      })
      .catch(err => console.log(err))
  }

  cargarPaginaSiguiente() {
    const nuevaPagina = this.state.numeroDePagina + 1;
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${nuevaPagina}&sort_by=popularity.desc&api_key=0030cb6d5a827e996db3c37d4e1cadf3`)
      .then(res => res.json())
      .then((data) =>
        this.setState({
          data: this.state.data.concat(data.results),
          numeroDePagina: nuevaPagina,
        })
      )
      .catch(err => console.log(err))
  }

  prevenirDefault(evento) {
    evento.preventDefault()

  }

  controlarCambios(evento) {
    this.setState({
      busqueda: evento.target.value
    })

  }

  render() {
    const peliculasFiltradas = this.state.data.filter((movie) =>
      movie.title.toLowerCase().includes(this.state.busqueda.toLowerCase())
    );
    return (
      <React.Fragment>
        <h2 className="alert alert-primary"> Peliculas populares de la semana</h2>
        <form onSubmit={(event) => this.prevenirDefault(event)}>
          <input
            type="text"
            onChange={(event) => this.controlarCambios(event)}
            value={this.state.busqueda}
            placeholder="Filtrar..." />
          <button type="submit">Filtrar</button>
        </form>
        <section className="row cards" id="movies">
          {peliculasFiltradas && peliculasFiltradas.length > 0
            ? peliculasFiltradas.map((movie) => (
              <CardSola info={movie} />
            ))
            : <p>Cargando...</p>
          }
        </section>
        <button onClick={() => this.cargarPaginaSiguiente()} className="btn btn-primary"> Cargar mas peliculas </button>
      </React.Fragment>
    );
  }
}

export default CardsAll;
