import React, { useEffect, useState } from 'react';
import { useSocket } from '../context/SocketContext';
import { useSelector } from 'react-redux';

const ChatBox = ({ orderId }) => {
    const socket = useSocket();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (socket) {
            socket.emit('join', { userId: userInfo._id, orderId });

            socket.on('message', (message) => {
                setMessages((prevMessages) => [...prevMessages, message]);
            });
        }
    }, [socket, orderId, userInfo._id]);

    const sendMessage = () => {
        const newMessage = {
            userId: userInfo._id,
            orderId,
            message,
            user: userInfo.name,
            timestamp: new Date().toISOString(),
        };
        socket.emit('sendMessage', newMessage);
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setMessage('');
    };

    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.user}</strong>: {msg.message}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default ChatBox;
