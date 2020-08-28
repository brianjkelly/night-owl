import React from 'react';

const PlayButton = ({ handlePlayBtn }) => {
    return (
        <div className="PlayButton">
            <form className="PlayButton-form" onSubmit={handlePlayBtn}>
                <button className="vid-ctrl-btn" type="submit">▶️</button>
            </form>
        </div>
    );
}

export default PlayButton;