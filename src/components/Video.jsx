import React, { useEffect } from 'react';
// import Youtube from 'react-youtube';
import ContainerDimensions from 'react-container-dimensions';
// import ReactPlayer from 'react-player'
import Skeleton from '@material-ui/lab/Skeleton';
import {useCallbackRef} from 'use-callback-ref';

const htmlPlayer = (width, videoUrl, ref) => {
    return (
        <video 
            src={videoUrl}
            autoPlay={true}
            controls={true}
            width={width} 
            height={width*9/16} 
            playsInline
            ref={ref}
        ></video>
    )
}

const ytPlayer = (width, videoId, controls) => {
    return (
        <iframe 
            title="YoutubePlayer"
            width={width} 
            height={width*9/16} 
            src={`https://www.youtube.com/embed/${videoId}?controls=${controls}&autoplay=1`} 
            frameborder="0" 
            allow="accelerometer; 
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture;
            fullscreen;
            " 
            allowfullscreen>
        </iframe>
    )
}

const blankPlayer = (width) => {
    return (
        <>
            <div className="mb-4">
                <Skeleton variant="rect" width={width} height={width*9/16} animation="wave"/>
                <Skeleton variant="rect" width={300} height={30} animation="wave" className="mt-2 ml-2 rounded-md"/>
                <div className="flex justify-left items-center mt-4 mb-4 ml-2 ">
                    <Skeleton variant="circle" width={40} height={40} animation="wave " />
                    <Skeleton variant="rect" width={300} height={30} animation="wave" className="ml-4 rounded-md"/>
                </div>
                <Skeleton variant="rect" width={300} height={10} animation="wave" className="mt-2 ml-2 rounded-md"/>
                <Skeleton variant="rect" width={200} height={10} animation="wave" className="mt-2 ml-2 rounded-md"/>
                <Skeleton variant="rect" width={100} height={10} animation="wave" className="mt-2 ml-2 rounded-md"/>
            </div>
            <hr className="mb-4"/>
        </>
    )
}

const notAvailablePlayer = (width) => {
    return (
        <div style={{height:width*9/16 , width}} className="p-4">Video not available.</div>
    )
}

export default (props) => {
    const media = useCallbackRef(null, node => {
        console.log(node)
        if (node !== null && window.localStorage) {
            let historyVideos = window.localStorage.getItem('history1');
            if(historyVideos)
                historyVideos = JSON.parse(historyVideos);
            if(historyVideos && historyVideos[props.videoId]){
                node.currentTime = historyVideos[props.videoId].playedTill;
            }
        }

    });
    window.setInterval(() => {
        // console.log(media)
        if(media.current && props.videoId && window.localStorage){
            let historyVideos = window.localStorage.getItem('history1');
            if(historyVideos){
                historyVideos = JSON.parse(historyVideos);
                delete(historyVideos[props.videoId])
                if(Object.keys(historyVideos).length > 100){
                    const removeKey = Object.keys(historyVideos).shift();
                    delete(historyVideos[removeKey]);
                }      
            }else{
                historyVideos = {};
            }
            historyVideos[props.videoId] = {
                playedTill : media.current.currentTime,
                totalDuration : media.current.duration
            };

            window.localStorage.setItem('history1', JSON.stringify(historyVideos));
        }
    }, 1000);


    useEffect(() => {

    }, [media]);

    return (
        <>
            <ContainerDimensions>
                {
                    props.loaded ? 
                        (props.videoUrlFetched && window.tb === 'btb') ? 
                                (props.details.inDb) ?
                                ({width}) => htmlPlayer(width, props.videoUrl, media, props.videoId) :
                            ({width}) => notAvailablePlayer(width) : 
                        ({width}) => ytPlayer(width, props.videoId, props.controls) :
                    ({width}) => blankPlayer(width)
                }
            </ContainerDimensions>
        </>

    )
}

/**
 * <iframe width="560" height="315" src="https://www.youtube.com/embed/fEs7TrbuP4s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 */