import React from 'react';

const RemoveButton = ({ idx, qVideo, quSelectedVideo, handleRemoveFromQ }) => {
    if (qVideo === quSelectedVideo) {
        return (
            <div className="RemoveButton">
                <form className="RemoveButton-form" onSubmit={handleRemoveFromQ}>
                    <button type="submit" value={idx}>Remove from Queue</button>
                </form>
            </div>
        );
    } else {
        return null
    }
}

export default RemoveButton;