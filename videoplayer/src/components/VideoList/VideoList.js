import React from 'react';
import VideoItem from './VideoItem';

// functional component
/**
 * Destructuring object works as follows:
 *      Object x ={
 *          Test: '',
 *          name: '',
 *      };
 *      const {Test, name} = x; // this will make 2 variables containing the same data thats in the object
 */
const VideoList = ({videos, onSelectOfVideo}) => {
    // props.videos
    const renderedList = videos.map((video) =>{
        // add some props
        return (
            <VideoItem key={video.id.videoId} onVideoSelect={onSelectOfVideo} video={video} />
        );
    });

    return <div className="ui relaxed divided list">{renderedList}</div>;
}

export default VideoList;