
import React, { useState } from 'react';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const addMessage = (text, isUser = true) => {
    const newMessage = { text, isUser };
    setMessages([...messages, newMessage]);
  };

  function handleInputChange(e) {
    setUserInput(e.target.value);
  }

  const handleSendMessage = () => {
    if (userInput.trim() !== '') {
      // Add the user's message to the chat history
      addMessage(userInput, true);
  
      // Simulate a bot response (you can replace this with actual bot logic)
      addMessage('Placeholder Bot Response', false);
  
      // Clear the input field
      setUserInput('');
    }
  };
  

  return (
    <div>
      <div className="chat-window">
        {/* Map over the messages array and create an HTML element for each message */}
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.isUser ? 'user-message' : 'bot-message'}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={userInput}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatComponent;
