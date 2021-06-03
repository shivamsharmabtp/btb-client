import React from 'react';

import Header from './../components/Header';
import ReactHlsPlayer from 'react-hls-player';

export default () => {
    return (
        <>
        <Header />
        <ReactHlsPlayer
            src="https://manifest.googlevideo.com/api/manifest/hls_playlist/expire/1622737171/ei/s6y4YL7yBvTdjuMPqsu7sAw/ip/139.59.19.155/id/YGzTRTWthfk.1/itag/95/source/yt_live_broadcast/requiressl/yes/ratebypass/yes/live/1/sgoap/gir%3Dyes%3Bitag%3D140/sgovp/gir%3Dyes%3Bitag%3D136/hls_chunk_host/r2---sn-h5576nee.googlevideo.com/playlist_duration/30/manifest_duration/30/vprv/1/playlist_type/DVR/mh/IM/mm/44/mn/sn-h5576nee/ms/lva/mv/u/mvi/2/pl/24/dover/11/keepalive/yes/fexp/24001373,24007246/mt/1622715006/sparams/expire,ei,ip,id,itag,source,requiressl,ratebypass,live,sgoap,sgovp,playlist_duration,manifest_duration,vprv,playlist_type/sig/AOq0QJ8wRgIhAOonGdKy6aYPIOffx9LL98288rlOEK1pCeHEMdSShpqUAiEAhu44deNrbfXU2Gslt8Jem8HiO121u3Tflr32OeoFPtw%3D/lsparams/hls_chunk_host,mh,mm,mn,ms,mv,mvi,pl/lsig/AG3C_xAwRQIgcd9MMvKKXJBiVta7_yya1n_gyvN_9x9KI-OVZAYvYHwCIQDrF2k2o_QJ1qcUWtFbzu_zE9ktYYQkmJI2at5mfD0c5Q%3D%3D/playlist/index.m3u8"
            autoPlay={false}
            controls={true}
            width="100%"
            height="auto"
        />
        </>
    )
}