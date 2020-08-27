import React from 'react';

const QuPlayButton = ({ handleQuPlayBtn }) => {
    return (
        <div className="QuPlayButton">
            <form className="QuPlayButton-form" onSubmit={handleQuPlayBtn}>
                <button type="submit">Play Video</button>
            </form>
        </div>
    );
}

export default QuPlayButton;