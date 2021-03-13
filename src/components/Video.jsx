import React from 'react';
// import Youtube from 'react-youtube';
import ContainerDimensions from 'react-container-dimensions';
// import ReactPlayer from 'react-player'
import Skeleton from '@material-ui/lab/Skeleton';

const htmlPlayer = (width, videoUrl) => {
    return (
        <video 
            src={videoUrl}
            autoPlay="true"
            controls="true"
            width={width} 
            height={width*9/16} 
            playsInline
        ></video>
    )
}

const ytPlayer = (width, videoId) => {
    return (
        <iframe 
            title="YoutubePlayer"
            width={width} 
            height={width*9/16} 
            src={`https://www.youtube.com/embed/${videoId}`} 
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
            <Skeleton variant="rect" width={width} height={width*9/16} animation="wave"/>
            <div className="flex justify-left align-center mt-4 mb-4 ml-2">
                <Skeleton variant="circle" width={40} height={40} animation="wave" />
                <Skeleton variant="rect" width={300} height={30} animation="wave" className="ml-4"/>
            </div>
        </>
    )
}

export default (props) => {
    return (
        <ContainerDimensions>
            {props.loaded ? props.videoUrlFetched ? ({width}) => htmlPlayer(width, props.videoUrl) : 
                ({width}) => ytPlayer(width, props.videoId) : ({width}) => blankPlayer(width)
            }
        </ContainerDimensions>
    )
}

/**
 * <iframe width="560" height="315" src="https://www.youtube.com/embed/fEs7TrbuP4s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 */