import React from "react";
import CardsValorads from "../../components/CardsValoradas/CardsValoradas";


function MejorValoradas() {
    return(
        <React.Fragment>
    <main>
        <CardsValorads title={"Peliculas mejor valoradas"} 
        api={"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=0030cb6d5a827e996db3c37d4e1cadf3"}
        populares = {true}/>
    </main>
    </React.Fragment>

    )
}


export default MejorValoradas 