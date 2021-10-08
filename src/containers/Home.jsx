import React from 'react';

import Header from './../components/Header';
import VideoGrid from './../components/VideoGrid';

export default () => {
    console.log('Env = ' + process.env.NODE_ENV);
    console.log('Tb = ' + window.tb);
    return (
        <>
        <Header />
        <div className="flex justify-evenly text-sm">
            <VideoGrid />
        </div>
        </>
    )
}