import React from 'react';

const QuButton = ({ handleAddToQ }) => {    
        return (
            <div className="QuButton">
                <form className="QuButton-form" onSubmit={handleAddToQ}>
                    <button className="vid-ctrl-btn-add" type="submit">+</button>
                </form>
            </div>
        );  
}

export default QuButton;