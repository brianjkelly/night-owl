import React from 'react';
import PlayButton from '../PlayButton/PlayButton';
import QuButton from '../QuButton/QuButton';
import RemoveButton from '../RemoveButton/RemoveButton';
import './ButtonDisplay.css'

const ButtonDisplay = (props) => {

    return (

        <div className="all-buttons">
            <div className="play-btn">
                <PlayButton 
                    handlePlayBtn={props.handlePlayBtn}
                />
            </div>
            <div className="add-btn">
                <QuButton 
                    handleAddToQ={props.handleAddToQ}
                />
            </div>
            <div className="rmv-btn">
                <RemoveButton 
                    handleRemoveFromQ={props.handleRemoveFromQ} 
                />
            </div>
        </div>

    );
}

export default ButtonDisplay;