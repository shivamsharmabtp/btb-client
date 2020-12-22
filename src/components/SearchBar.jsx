import React, { useState } from 'react';
import constants from '../constants';
import Suggestions from './Suggestions';
import {navigate} from '@reach/router';

export default (props) => {
    const [query, setQuery] = useState(props.query);
    const [results, setResults] = useState([]);

    function search(query, e){
        if(query !== '' && e.key !== 'Enter'){
            fetch(`${constants.BASE_PATH}/video/searchSuggestions?query=${query}`)
                .then(response => response.json())
                .then(data => {
                    setResults(data);
                });
        }else if(e.key === 'Enter'){
            navigate(`/search?query=${query}`);
        }
    }

    return (
        <>
            <input
                className="shadow appearance-none border rounded md:w-4/12 w-7/12 h-8 text-gray-700 px-4 focus:outline-none"
                placeholder="Search"
                value={query}
                list="datalist"
                onInput={e => {
                        setQuery(e.target.value)}}
                onKeyUp={(e) => search(query,e)}
            />
            <datalist id="datalist">
                <Suggestions results={results} />
            </datalist>
        </>
    )
    
}