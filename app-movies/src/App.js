import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './screens/Home/Home';
import Resultados from './screens/Resultados/Resultados';
import error from './screens/404/404';


function App() {


  return (
    <React.Fragment>
      <Navbar/>

      <Switch>
        <Route path = '/' component = {Home} exact = {true} />
        <Route path = '/resultados/:query' component = {Resultados}/>
        <Route path = '' component = {error}/>

      </Switch>  

    <Footer/>
    </React.Fragment>
  );
}

export default App;
