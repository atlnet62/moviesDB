import { useState, useEffect } from 'react';
import { config } from './../../../config/index';

import Input from './../../UI/Elements/Input';
import Card from '../../UI/Card/Index';
import NotFound from './../../UI/Elements/NotFound'

function SearchBar({keyword, setKeyword}) {

	const [result, setResult] = useState([]);


    useEffect(() => {

        async function getResultMovies() {
            if (keyword) {
                const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${config.API_KEY}&language=fr-FR&query=${keyword}&page=1`);
                const resParsed = await res.json();
                setResult(resParsed.results);
            }
        }
        getResultMovies();
        
    }, [keyword])
    
    const clearResult = () => {
        setResult([]);
    }

    
    return (
        <section id="resultFound" className="Film">
            <Input type="text" onInputHandler={(e) => setKeyword(e.target.value)} placeholder="Quel film recherchez-vous ?" idName="searchBar" value={keyword} />            
            {
                (result.length > 0 && keyword !=='')
                ?
                    result.map((movie) => {
                        return <Card key={movie.id} {...movie} />
                    })
                :
                (result.length === 0 && keyword !=='') 
                ?
                    <NotFound />
                :
                    (result.length > 0) ? (clearResult() ) : null
                    //(result.length > 0) && clearResult() // Short circuit evaluation
                
            }
        </section>
    )
}

export default SearchBar;