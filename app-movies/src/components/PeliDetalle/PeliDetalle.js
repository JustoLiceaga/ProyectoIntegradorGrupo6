import React, { Component } from "react";

class PeliDetalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            esFavorito: false,
            pelicula: null,
        }
    }


    componentDidMount() {
        const id = this.props.info

        let favLocal = localStorage.getItem('favoritos')
        let favParse = JSON.parse(favLocal)
        if (favParse !== null) {
            if (favParse.includes(this.props.id)) {
                this.setState({
                    esFavoritoavoritos: true
                })
            }
        }

        const api = `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=0030cb6d5a827e996db3c37d4e1cadf3`
        fetch(api)
            .then(res => res.json(),)
            .then(data => this.setState({
                pelicula: data
            }))
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
        let favLocal = localStorage.getItem('favoritos');
        let favParse = JSON.parse(favLocal);

        if (favParse !== null) {
            let nuevosFavoritos = favParse.filter(favId => favId !== id);
            localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
            this.setState({
                esFavorito: false
            });
        }
    }

        

        
    



    render() {
        const { pelicula } = this.state;

        if (!pelicula) {
            return <p>Cargando...</p>;
        }
        return (
            <React.Fragment>
                <section className="row cards" id="movies">
                    <article className="single-card-movie" key={pelicula.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${pelicula.backdrop_path}`} className="card-img-top" alt={pelicula.title} />
                        <div className="cardBody">
                            <h5 className="card-title">{pelicula.original_title}</h5>
                            <p>Promedio de votos: {pelicula.vote_average}</p>
                            <p>Fecha de estreno: {pelicula.release_date}</p>
                            <p>{pelicula.overview}</p>
                            <p>Géneros:{" "}
                                {pelicula.genres && pelicula.genres.length > 0
                                    ? pelicula.genres.map(g => g.name).join(", ")
                                    : "No tiene"}
                            </p>
                            {this.state.esFavorito ? (
                            <button onClick={() => this.quitarDeFavoritos(pelicula.id)} className="btn btn-primary">
                                Quitar de favoritos
                            </button>
                             ) :  (
                                <button onClick={() => this.agregarAFavoritos(pelicula.id)} className="btn btn-primary">
                                    Agregar a favoritos
                                </button>)}
                        </div>
                    </article>
                </section>
            </React.Fragment>
        );
    }
}

export default PeliDetalle;