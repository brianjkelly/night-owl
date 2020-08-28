import React from 'react';
import './TextBox.css';

const TextBox = (props) => {
    return (
        <div className="text-box-d">
            <form onSubmit={e => props.sendMessage(e)}>
                <input
                    type="text"
                    placeholder="Write message"
                    value={props.msg}
                    onChange={({ target: { value } }) => {
                        props.setMsg(value);
                    }} />
                <button type="submit" name="Submit">Send Message</button>
            </form>
        </div>
    );
};

export default TextBox;