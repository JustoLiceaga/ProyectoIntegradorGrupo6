import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './screens/Home/Home';
function App() {


  return (
    <React.Fragment>
      <Navbar/>

      <Switch>
        <Route path = '/' component = {Home} exact = {true} />
        <Route path = '/resultados/:query' component = {Resultados}/>


      </Switch>  

    <Footer/>
    </React.Fragment>
  );
}

export default App;
