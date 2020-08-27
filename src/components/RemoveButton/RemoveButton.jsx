import React from 'react';

const RemoveButton = ({ idx, handleRemoveFromQ }) => {
    return (
        <div className="RemoveButton">
            <form className="RemoveButton-form" onSubmit={handleRemoveFromQ}>
                <button type="submit" value={idx}>Remove from Queue</button>
            </form>
        </div>
    );
}

export default RemoveButton;