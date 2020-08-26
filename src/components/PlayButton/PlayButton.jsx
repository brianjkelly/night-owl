import React from 'react';

const PlayButton = ({ video, selectedVideo, handlePlayBtn }) => {
    if (video === selectedVideo) {
        return (
            <div className="PlayButton">
                <form className="PlayButton-form" onSubmit={handlePlayBtn}>
                    <button type="submit">Play Video</button>
                </form>
            </div>
        );
    } else {
        return null;
    }
}

export default PlayButton;