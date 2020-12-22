import React from 'react';

import Header from './../components/Header';
import VideoGrid from './../components/VideoGrid';

export default () => {
    return (
        <>
        <Header />
        <div className="flex justify-center text-sm">
            <VideoGrid />
        </div>
        </>
    )
}