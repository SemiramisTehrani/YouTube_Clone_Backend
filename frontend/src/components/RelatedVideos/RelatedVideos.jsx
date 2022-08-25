import React, { useEffect, useState } from "react";
import axios from "axios";


import {KEY} from "../../localKey";

import "./RelatedVideos.css";

const RelatedVideos = (props) => {
  const [listRelatedVideos, setListRelatedVideos] = useState([]);

  async function getRelatedVideos() {
    console.log("Called getRelatedVideos successfully");
    if (props.videoId) {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoId}&type=video&key=${KEY.googleAPIkey}&part=snippet`
      );
      setListRelatedVideos(response.data.items);
      console.log("related video list", response.data.items);
    } else {
      console.log("No current video ID");
    }
  }

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getRelatedVideos();
    }
    return () => (mounted = false);
  }, [props.videoId]);

  function handleSubmit(videoId) {
    console.log(videoId);
    props.setVideoId(videoId);
  }

  return (
    <div>
      <ul>
        {listRelatedVideos.map((video, index) => {
          if (video.snippet) {
            return (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => handleSubmit(video.id.videoId)}
                >
                  <img
                    src={video.snippet.thumbnails.default.url}
                    alt="thumbnails"
                  ></img>
                </button>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default RelatedVideos;
