import React from 'react'
import { useState } from 'react';

function SearchBar() {

    const [keyword, setKeyword] = useState('');

    console.log(keyword);

    return (
        <>
            <form>
                <input onChange={(e) => setKeyword(e.target.value)} type="text" placeholder="Que recherchez vous comme film ?" name="inputSearch" id="inputSearch" value={keyword} />
                <p>{keyword}</p>
            </form>
        </>
    )
}

export default SearchBar;