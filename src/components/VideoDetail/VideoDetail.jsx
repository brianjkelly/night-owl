import React from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoInfobox from '../VideoInfobox/VideoInfobox';
import VideoMetadata from '../VideoMetadata/VideoMetadata';
import './VideoDetail.css'


const VideoDetail = ({ loadedVideo }) => {
    return (
        <div>
            {!loadedVideo ? (<div>No Video Loaded</div>) :
            (
                <div className = "video-grid">
                    <VideoPlayer
                        className = "video-player" 
                        loadedVideo = {loadedVideo}
                    />
                    <div className="v-info">
                        <VideoMetadata 
                            className="video-metadata" 
                            loadedVideo = {loadedVideo}
                            />
                        <VideoInfobox 
                            className = "video-infobox"
                            loadedVideo = {loadedVideo}
                            style={{width: '100%', height: '100px', background: '#BD10E0'}}
                        />
                    </div>
                </div>
          )}
        </div>
    );
}

export default VideoDetail;