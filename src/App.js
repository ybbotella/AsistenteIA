import React from 'react';
import logo from './visionariusAgencyFondo.png';
import './App.css';
import ChatWidget from './ChatWidget';  // <-- Importa tu componente

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Contenido original */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* Aquí se monta el widget de Anything LLM */}
      <ChatWidget />
    </div>
  );
}

export default App;
