import Article from '../../../UI/Article';
import Loading from '../../../UI/Loading';
import { useState, useEffect } from 'react';

const API_KEY = '501d57c99fe239016c9cf7a6323e5be4';

function Trend() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
      getMoviesList();
  }, [])

  const getMoviesList = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`);
      const resParsed = await res.json();
      console.log(resParsed);
      setMovies(resParsed.results);
  }


  return (
    <>
      <section className='Film'>
        <h2>Voici la liste des films tendances de la semaine!</h2>
        {
          (movies.length > 0 
          ? 
              movies.map((movie) => {
                return <Article key={movie.id} {...movie} />
              }) 
            : 
              <Loading />) 

        }
      </section>
    </>
  )
}

export default Trend