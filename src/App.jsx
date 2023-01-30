import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css'
import Movies from './components/Movies';

const APY_KEY = "ef13f188";
let cartelera = [];
function App() {

  const [movies, setMovies] = useState([]);
  const [searchName, setSearchName] = useState("accion");

  

  const handleSearch = (e) => {
    let errorString;
    e.preventDefault();
    if(!setSearchName(e.target.searchMovie.value)){
      return (
        errorString="Ingrse un nombre"
      );
    }
    setSearchName(e.target.searchMovie.value);
  }
  const getMoviess = () =>{
    const URL = `http://www.omdbapi.com/?apikey=${APY_KEY}&s=${searchName}`;
    axios.get(URL)
      .then((res) => setMovies(res.data.Search))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getMoviess();
  }, [searchName]);

  return (
    <div className="App">

      <form className='formulario' onSubmit={handleSearch}>

        <label htmlFor="">Buscar </label>
        <input id='searchMovie' type="text" />

        <button>Buscar</button>
      </form>
      
      <section className='cartelera'>
        {
          movies.map(movie => {
            return(
              <Movies key={movie.imdbID}  Poster={movie.Poster} Title={movie.Title} Year={movie.Year}/>
            );
          })
        }
      </section>
    </div>
  )
}

export default App
