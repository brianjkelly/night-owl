import React from 'react';

const RemoveButton = ({ handleRemoveFromQ }) => {
    return (
        <div className="RemoveButton">
            <form className="RemoveButton-form" onSubmit={handleRemoveFromQ}>
                <button className="vid-ctrl-btn-rmv" type="submit">-</button>
            </form>
        </div>
    );
}

export default RemoveButton;