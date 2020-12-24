import React from 'react';
// import Youtube from 'react-youtube';
import ContainerDimensions from 'react-container-dimensions';

export default (props) => {
    return (
        <ContainerDimensions>
            {({width}) => <iframe 
            title="YoutubePlayer"
            width={width} 
            height={width*9/16} 
            src={`https://www.youtube.com/embed/${props.videoId}`} 
            frameborder="0" 
            allow="accelerometer; 
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture;
            fullscreen;
            " 
            allowfullscreen></iframe>}
        </ContainerDimensions>
    )
}

/**
 * <iframe width="560" height="315" src="https://www.youtube.com/embed/fEs7TrbuP4s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 */