import React, { useState, useEffect } from 'react';
import {useCallbackRef} from 'use-callback-ref';
import Cookies from 'universal-cookie';

import Header from './../components/Header';
import constants, { unlinkify } from '../constants';

const cookies = new Cookies();

export default (props) => {
    const [details, setDetails] = useState({});

    const loadDetails = () => {
        fetch(`${constants.BASE_PATH}/spRadio/getRandomUrlInfo`)
                .then(response => response.json())
                .then(data => {
                    setDetails({...data, loaded : true});
                    if(data.title) document.title = data.title + ' - BhaktiTube';
                    console.log(details);
                    cookies.set('radioHistoryLink', data.link, { path: '/' })
                });
                
    }

    useEffect(() => {
        loadDetails();
    }, [])

    const displayData = (details, media) => {
        return (
            <>
                <a href={details.link} >Source</a>
                <audio  controls className="mt-4 w-full" ref={media}>
                    <source src={details.mp3Link} />
                </audio>
                <div className="mt-4 ">{details.title}</div>
                <h3 className="mt-8">Record Info</h3>
                <div className="mt-4" dangerouslySetInnerHTML={{__html : unlinkify(details.recordInfo)}}></div>
                <h3 className="mt-8">Transcript</h3>
                <div className="mt-4" dangerouslySetInnerHTML={{__html : unlinkify(details.transcript)}}></div>

            </>
        )
    }
    const displayBlank = () => {
        return (<></>)
    }

    const media = useCallbackRef(null, node => {
        if(details.playedTill){
            node.currentTime = details.playedTill
        }
    });

    window.setInterval(() => {
        // console.log(media)
        if(media.current){
            let radioHistory = {
                playedTill : media.current.currentTime,
                totalDuration : media.current.duration
            };

            cookies.set('radioHistory', JSON.stringify(radioHistory), { path: '/' });
        }
    }, 1000);

    return (
        <>
        <Header />
        <div className="mt-8 m-2">
            {details.loaded ? displayData(details, media) : displayBlank()}
        </div>
        </>
    )
}