import React, { useState, useEffect } from 'react';
import {useCallbackRef} from 'use-callback-ref';
import * as queryString from 'query-string';

// import Cookies from 'universal-cookie';

import Header from './../components/Header';
import constants, { unlinkify } from '../constants';

// const cookies = new Cookies();

export default (props) => {
    const queryParams = queryString.parse(props.location.search);
    const [details, setDetails] = useState({});

    const loadDetails = async () => {
        let url = `${constants.BASE_PATH}/spRadio/getRandomUrlInfo`
        if(queryParams.reset) url += '?reset=true&prevTitle=' + queryParams.prevTitle
        let response = await fetch(url);
        let data = await response.json();
        setDetails({...data, loaded : true});
        if(data.title) document.title = data.title + ' - BhaktiTube';                
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
        return (<>
            <div className="m-8">Loading...</div>
        </>)
    }

    const media = useCallbackRef(null, node => {
        if(details.playedTill){
            node.currentTime = details.playedTill;
            node.play();
            node.onended = (event) => {
                window.location.href = window.location.origin + window.location.pathname + '?reset=true&prevTitle=' + details.title
            };
        }
    });

    // const playMedia = () => {
    //     if(media && media.current && media.play){
    //         console.log(media);
    //         media.play()
    //     }else{
    //         console.log(media);
    //     }
    // }
    // useEffect(() => {
    //     (() => playMedia())();
    // }, [details.mp3Link]);

    // window.setInterval(async () => {
    //     // console.log(media)
    //     if(media.current){
    //         if(media.current.currentTime + 2 > media.current.duration){
    //             await loadDetails(true);
    //             await sleep(10);
    //         }
    //         // let radioHistory = {
    //         //     playedTill : media.current.currentTime,
    //         //     totalDuration : media.current.duration
    //         // };
    //         // cookies.set('radioHistory', JSON.stringify(radioHistory), { path: '/' });
    //     }
    // }, 1000);

    return (
        <>
        <Header />
        <div className="mt-8 m-2">
            {details.loaded ? displayData(details, media) : displayBlank()}
        </div>
        </>
    )
}