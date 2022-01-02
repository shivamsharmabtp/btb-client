import React, { useEffect, useState } from "react";
import * as queryString from "query-string";
import WatchPrimary from "./../components/Video";
import WatchSecondary from "./../components/Recommended";
import moment from "moment";
import Button from "@mui/material/Button";

// import CommentGrid from './../components/CommentGrid';
// import Skeleton from '@material-ui/lab/Skeleton';

import Header from "./../components/Header";
import constants, { getImgFromThumbnail, linkify } from "../constants";

export default (props) => {
  const queryParams = queryString.parse(props.location.search);
  const [details, setDetails] = useState({ loaded: false });

  function loadDetails() {
    fetch(`${constants.BASE_PATH()}/video/details/${queryParams.v}`)
      .then((response) => response.json())
      .then((data) => {
        setDetails({ ...data, loaded: true });
        if (data.title) document.title = data.title + " - ReactionTube";
      });
  }
  function updatePlayerUrl(newUrl) {
    setDetails({ ...details, videoUrl: newUrl });
  }
  useEffect(() => {
    loadDetails();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Header />
      <div className="w-full md:h-8"></div>
      <div className="md:flex justify-around">
        <div className="md:w-4/6 h-auto mt-4">
          <WatchPrimary
            videoUrl={details.videoUrl}
            controls={1}
            videoUrlFetched={details.videoUrlFetched}
            videoId={queryParams.v}
            loaded={details.loaded}
            details={details}
          />
          {details.loaded && details.title ? (
            <div className="mx-3 md:mx-0">
              <div className="text-lg	font-sans my-3">{details.title}</div>
              <div className="h-4 mt-1 font-light text-sm mb-3">
                {moment(details.publishedAt).format("MMM Do YYYY")}
              </div>
              <hr></hr>
              <a href={`/search?query=channel:${details.channelTitle}`}>
                <div className="flex items-center my-3">
                  <div className="h-12 w-12 mr-2 rounded-full">
                    <img
                      src={getImgFromThumbnail(
                        details.channelInfo.thumbnails,
                        "min"
                      )}
                      className="object-fit rounded-full"
                      alt=""
                    />
                  </div>
                  <div>{details.channelTitle}</div>
                </div>
              </a>
              <div
                className="font-light text-sm"
                dangerouslySetInnerHTML={{
                  __html: linkify(details.description),
                }}
              ></div>
              <hr className="my-4"></hr>
              {details.loaded ? (
                details.videoUrlFetched ? (
                  <div>
                    <h4>All Formats</h4>
                    {details.videoFormats.map((detail) => (
                      <div className="m-1 inline-block">
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => updatePlayerUrl(detail.url)}
                        >
                          {detail.format}
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
            </div>
          ) : (
            <></>
          )}
          <div className="ml-2">
            {/* <CommentGrid videoId={queryParams.v}></CommentGrid> */}
          </div>
        </div>
        <div className="md:w-1/4">
          <WatchSecondary videoId={queryParams.v} />
        </div>
      </div>
    </>
  );
};
