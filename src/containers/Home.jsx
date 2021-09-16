import React from 'react';

import Header from './../components/Header';
import VideoGrid from './../components/VideoGrid';

export default () => {
    console.log(process.env.NODE_ENV);
    return (
        <>
        <Header />
        <div className="flex justify-evenly text-sm">
            <VideoGrid />
        </div>
        </>
    )
}