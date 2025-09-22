import React, { Component } from "react";
import CardSola from "../CardSola/CardSola";


class CardsFavoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      esFavorito: false,
      data: [],
      verMas: false,
    }
  }

  QuitarFavs = (id) => { 
    let filtrados = this.state.data.filter((ch) => ch.id !== id);

    this.setState({
      data: filtrados
    })
  }

  componentDidMount() {
    let favLocal = localStorage.getItem('favoritos');
    let favParse = JSON.parse(favLocal);
  
    if (favParse && favParse.length > 0) {
      favParse.forEach((movie) => {
        fetch(`https://api.themoviedb.org/3/movie/${movie}?language=en-US&api_key=0030cb6d5a827e996db3c37d4e1cadf3`)
          .then(res => res.json())
          .then((info) => {
            this.setState((peli) => {
              return { data: peli.data.concat(info) };
            });
          })
          .catch(err => console.log(err));
      });
    }
  }
    

  render() {
    return (
      <React.Fragment>
        <h2 className="alert alert-primary"> Peliculas favoritas</h2>
        <section className="row cards" id="movies">
          {this.state.data && this.state.data.length > 0
            ? this.state.data.map((movie) => (
                <CardSola info={movie} QuitarFavs={( ) => this.QuitarFavs(movie.id)} />
              ))
            : <p>Cargando...</p>
          }
        </section>
      </React.Fragment>
    );
  }
}

export default CardsFavoritos;
