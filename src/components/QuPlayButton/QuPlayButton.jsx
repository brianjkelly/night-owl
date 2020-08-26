import React from 'react';

const QuPlayButton = ({ qVideo, quSelectedVideo, handleQuPlayBtn }) => {
    if (qVideo === quSelectedVideo) {
        return (
            <div className="QuPlayButton">
                <form className="QuPlayButton-form" onSubmit={handleQuPlayBtn}>
                    <button type="submit">Play Video</button>
                </form>
            </div>
        );
    } else {
        return null;
    }
}

export default QuPlayButton;