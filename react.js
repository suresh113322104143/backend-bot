import React from 'react';
import ChatInterface from './components/ChatInterface';
import VoiceSearch from './components/VoiceSearch';
import GestureSearch from './components/GestureSearch';
import ImageSearch from './components/ImageSearch';

function App() {
  return (
    <div className="app">
      <h1>DotBot: Your AI Assistant</h1>
      <div className="features">
        <ChatInterface />
        <VoiceSearch />
        <GestureSearch />
        <ImageSearch />
      </div>
    </div>
  );
}

export default App;
