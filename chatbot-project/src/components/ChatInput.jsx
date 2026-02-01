import dayjs from 'dayjs';
import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';
import LoadingSpinner from '../assets/loading-spinner.gif';
export function ChatInput({ chatMessages, setChatMessages }) {
    const [inputText, setInputText] = useState('');
    function saveInputText(event) {
        setInputText(event.target.value);
    }
    function send(event) {
        const Key = event.key;
        if (Key === 'Enter') {
            sendMessage();
        }
        if (Key === 'Escape') {
            setInputText('');
        }
    }
    async function sendMessage() {
        setInputText('');
        const newChatResponse =
            [
                ...chatMessages,
                {
                    message: inputText,
                    sender: "user",
                    id: crypto.randomUUID(),
                    time: dayjs().valueOf()
                }
            ];

        setChatMessages(newChatResponse);
        setChatMessages([
            ...newChatResponse,
            {
                message: <img src={LoadingSpinner} className="image" />,
                sender: "robot",
                id: crypto.randomUUID()
            }
        ]);
        const response = await Chatbot.getResponseAsync(inputText);
        setChatMessages([
            ...newChatResponse,
            {
                message: response,
                sender: "robot",
                id: crypto.randomUUID(),
                time: dayjs().valueOf()
            }
        ]);

        setInputText('');// This line states the way to use  controlled input(along with line 50)
    }
    function clearMessages() {
        setChatMessages([]);
    }
    return (
        <div className="chat-input-container">
            <input className="chat-input" placeholder="Send a message to the chatbot" size="30" onChange={saveInputText} value={inputText} onKeyDown={send}/* The "value" attribute  here gives emphasis of using the concept of controlled input */ />
            <button onClick={sendMessage} className="send-button">Send</button>
            <button onClick={clearMessages} className="clear-button">Clear</button>
        </div>
    );
}