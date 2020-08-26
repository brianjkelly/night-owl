import React from 'react';

const RemoveButton = ({ qVideo, quSelectedVideo, handleRemoveFromQ }) => {
    if (qVideo === quSelectedVideo) {
        return (
            <div className="RemoveButton">
                <form className="RemoveButton-form" onSubmit={handleRemoveFromQ}>
                    <button type="submit">Remove from Queue</button>
                </form>
            </div>
        );
    } else {
        return null
    }
}

export default RemoveButton;