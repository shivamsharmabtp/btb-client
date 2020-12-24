import React from 'react';
import moment from 'moment';
import { Skeleton } from '@material-ui/lab';

export default (props) => {
    const style = {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 2, /* number of lines to show */
        '-webkit-box-orient': 'vertical'
    }
    function getImgFromThumbnail(thumbnails, size){
        let pics;
        if(thumbnails && thumbnails.length){
            pics = thumbnails[0];
        }else{
            pics = thumbnails
        }
        if(size === 'min'){
            return pics.default.url
        }else if(size === 'medium'){
            let pic = pics.medium;
            if(pic)
                return pic.url;
            else{
                pic = pics.standard;
                return pic.url
            }
        }
        
    }
    return (
        <div className="h-64 w-3/12 mb-12 flex items-center flex-col" style={{minWidth : '370px', minHeight:'300px'}}>
            <div className="h-48" style={{width:'360px', minHeight:'200px'}}>
            {/* <div className="h-48 md:videoPreviewBox w-full"> */}
                { props.loading ?
                    (<Skeleton variant="rect" width={370} height={300} />) :
                (
                    <a href={`/watch?v=${props.data.videoId}`}>
                        <img src={getImgFromThumbnail(props.data.thumbnails, 'medium')} className="object-fit h-full w-full" alt=""/>
                    </a>
                )
                }
            </div>
            <div className="h-16 mt-2" style={{width:'360px', minHeight:'100px'}}>
            {/* <div className="h-16 mt-2 w-full md:videoPreviewBox"> */}
                <div className="h-12 flex">
                    <div className="h-8 w-1/12 mr-2 rounded-full">
                        {props.loading ?
                            (<Skeleton variant="circle" width={35} height={35}/>) :
                            (<img src={getImgFromThumbnail(props.data.channelInfo.thumbnails, 'min')} className="object-fit rounded-full" alt=""/>)
                        }
                    </div>
                    <div className="w-11/12 h-12">
                        {props.loading ?
                            (<Skeleton />) :
                            (<div className="text-base" style={style}>{props.loading ? (<Skeleton />) : props.data.title}</div>)
                        }
                        {props.loading ?
                            (<Skeleton />) :
                            (<div className="h-4 mt-1 font-light text-sm">{props.data.channelTitle}</div>)
                        }
                        {props.loading ?
                            (<Skeleton />) :
                            (<div className="h-4 mt-1 font-light text-sm">Published {moment(props.data.publishedAt).fromNow()}</div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}