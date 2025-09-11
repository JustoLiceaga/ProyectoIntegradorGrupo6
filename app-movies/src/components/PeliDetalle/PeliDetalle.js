import React, { Component } from "react";

class PeliDetalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoritos: null,
            pelicula: null,
        }
    }


    componentDidMount() {
        const id = Number(this.props.info)
        const api = this.props.esPopular
            ? `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=0030cb6d5a827e996db3c37d4e1cadf3`
            : `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=0030cb6d5a827e996db3c37d4e1cadf3`;
        fetch(api)
            .then(res => res.json())
            .then(data => this.setState({
                pelicula : data.results.find((peli) => peli.id === id)
            }))
            .catch(err => console.log(err))
    }

    cambiarEstado = (id) => {
        this.setState({
            favoritos: this.state.favoritos === id ? null : id
        });
    };


    render() {
        const { pelicula } = this.state;

        if (!pelicula) {
        return <p>Cargando...</p>;
        }
        return (
            <>
                <section className="row cards" id="movies">
                    <article className="single-card-movie" key={pelicula.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${pelicula.backdrop_path}`} className="card-img-top" alt={pelicula.title} />
                        <div className="cardBody">
                            <h5 className="card-title">{pelicula.title}</h5>
                            <p>Promedio de votos: {pelicula.vote_average}</p>
                            <p>Fecha de estreno: {pelicula.release_date}</p>
                            <p>{pelicula.overview}</p>
                            <button
                                onClick={() => this.cambiarEstado(pelicula.id)}
                                className="btn alert-primary"
                            >
                                {this.state.favoritos === pelicula.id ? "Quitar de favoritos" : 'Agregar a favoritos'}
                            </button>
                        </div>
                    </article>
                </section>
            </>
        );
    }
}

export default PeliDetalle;