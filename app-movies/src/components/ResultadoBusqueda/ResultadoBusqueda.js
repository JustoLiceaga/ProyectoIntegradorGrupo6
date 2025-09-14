import React, { Component } from "react";
import { withRouter } from "react-router-dom";



class ResultadoBusqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            busqueda: '',
            resultados: [],
        };
    };


    llamadoApi(url, consecuencia){
        fetch(url)
            .then( response => response.json())
            .then(data => consecuencia(data))
            .catch (error => console.log(error))

    }





    componentDidMount() {
        this.llamadoApi('', this.mostrarSimilares)  //poner aca API//
    }

    mostrarSimilares = (data) => {
        this.setState(
            {
                pelicula : ''
            }
        )
    }



    controlarCambios = (evento) => {
        this.setState({
            busqueda: this.target.value 
        });
    };
    cambiarEstado = (id) => {

    }

    render() {
        const { pelicula } = this.state;

        if (!pelicula) {
        return <p>Cargando...</p>;
        }
        return (

            <>

                <div>

                </div>




                <section className="row cards" id="movies">
                    <article className="single-card-movie" key={pelicula.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${pelicula.id}`} className="card-img-top" alt={pelicula.title} />
                        <div className="cardBody">
                            <h5 className="card-title">{pelicula.title}</h5>
                            
                            
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









export default ResultadoBusqueda