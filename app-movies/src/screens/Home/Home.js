import React from "react";
import Cards from "../../components/Cards/Cards";
import CardsTopRated from "../../components/CardsTopRated/CardsTopRated";


function Home() {
    return(
        <React.Fragment>
        <h1>Materia Gris Movies</h1>
        <p>prueba de cambios</p>
    <main>
        <Cards/>
        <CardsTopRated/>
    </main>
    </React.Fragment>

    )
}

export default Home