import react from 'react';
import Navbar from './components/Navbar/Navbar';
function App() {


  return (
    <React.Fragment>
      <Navbar/>

      <Switch>
        <Route path = '/' component = {Home} exact = {true} />
        <Route path = '/movie/id:' component = {lol}/>
        <Route path = '/movies' component = {movies}/>
        <Route path = "/favorites" component={favorites} />
        <Route path = '/results' component = {Results} />
        <Route path = '/serie/id:' component = {Serie} />
        <Route path = '/series' component = {Series} />
        <Route path = '' component = {error}/>
      </Switch>  

    <Footer/>
    </React.Fragment>
  );
}

export default App;
