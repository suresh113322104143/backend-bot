import React, { useState } from 'react';
import axios from 'axios';

function ChatInterface() {
  const [userMessage, setUserMessage] = useState('');
  const [botResponse, setBotResponse] = useState('');

  const handleSend = async () => {
    try {
      const response = await axios.post('https://your-backend-url.onrender.com/api/chat', {
        message: userMessage,
      });
      setBotResponse(response.data.response);
    } catch (error) {
      setBotResponse('Error: Unable to connect to the server.');
    }
  };

  return (
    <div className="chat-interface">
      <textarea
        placeholder="Type your message here..."
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
      ></textarea>
      <button onClick={handleSend}>Send</button>
      <div className="bot-response">
        <strong>DotBot:</strong> {botResponse}
      </div>
    </div>
  );
}

export default ChatInterface;
