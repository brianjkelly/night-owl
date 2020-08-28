import React from 'react';
import './MessageBox.css';

const MessageBox = (props) => {
    return (
        <div className="message-box">
            <div className="user-display">
                Users Online: &nbsp;
                    {props.userList.map((user, idx) => {
                    user += ' ';
                    return user;
                })}
                
            </div>
            <div className="chat-messages">
                
                    {props.msgHistory.map((msg, idx) => (
                        <div key={idx}>
                            {msg}
                        </div>
                    ))}
                
            </div>
        </div>
    );
};

export default MessageBox;