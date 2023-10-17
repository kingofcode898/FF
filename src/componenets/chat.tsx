import React, { useState } from 'react';
import OpenAI from 'openai';

interface Props {
  level: string;
  language: string;
}

const ChatComponent: React.FC<Props> = (props: Props) => {
  
  const openai = new OpenAI(
  {
  apiKey: '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',
  dangerouslyAllowBrowser: true
});
  
  let level = props.level
  let language = props.language
  const [messages, setMessages] = useState<{ text: any; isUser: boolean; timestamp: number }[]>([]);
  const [userInput, setUserInput] = useState('');

  const addMessage = (text: string, isUser = true) => {
    const newMessage = { text, isUser, timestamp: Date.now() };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleBotMessage = async (prompt: string, level: string, language: string) => { 

    // Make an API call to generate the bot's response
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: `You are a language tutor bot. Teach in ${language}. You will first ask in English what the topic of the practice conversation will be. Then you will have a conversation based on the topic using ${level} ${language}.` },
        { role: 'user', content: prompt }]
    });

    // Extract the bot's response
    const botResponse = response.choices[0].message.content;
    
    return botResponse;
  };

  const handleSendMessage = async () => {
    if (userInput.trim() !== '') {
      addMessage(userInput, true);
      
      const botResponse = await handleBotMessage(userInput, level, language);
      
      if (botResponse !== null) { 
        addMessage(botResponse, false);
      }
      setUserInput('');
    }
  };

  

  return (
    <div>
      <div className="chat-window">
        {messages.map((message) => (
          <div
            key={message.timestamp}
            className={message.isUser ? 'user-message' : 'bot-message'}
          >
            <p className={message.isUser ? 'user-text': 'bot-text'}>{message.text}</p>
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

