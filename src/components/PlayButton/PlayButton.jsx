import React from 'react';

const PlayButton = ({ video, selectedVideo }) => {
    if (video === selectedVideo) {
        return (
            <div className="PlayButton">
                <form className="PlayButton-form" onSubmit="">
                    <button type="submit">Play Video</button>
                </form>
            </div>
        );
    } else {
        return null;
    }
}

export default PlayButton;