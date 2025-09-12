import React, { Component } from "react";
import ResultadoBusqueda from "../../components/ResultadoBusqueda/ResultadoBusqueda";

class SearchResults extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        console.log(this.props.match.params.query)
        return (
            <React.Fragment>
            <h2>Resultados de busqueda</h2> 
            <ResultadoBusqueda></ResultadoBusqueda>

            </React.Fragment>
        )
    }
}


export default SearchResults