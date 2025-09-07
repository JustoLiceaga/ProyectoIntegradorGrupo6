import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


class Cards extends Component {
    constructor(props){
        super(props);
        this.state = {
            favoritos: 'Agregar a favoritos',
        }
    }

    componentDidMount() {

        fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
            {
          headers: {
            Authorization: "Bearer 0030cb6d5a827e996db3c37d4e1cadf3",
            accept: "application/json",
          },
        })
        .then(res => res.json())
        .then(data => this.setState({
            data: data.results,
        }))
        .catch(err => console.log(err))
    }

    cambiarEstado = () => {
        this.setState({
          favoritos: this.state.favoritos === 'Agregar a favoritos' ? "Quitar de favoritos" : 'Agregar a favoritos',
          verMas: this.state.verMas === false ? true : false,
        });
      };

    render() {
        return (
          <>
            <h2 className="alert alert-primary">Popular movies this week</h2>
            <section className="row cards" id="movies">
              {this.state.data.length > 0
                ? this.state.data.map((movie) => (
                    <article className="single-card-movie" key={movie.id}>
                      <img src={movie.img} className="card-img-top" alt={movie.title} />
                      <div className="cardBody">
                        <h5 className="card-title">{movie.title}</h5>
                        {this.state.verMas ? <p className="card-text">{movie.overview}</p> : null}
                        <Link to={`/movie/${movie.id}`} className="btn btn-primary">
                          Ir a detalle
                        </Link>
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
          </>
        );
      }
    }
    
export default Cards;