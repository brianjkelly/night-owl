import React from 'react';

const RemoveButton = ({ idx, handleRemoveFromQ }) => {
    return (
        <div className="RemoveButton">
            <form className="RemoveButton-form" onSubmit={handleRemoveFromQ}>
                <button className="vid-ctrl-btn-rmv" value={idx} type="submit">-</button>
            </form>
        </div>
    );
}

export default RemoveButton;