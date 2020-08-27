import React from 'react';

const QuButton = ({ handleAddToQ }) => {    
        return (
            <div className="QuButton">
                <form className="QuButton-form" onSubmit={handleAddToQ}>
                    <button type="submit">Add to Queue</button>
                </form>
            </div>
        );  
}

export default QuButton;