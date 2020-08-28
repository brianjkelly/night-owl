import React from 'react';

const MessageBox = (props) => {
    return (
        <div>
            <div>Users Online: &nbsp;
                {props.userList.map((user, idx) => {
                user += ' ';
                return user;
            })}
            </div>
            <div>
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