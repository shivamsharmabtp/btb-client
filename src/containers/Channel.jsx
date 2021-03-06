import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { BASE_PATH, getImgFromThumbnail, linkify } from '../constants';
import Header from '../components/Header';


export default () => {
    const [channels, setChannels] = useState([]);
    const [channelUrl, setChannelUrl] = useState('');
    const [done, setDone] = useState(false);

    useEffect(() => {
        fetch(`${BASE_PATH}/channel/all`)
            .then((response) => response.json())
            .then((data) => {
                setChannels(data);
            })
    }, []);

    function saveChannel(){
        fetch(`${BASE_PATH}/channel/add/request`, {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                channelUrl
            })
        }).then(() => {setDone(true)})
    }

    return (
        <>
        <Header />
        <div className="mt-4 mx-4">
        <h2 className="mb-2">Add Channel</h2>
            <div className="mb-10 flex flex-col">
                {done ? (<div>ThankYou.! We have recieved your request.</div>) : (
                    <>
                        <div className="font-light text-sm mb-2">Paste the Channel URL you want to add here.</div>
                        <TextField id="standard-search" className="w-64" label="Channel URL" type="search" onChange={(e) => setChannelUrl(e.target.value)} />
                        <div className="h-2 w-full"></div>
                        <Button color="primary" style={{outline:'none'}} className="w-16 mt-2" onClick={() => saveChannel()}>Save</Button>
                    </>
                )}
            </div>
        <h2 className="mb-8">All Channels</h2>
        <div className="text-xs font-light mb-4"><i>Videos from these channels are fetched every 5 mins.</i></div>
        {channels.map(channel => {
            return (
                <div className="flex mb-4 border-b pb-2">
                    <div className="mr-2 rounded-full">
                        <img src={getImgFromThumbnail(channel.thumbnails, 'min')} className="object-fit rounded-full" alt=""/>
                    </div>
                    <div className="w-11/12 ">
                        <a href={`/search?query=channel:${channel.title}`}>
                        {/* <a href={`https://www.youtube.com/channel/${channel.channelId}`}> */}
                            <div className="mt-1 text-sm">{channel.title}</div>
                        </a>
                        <div className="mt-1 font-light text-sm" dangerouslySetInnerHTML={{__html : linkify(channel.description)}}></div>
                    </div>
                </div>
            )
        })}
        </div>
        </>
        
    )
}