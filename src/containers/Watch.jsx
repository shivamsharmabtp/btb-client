import React, { useEffect, useState } from 'react';
import * as queryString from 'query-string';
import WatchPrimary from './../components/Video';
import WatchSecondary from './../components/Recommended';
import moment from 'moment';

import Header from './../components/Header';
import constants, { getImgFromThumbnail, linkify } from '../constants';

export default (props) => {
    const queryParams = queryString.parse(props.location.search);
    const [details, setDetails] = useState();

    function loadDetails(){
        fetch(`${constants.BASE_PATH}/video/details/${queryParams.v}`)
                .then(response => response.json())
                .then(data => {
                    setDetails(data);
                });
    }
    useEffect(() => {
        
        loadDetails()
    },[]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
        <Header />
        <div className="w-full md:h-8"></div>
        <div className="md:flex justify-around">
            <div className="md:w-4/6 h-auto mt-4">
                {details ? <WatchPrimary videoUrl={details.videoUrl} />  : (<></>)}
                {details ? (<div className="mx-3 md:mx-0">
                    <div className="text-lg	font-sans my-3">{details.title}</div>
                    <div className="h-4 mt-1 font-light text-sm mb-3">{moment(details.publishedAt).format("MMM Do YYYY")}</div>
                    <hr></hr>
                    <a href={`/search?query=channel:${details.channelTitle}`}>
                        <div className="flex items-center my-3">
                            <div className="h-12 w-12 mr-2 rounded-full">
                                <img src={getImgFromThumbnail(details.channelInfo.thumbnails, 'min')} className="object-fit rounded-full" alt=""/>
                            </div>
                            <div>{details.channelTitle}</div>
                        </div>
                    </a>
                    <div className="font-light text-sm" dangerouslySetInnerHTML={{__html : linkify(details.description)}}></div>
                    <hr className="my-4"></hr>
                </div>) : (<></>)}
                <div>
                <div class="fb-comments" data-href={window.location.origin + '/watch?v=' + queryParams.v} data-width="100%" data-numposts="50" data-colorscheme="dark" data-lazy="true"></div>
                </div>
            </div>
            <div className="md:w-1/4">
                <WatchSecondary videoId={queryParams.v} />
            </div>
        </div>
        </>
    )
}