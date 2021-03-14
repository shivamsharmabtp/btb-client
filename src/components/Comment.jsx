import React from 'react';
import moment from 'moment';

export default (props) => {
    return (
        <>
            <div className="flex mt-4 " >
                <div width={35} className="mr-2">
                    <div height={35} width={35}>
                        <img src={props.data.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" className="object-fit rounded-full"/>
                    </div>
                </div>
                <div className="w-10/12">
                    <div className="flex">
                        <a href={props.data.snippet.topLevelComment.snippet.authorChannelUrl} className="mr-2">
                            {props.data.snippet.topLevelComment.snippet.authorDisplayName}
                        </a>
                        {moment(props.data.snippet.topLevelComment.snippet.publishedAt).fromNow()}
                    </div>
                    <div dangerouslySetInnerHTML={{__html : props.data.snippet.topLevelComment.snippet.textDisplay}} >
                    </div>
                </div>
            </div>
        </>
    )
}