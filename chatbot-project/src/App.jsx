import { useEffect, useState } from 'react'
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import { Chatbot } from 'supersimpledev';
import './App.css'



function App() {
  // const [chatMessages, setChatMessages] = React.useState([{
  //     message: "Hello Chatbot",
  //     sender: "user",
  //     id: "id1"
  // }, {
  //     message: "Hello! How can I help you",
  //     sender: "robot",
  //     id: "id2"
  // }, {
  //     message: "Can u get me Today's Date",
  //     sender: "user",
  //     id: "id3"
  // }, {
  //     message: "Today is 22 Nov",
  //     sender: "robot",
  //     id: "id4"
  // }
  // ]);
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);
  useEffect(() => {
    Chatbot.addResponses({
      'goodbye': 'Goodbye. Have a great and cheerful day mate!',
      'best superhero of all time': 'The incredible Hulk',
      'How many infinity stones are there overall': 'A total of 6',
      'test': 'Whatcha sayin nigger',
      'give me a unique id':
        function () {
          return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
        }
    });
  }, []);
  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);
  return (
    <div className="app-container">
      {chatMessages.length === 0 && (<p className="welcome-message">Welcome to the chatbot project! Send a message
        using the textbox below.</p>
      )}
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
    </div>
  );
}

export default App
