import { useState } from 'react';
import Input from '../../../UI/Input';

function SearchBar() {

    const [keyword, setKeyword] = useState('');
    
    return (
        <>
            <Input type="text" onInputHandler={(e) => setKeyword(e.target.value)} placeholder="Quel film recherchez-vous ?" idName="inputSearch" children={keyword} />                
            <p>{keyword}</p>
        </>
    )
}

export default SearchBar;