import React, { useState } from 'react';

function VoiceSearch() {
  const [transcript, setTranscript] = useState('');

  const handleVoiceInput = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = (event) => {
      setTranscript(event.results[0][0].transcript);
    };

    recognition.onerror = (event) => {
      console.error('Voice recognition error:', event.error);
    };
  };

  return (
    <div className="voice-search">
      <button onClick={handleVoiceInput}>🎤 Start Voice Search</button>
      {transcript && <p>Transcript: {transcript}</p>}
    </div>
  );
}

export default VoiceSearch;
