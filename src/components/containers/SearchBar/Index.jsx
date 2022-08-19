import { useState, useEffect } from 'react';
import Input from './../../UI/Elements/Input';
import { config } from './../../../config/index';
import Card from '../../UI/Card/Index';

function SearchBar() {

    const [keyword, setKeyword] = useState('');
    const [result, setResult] = useState([])

    useEffect(() => {
        getResultMovies();

    }, [keyword])


    const getResultMovies = async () => {
        if (keyword) {
            const resParsed = await (
                await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${config.API_KEY}&language=fr-FR&query=${keyword}&page=1&include_adult=false`)
            ).json();
            setResult(resParsed.results);
        }
    }

console.log(result)

    const clearResult = () => {
        setResult([]);
    }

    return (
        <section className='Film'>
            <Input type="text" onInputHandler={(e) => setKeyword(e.target.value)} placeholder="Quel film recherchez-vous ?" idName="searchBar" value={keyword} />                
            {
                ((result.length > 0 && keyword !== '')
                ?
                    (result.map((movie) => {
                        return <Card key={movie.id} {...movie} />
                    }))
                :
                    /* (result.length > 0) ? clearResult() : null */
                    (result.length > 0) && clearResult() // Short circuit evaluation
                )
                
            }
        </section>
    )
}

export default SearchBar;