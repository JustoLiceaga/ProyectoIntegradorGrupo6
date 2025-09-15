import React from "react";
import PeliDetalle from "../../components/PeliDetalle/PeliDetalle";



function DetallePopular(props) {

    const id = props.match.params.id;

    return (
        <React.Fragment>
            <article >
            <PeliDetalle info={id}/>
            </article>
        </React.Fragment>
    )
}

export default DetallePopular
