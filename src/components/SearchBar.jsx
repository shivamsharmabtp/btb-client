import React, { useState } from 'react';
import constants from '../constants';
import Suggestions from './Suggestions';

export default (props) => {
    const [query, setQuery] = useState(props.query);
    const [results, setResults] = useState([]);

    function search(e){
        if(query !== '' && e.key !== 'Enter'){
            fetch(`${constants.BASE_PATH}/video/search/suggestions?query=${query}`)
                .then(response => response.json())
                .then(data => {
                    setResults(data);
                });
        }else if(e.key === 'Enter'){
            window.location = (`/search?query=${query}`);
        }
    }

    return (
        <>
            <div className="md:w-4/12 w-7/12 shadow appearance-none border rounded flex justify-between">
                <input
                    className=" w-10/12 h-8 text-gray-700 px-4 focus:outline-none"
                    placeholder="Search"
                    value={query}
                    list="datalist"
                    onInput={e => {
                            setQuery(e.target.value)}}
                    onKeyUp={(e) => search(e)}
                />
                <button type="button" className="searchBtn react-search-field-button" onClick={() => search({key:'Enter'})}>
                    <svg version="1.1" x="0px" y="0px" width="21" height="21" viewBox="0 0 635 635" className="svg"><g><path d="M255.108,0C119.863,0,10.204,109.66,10.204,244.904c0,135.245,109.659,244.905,244.904,244.905 c52.006,0,100.238-16.223,139.883-43.854l185.205,185.176c1.671,1.672,4.379,1.672,5.964,0.115l34.892-34.891 c1.613-1.613,1.47-4.379-0.115-5.965L438.151,407.605c38.493-43.246,61.86-100.237,61.86-162.702 C500.012,109.66,390.353,0,255.108,0z M255.108,460.996c-119.34,0-216.092-96.752-216.092-216.092 c0-119.34,96.751-216.091,216.092-216.091s216.091,96.751,216.091,216.091C471.199,364.244,374.448,460.996,255.108,460.996z"></path></g></svg>
                </button>
            </div>
            <datalist id="datalist">
                <Suggestions results={results} />
            </datalist>
        </>
    )
    
}