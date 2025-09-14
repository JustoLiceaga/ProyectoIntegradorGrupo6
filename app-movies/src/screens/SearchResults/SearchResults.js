import React from "react";
import ResultadoBusqueda from "../../components/ResultadoBusqueda/ResultadoBusqueda";

function SearchResults() {
    const id = props.match.params.id;
    return (


        <React.Fragment>
            <h1>Resultados de búsqueda: </h1>
            <article>
                <ResultadoBusqueda info={id} esPopular={true}></ResultadoBusqueda>
            </article>
            

        </React.Fragment>
    )
}



export default SearchResults