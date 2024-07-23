import React, { useState } from 'react';

const LiveChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    setMessages([...messages, { user: 'me', text: input }]);
    setInput('');
    // Add bot response
    setMessages([...messages, { user: 'me', text: input }, { user: 'bot', text: 'How can I help you?' }]);
  };

  return (
    <div className="live-chat">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default LiveChat;
