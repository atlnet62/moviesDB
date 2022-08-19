import { useState, useEffect } from 'react';
import Loading from '../../UI/Elements/Loading';
import Input from './../../UI/Elements/Input';
import { config } from './../../../Config/index';
import Card from '../../UI/Card/Index';

function SearchBar() {

    const [keyword, setKeyword] = useState('');
    const [result, setResult] = useState([])

    useEffect(() => {
        getResultMovies();

    })


    const getResultMovies = async () => {
        if (keyword) {
            const resParsed = await (
                await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${config.API_KEY}&language=fr-FR&query=${keyword}&page=1&include_adult=false`)
            ).json();
            setResult(resParsed.results);
        }
    }

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
                    (result.length > 0) ? clearResult() : 1 === 1
                )
                
            }
        </section>
    )
}

export default SearchBar;