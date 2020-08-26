import React from 'react';

const QuItem = ({ qVideo, handleQuVideoSelect }) => {

    return (
        <div className="q-item" onClick={ () => handleQuVideoSelect(qVideo) }>
            <img className="q-item-image-container" src={qVideo.snippet.thumbnails.default.url} alt={qVideo.snippet.description} />
            <div className="q-item-content">
                <div className="q-item-header">{qVideo.snippet.title}</div>
            </div>
        </div>
    );
}

export default QuItem;