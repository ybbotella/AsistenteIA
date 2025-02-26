import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWidget from './ChatWidget';  // <-- Importa tu componente

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Contenido original */}
        <img src="https://raw.githubusercontent.com/ybbotella/AsistenteIA/refs/heads/main/public/VisionariusAgencyFondo.png" className="App-logo" alt="logo" />
        
      
      </header>

      {/* Aquí se monta el widget de Anything LLM */}
      <ChatWidget />
    </div>
  );
}

export default App;
