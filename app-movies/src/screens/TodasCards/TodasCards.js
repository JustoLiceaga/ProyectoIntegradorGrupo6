import React from "react";
import CardsAll from "../../components/CardsAll/CardsAll";



function TodasCards() {
    return(
        <React.Fragment>
        <h1>Más películas</h1>
    <main>
        <CardsAll title={"Peliculas populares de la semana"} 
        api={"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=0030cb6d5a827e996db3c37d4e1cadf3"}
        populares = {true}/>
    </main>
    </React.Fragment>

    )
}


export default TodasCards 