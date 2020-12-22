import React from 'react';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import CircularProgress from '@material-ui/core/CircularProgress';

import VideoPreview from './VideoPreview';
import constants from './../constants';

export default () => {
    
    const [videoData, setVideoData] = useState([]);

    async function loadMore(page){
        let videos = await fetch(constants.BASE_PATH + '/video/homePageVideos?page=' + page);
        videos = await videos.json();
        const addVideos = [];
        for(const video of videos){
            if(!videoData.includes(video))
                addVideos.push(video);
        }
        setVideoData(videoData.concat(addVideos));
    };

    return (
        <InfiniteScroll
                pageStart={0}
                loadMore={loadMore}
                hasMore={true}
                initialLoad={true}
                loader={
                    <div className="w-full flex justify-center">
                        <CircularProgress color="inherit" />
                    </div>
                }
            >
            <div className="flex flex-wrap md:justify-left justify-center w-12/12 overflow-hidden mt-8">
                {videoData.map(video => 
                    <VideoPreview key={video._id} data={video}/>
                )}  
            </div>   
        </InfiniteScroll>
    )
}