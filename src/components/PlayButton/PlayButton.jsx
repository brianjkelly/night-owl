import React from 'react';

const PlayButton = ({ handlePlayBtn }) => {
    return (
        <div className="PlayButton">
            <form className="PlayButton-form" onSubmit={handlePlayBtn}>
                <button type="submit">Play Video</button>
            </form>
        </div>
    );
}

export default PlayButton;