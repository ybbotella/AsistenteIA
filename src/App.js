function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Nuevo logo de Visionarius Agency */}
        <img src="/LogoVisionarius.png" className="App-logo" alt="Visionarius Agency Logo" />
      
        <p>El futuro es nuestro</p>
        
        <a
          className="App-link"
          href="https://www.visionariusagency.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visionarius Agency
        </a>
      </header> {/* 🔹 Aquí cerramos bien el header */}

      {/* Aquí se monta el widget de Anything LLM */}
      <ChatWidget />
    </div>
  );
}
