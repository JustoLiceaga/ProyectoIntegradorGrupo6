import React from "react";
import Cards from "../../components/Cards/Cards";
import CardsTopRated from "../../components/CardsTopRated/CardsTopRated";


function Home() {
    return(
        <React.Fragment>
        <h1>Materia Gris Movies</h1>
    <main>
        <Cards title={"Peliculas populares de la semana"} 
        api={"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=0030cb6d5a827e996db3c37d4e1cadf3"} />
        <CardsTopRated title={"Las peliculas mejor valoradas"} 
        api={"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=0030cb6d5a827e996db3c37d4e1cadf3"}   />
    </main>
    </React.Fragment>

    )
}

export default Home