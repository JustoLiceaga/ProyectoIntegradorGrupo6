import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './screens/Home/Home';
import error from './screens/404/404';
import TodasCards from './screens/TodasCards/TodasCards';
import MejorValoradas from './screens/MejorValoradas/MejorValoradas';
import SearchResults from './screens/SearchResults/SearchResults';
import DetalleUnico from './screens/DetalleUnico/DetalleUnico';
import Favorites from './screens/Favorites/Favorites';


function App() {


  return (
    <React.Fragment>
      <Navbar />

      <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route path='/results/:nombre' component={SearchResults} />
        <Route path='/peliculaspopulares' component={TodasCards} />
        <Route path='/peliculasmejorvaloradas' component={MejorValoradas} />
        <Route path='/detalle/:id' component={DetalleUnico} />
        <Route path='/favorites' component={Favorites} />

        <Route path='' component={error} />


      </Switch>

      <Footer />
    </React.Fragment>
  );
}

export default App;
