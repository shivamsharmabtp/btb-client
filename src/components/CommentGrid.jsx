import React from 'react';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import CircularProgress from '@material-ui/core/CircularProgress';

import Comment from './Comment';
import constants from './../constants';

export default (props) => {
    
    const [commentData, setCommentData] = useState([]);
    const [totalCommentCount, setTotalCommentCount] = useState();

    async function loadMore(page){
        let url = `${constants.BASE_PATH}/comment/threads/getAll/video/${props.videoId}?page=${page}`;
        let commentsData = await fetch(url);
        commentsData = (await commentsData.json());
        let {comments, totalComments} = commentsData;
        const addComments = [];
        for(const comment of comments){
            if(!commentData.includes(comment))
                addComments.push(comment);
        }
        setCommentData(commentData.concat(addComments));
        setTotalCommentCount(totalComments);
    };

    return (
        <>
            <div>
                {totalCommentCount} Comments
            </div>
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
                <div >
                    {commentData.map(comment => 
                        <Comment key={comment.id} data={comment} />
                    )}  
                </div>   
            </InfiniteScroll>
        </>
    )
}