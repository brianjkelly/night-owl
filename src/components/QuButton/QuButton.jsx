import React from 'react';

const QuButton = ({ video, selectedVideo }) => {    
    if (video === selectedVideo) {
        return (
            <div className="QuButton">
                <form className="QuButton-form" onSubmit="">
                    <button type="submit">Add to Queue</button>
                </form>
            </div>
        );
    } else {
        return null;
    }
}


export default QuButton;