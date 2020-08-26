import React from 'react';

const QuItem = ({ qVideo, handleQuVideoSelect }) => {

    return (
        <div className="q-video-item" onClick={ () => handleQuVideoSelect(qVideo) }>
            <div className="q-video-image-container">
                <img className="q-video-image" src={qVideo.snippet.thumbnails.default.url} alt={qVideo.snippet.description} />
                <div className="q-time-label">
                    <span>05:22</span>
                </div>
            </div>
            <div className="q-video-info">
                <div className="semi-bold show-max-two-lines">{qVideo.snippet.title}</div>
                <div className="q-video-preview-container">
                    <div className="q-channel-title">{qVideo.snippet.channelTitle}</div>
                    <div><span>2.1M views • 2 days ago</span></div>
                </div>
            </div>
        </div>
    );
}

export default QuItem;