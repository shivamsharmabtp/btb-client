import React, {useState} from 'react';
import * as queryString from 'query-string';
import InfiniteScroll from 'react-infinite-scroller';
import CircularProgress from '@material-ui/core/CircularProgress';
import NoResultImg from './../containers/Images/empty.svg';


import Header from './../components/Header';
import constants from '../constants';
import VideoPreview from '../components/VideoPreview';

export default (props) => {
    const queryParams = queryString.parse(props.location.search);

    const [videoData, setVideoData] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [noResult, setNoResult] = useState(false);

    async function loadMore(page){
        const data = await fetch(`${constants.BASE_PATH()}/video/search/main?page=${page}&query=${queryParams.query}`);
        let {videos, hasMore} = await data.json();
        setVideoData([...new Set(videoData.concat(videos))]);
        setHasMore(hasMore);
        if(page===1 && videos.length === 0){
            setNoResult(true);
        }
    };

    return (
        <>
        <Header query={queryParams.query} />
        <div className="flex justify-evenly text-sm flex-col">
                    <InfiniteScroll
                            pageStart={0}
                            loadMore={loadMore}
                            hasMore={hasMore}
                            initialLoad={true}
                            loader={
                                <div className="w-full flex justify-center">
                                    <CircularProgress color="inherit" />
                                </div>
                            }
                        >
                        <div className="flex flex-wrap md:justify-left justify-evenly w-12/12 overflow-hidden mt-8">
                            {videoData.map(video => 
                                <VideoPreview key={video._id} data={video}/>
                            )}  
                        </div>   
                    </InfiniteScroll>
                    <div>
                    {
                        (noResult) ? (
                            <div className="flex justify-center mt-16"><img className="h-64" src={NoResultImg} alt="No Results Found"/></div>
                        ):<></>
                    }
                    {(!hasMore) ? (
                        <div className="mt-16 w-full flex justify-center">• End of Results •</div>
                    ):(<></>)}
                    </div>
        </div>
        </>
    )
}