import React from 'react'
import Article from './Article';
import SearchBar from './SearchBar';
import Loading from './Loading';
import { useState, useEffect } from 'react';

const API_KEY = '501d57c99fe239016c9cf7a6323e5be4';

function Section(props) {

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
    <section className={props.nameClass}>
        <h2>{props.title}</h2>
        
        {
            props.nameClass === 'Film' 
            ? 
                (movies.length > 0 
                ? 
                    movies.map((movie, index) => {
                        return <Article key={movie.id} {...movie} />
                    }) 
                : 
                    <Loading />) 
            : 
            (props.nameClass === 'Search' 
            ?
                <SearchBar />
            : (props.nameClass === 'searchArea'
            ? 'searchArea' : 'Erreur de connexion'))
    }
    </section>
  )
}

export default Section