import React from 'react';
import './App.css';
import ChatWidget from './ChatWidget';  // <-- Importa el widget

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Nuevo logo de Visionarius Agency */}
        <img src="/LogoVisionarius.png" className="App-logo" alt="Visionarius Agency Logo" />
      </header>
      <p>
          El futuro es nuestro
        </p>
        <a
          className="App-link"
          href="https://visionariusagency.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visionarius Agency
        </a>
      {/* Aquí se monta el widget de Anything LLM */}
      <ChatWidget />
    </div>
  );
}

export default App;
