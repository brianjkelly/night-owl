import React, { useEffect, useState } from 'react';
import './ChatBox.css'
import MessageBox from '../MessageBox/MessageBox';
import TextBox from '../TextBox/TextBox';



const ChatRoom = (props) => {
    const [user, setUser] = useState('');
    const [msg, setMsg] = useState('');
    const [msgHistory, setHistory] = useState([]);
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        setUser(prevUser => prevUser = props.user);

        props.socket.on('chat message', ({ user, msg }) => {
            setHistory(msgHistory => [...msgHistory, user + ": " + msg]);
        });

        props.socket.on('update-user-list', users => {
            setUserList(users);
        });

        props.socket.emit('register-user', user);

    }, [props.roomId]);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(user + " " + e.target[0].value);
        props.socket.emit('chat message', { user, msg: e.target[0].value }, () => setMsg(''));
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