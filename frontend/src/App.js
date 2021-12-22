import {BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';
import Favorites from './pages/Favorites';
import Layout from './components/Layout';
import { MoviesProvider } from './context/MoviesContext';
import { NavigationProvider } from './context/NavigationContext';

import "./styles/globals.scss";

function App() {

  return (  
    <BrowserRouter >
      <MoviesProvider>
        <NavigationProvider>
          <Layout menuActive="Home">
            <Route path="/" exact component={Home}></Route>
            <Route path="/Home" component={Home}></Route>
            <Route path="/Details/:imdbID" component={Details}></Route>
            <Route path="/Favorites" component={Favorites}></Route>
          </Layout>
        </NavigationProvider>
      </MoviesProvider>
    </BrowserRouter>
  );
}

export default App;
