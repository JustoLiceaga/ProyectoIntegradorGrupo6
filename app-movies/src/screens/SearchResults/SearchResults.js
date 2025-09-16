import React from "react";
import ResultadoBusqueda from "../../components/ResultadoBusqueda/ResultadoBusqueda";

function SearchResults(props) {
    const nombre = props.match.params.nombre;
    return (


        <React.Fragment>
            <h1>Resultados de búsqueda: </h1>
            <article>
                <ResultadoBusqueda info={nombre} ></ResultadoBusqueda>
            </article>
            

        </React.Fragment>
    )
}



export default SearchResults