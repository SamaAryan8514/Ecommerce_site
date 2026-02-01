import { useEffect, useRef } from 'react'
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';

function ChatMessages({ chatMessages }) {
    const chatMessagesRef = useRef(null);
    useEffect(() => {
        const containerElem = chatMessagesRef.current;/* Here, "current()" is used to access the HTML element saved as a
                reference using the "useRef()" Hook of react in line '154'*/

        if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
        }
    }, [chatMessages]);
    return (
        <div className="chat-messages-container" ref={chatMessagesRef}>
            {chatMessages.map((chatMessage) => {
                return (
                    <ChatMessage
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        time={chatMessage.time}
                        id={chatMessage.id}
                    />
                );
            })}
        </div>
    );
}

export default ChatMessages;