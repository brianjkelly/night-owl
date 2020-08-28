import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

import MessageBox from '../MessageBox/MessageBox';
import TextBox from '../TextBox/TextBox';

let socket;

const ChatRoom = (props) => {
    const [msg, setMsg] = useState('');
    const [msgHistory, setHistory] = useState([]);
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        const user = props.user;
        const room = props.roomId;
        socket = io('localhost:3001');
        socket.emit('join', { user, room }, error => {
            console.log(error);
        });
        socket.on('chat message', msg => {
            setHistory(msgHistory => [...msgHistory, user + ": " + msg]);
        });
        socket.on('update-user-list', users => {
            setUserList(users);
        });
        socket.emit('register-user', user);

    }, [props.roomId]);



    const sendMessage = (e) => {
        e.preventDefault();
        socket.emit('chat message', e.target[0].value, () => setMsg(''));
    }

    return (
        <div className="chat-box">
            <div className="message-box">
                <MessageBox
                    userList={userList}
                    msgHistory={msgHistory}
                />
            </div>
            <div className="text-box">
                <TextBox
                    msg={msg}
                    setMsg={setMsg}
                    sendMessage={sendMessage}
                />
            </div>
        </div >
    );
};

export default ChatRoom;