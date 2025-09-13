import React, { Component } from "react";
import { withRouter } from "react-router-dom";


class ResultadoBusqueda extends Component {
    constructor(props) {
        super(props);
        this.state = { valor: '' };

    }
    evitarAutoSubmit(evento) {
        evento.preventDefault();
    }
    controlarCambios(evento) {
        this.setState({ valor: evento.target.value });
    }
    render() {
        return (
            <form onSubmit={this.evitarSubmit}>
        <label>Name:</label>
        <input
          type="text"
          onChange={this.controlarCambios}
          value={this.state.valor}
        />
        <input type="submit" value="Submit" />
      </form>
        )
    }
}

export default ResultadoBusqueda