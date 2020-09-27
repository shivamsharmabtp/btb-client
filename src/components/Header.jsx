import React from 'react';
import profilePic from './../containers/Images/profilePic.jpeg';

export default () => {
    return (
        <div className="w-screen shadow py-4 flex content-center justify-center">
            <div className="flex content-center justify-center">
                <div className="font-bold text-2xl">StudyTube</div>
                <input className="mx-32 shadow appearance-none border rounded w-200 text-gray-700 px-4 py-2 leading-tight focus:outline-none " type="text" placeholder="Search" />
                <div className="ml-64 h-10 w-10 cursor-pointer">
                    <img src={profilePic} className="object-fit h-10 w-10 rounded-full" alt=""/>
                </div>
            </div>
        </div>
    )
}