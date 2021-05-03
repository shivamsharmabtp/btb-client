import React, { useState, useEffect } from 'react';
import {useCallbackRef} from 'use-callback-ref';
import * as queryString from 'query-string';
import Scroll from 'react-scroll';
import Header from './../components/Header';
import constants, { unlinkify } from '../constants';

const scroll = Scroll.animateScroll;

// import Cookies from 'universal-cookie';

// const cookies = new Cookies();

export default (props) => {
    let wakeLock, scrollLock;
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

    const lockScroll = () => {
        var searchParams = new URLSearchParams(window.location.search)
        searchParams.set('scrollLock', true)
        window.location.search = searchParams.toString()
    }
    const getScrollLock = () => scrollLock;

    const displayData = (details, media) => {
        return (
            <>
                <div className="fixed w-full bg-gray-400 bottom-0 p-2">
                    <audio  controls className="w-full" ref={media}>
                        <source src={details.mp3Link} />
                    </audio>
                    <button className="mt-2" onClick={() => lockScroll()}>Lock Scroll</button>
                </div>
                <div className>
                    <a href={details.link} >Source</a>
                    <div className="mt-8 ">{details.title}</div>
                    <h3 className="mt-8">Record Info</h3>
                    <div className="mt-4" dangerouslySetInnerHTML={{__html : unlinkify(details.recordInfo)}}></div>
                    <h3 className="mt-8">Transcript</h3>
                    <div className="mt-4" dangerouslySetInnerHTML={{__html : unlinkify(details.transcript)}}></div>
                </div>
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

    let interval;
    const intervalFunc = async () => {
        if(media.current){
            // console.log({
            //     currentTime : media.current.currentTime,
            //     duration : media.current.duration
            // });
            if(!wakeLock){
                try {
                    await navigator.wakeLock.request('screen');
                    console.log('Wake Lock is active!');
                    wakeLock=true
                  } catch (err) {
                    // The Wake Lock request has failed - usually system related, such as battery.
                    console.log(`${err.name}, ${err.message}`);
                  }   
            }

            if(!queryParams.scrollLock){
                scroll.scrollTo(document.querySelector('body').offsetHeight*(media.current.currentTime/media.current.duration) - 150);
            }
        }
        clearInterval(interval);
        interval = window.setInterval(async () => {
                intervalFunc();
        }, 1000);
    }

    interval = window.setInterval(async () => {
            intervalFunc();
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