import Card from '../../../UI/Card/Index';
import Loading from './../../../UI/Elements/Loading';

import { useState, useEffect } from 'react';
import { config } from '../../../../Config/index';

function Trending() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMoviesList();
    }, [])
  
    const getMoviesList = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${config.API_KEY}`);
        const resParsed = await res.json();
        setMovies(resParsed.results);
    }


    return (
        <section className='Film'>
        <h2>Voici la liste des films tendances de la semaine!</h2>
        {
            (movies.length > 0 
            ? 
                movies.map((movie) => {
                    return <Card key={movie.id} {...movie} />
                }) 
            : 
                <Loading />
            )
        }
    </section>
    )
}

export default Trending;