import React, { useState, useEffect } from 'react';

import Header from './../components/Header';
import Video from './../components/Video';
import constants from '../constants';

export default (props) => {
    const [details, setDetails] = useState({});

    function loadDetails(){
        fetch(`${constants.BASE_PATH}/tv/randomVideo`)
                .then(response => response.json())
                .then(data => {
                    setDetails({...data, loaded : true});
                    if(data.title) document.title = data.title + ' - ReactionTube';
                });
    }
    useEffect(() => {
        
        loadDetails()
    },[]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <Header></Header>
            <div className="w-8/12 mt-4 ml-4">
                <Video controls={0} videoUrl={details.videoUrl} videoUrlFetched={details.videoUrlFetched} videoId={details.videoId} loaded={details.loaded} />
                <div>
                    <button onClick={() => loadDetails()} className="p-2 m-1">Ch +</button>
                    <button onClick={() => loadDetails()} className="p-2 m-1">Ch -</button>
                </div>
            </div>
        </>
    )
}