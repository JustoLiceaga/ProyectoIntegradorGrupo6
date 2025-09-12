import React, {Component} from "react";

class SearchResults extends Component {
    constructor(props) {
        super(props)
        
    }
    render(){
        console.log(this.props.match.params.query)
        return <h2>Resultados de busqueda</h2>
    }
}


export default SearchResults