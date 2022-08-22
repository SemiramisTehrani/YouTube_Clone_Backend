import React from 'react';

const VideoPlayer = (props) => {
    return ( 
        <div>
            <iframe title="main-player" id="ytplayer" type="text/html" width="640" height="360"
            src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1`}
            frameBorder="0"></iframe>
        </div>
     );
}
 
export default VideoPlayer;