import React from 'react';

const RemoveButton = ({ handleRemoveFromQ }) => {
    return (
        <div className="RemoveButton">
            <form className="RemoveButton-form" onSubmit={handleRemoveFromQ}>
                <button type="submit">Remove from Queue</button>
            </form>
        </div>
    );
}

export default RemoveButton;