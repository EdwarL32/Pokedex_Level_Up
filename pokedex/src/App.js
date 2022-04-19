
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Pokemons from './components/Pokemons';
import PokemonsInfo from './components/PokemonsInfo';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (

    
    <HashRouter>
      <div>
      <div className="App">
      <div className='header'></div>
      </div>
    
      </div>
        <Routes>
          
          <Route path='/' element={<Login/>}/>
          
          
          <Route element={<ProtectedRoutes/>}>
              <Route path='/pokemons' element={<Pokemons/>}/>
              <Route path='/pokemons/:id' element={<PokemonsInfo/>}/>
              
          </Route>
        </Routes>
    </HashRouter>
    
  );
}

export default App;