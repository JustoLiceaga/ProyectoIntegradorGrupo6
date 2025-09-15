import React from "react";
import PeliDetalle from "../../components/PeliDetalle/PeliDetalle";



function DetalleMejorValorado(props) {

    const id = props.match.params.id;

    return (
        <React.Fragment>
            <article >
            <PeliDetalle info={id} esPopular={false}/>
            </article>
        </React.Fragment>
    )
}

export default DetalleMejorValorado
