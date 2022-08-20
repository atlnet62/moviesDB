import { useState, useEffect } from 'react';
import { config } from '../../../../config';

import Card from '../../../UI/Card/Index';
import Loading from '../../../UI/Elements/Loading';


function Home(keyword) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const getNewMovies = async () => {
            const res = await fetch(`
            https://api.themoviedb.org/3/movie/now_playing?api_key=${config.API_KEY}&language=fr-FR&page=1`);
            const resParsed = await res.json();
            setMovies(resParsed.results);
        }

        getNewMovies();
    }, []);

    console.log(keyword.length);
  return (
    <section id="home" className="Film">
        <h2>Nouveautés du moment :</h2>

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

export default Home