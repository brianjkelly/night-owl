import React from 'react';

const QuButton = ({ video, selectedVideo, handleAddToQ }) => {    
    if (video === selectedVideo) {
        return (
            <div className="QuButton">
                <form className="QuButton-form" onSubmit={handleAddToQ}>
                    <button type="submit">Add to Queue</button>
                </form>
            </div>
        );
    } else {
        return null;
    }
}


export default QuButton;