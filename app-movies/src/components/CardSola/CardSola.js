import React, { Component } from "react";
import { Link } from "react-router-dom";
import './style.css' 


class CardSola extends Component {
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
    }}

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
    let info = this.props.info
    return (
      <>
          
              <article className="single-card-movie" key={info.id}>
                <img src={`https://image.tmdb.org/t/p/w500${info.backdrop_path}`} className="card-img-top" alt={info.title} />
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
                  
                  {this.state.esFavorito ? <button onClick = {() => this.quitarDeFavoritos(info.id)} className="btn btn-primary">
                  Quitar de favoritos
                </button>  
                  : 
                  <button onClick = {() => this.agregarAFavoritos(info.id)} className="btn btn-primary">
                  Agregar a favoritos
                </button>}
              
                  <Link to={`/detalle/${info.id}`} className="btn btn-primary">
                    Ir a detalle
                  </Link>
                </div>
              </article>
            )
      </>
    );
  }
}

export default CardSola;
