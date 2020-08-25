import React from 'react';

const MessageBox = (props) => {
    return (
        <div>
            {props.msgHistory.map((msg, idx) => (
                <div key={idx}>
                    {msg}
                </div>
            ))}
        </div>
    );
};

export default MessageBox;