import { useEffect } from 'react';

const ChatWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://anythingllm-docker-production-ade0.up.railway.app/embed/anythingllm-chat-widget.min.js";
    script.setAttribute("data-embed-id", "81ae18e4-5647-4a05-b424-a8f583d4822d");
    script.setAttribute("data-base-api-url", "https://anythingllm-docker-production-ade0.up.railway.app/api/embed");
    script.setAttribute("data-brand-image-url", "/UcontrolLogo.png");
    script.async = true;

    document.body.appendChild(script);

    // 🔹 Función para forzar la actualización del icono
    const updateIcons = () => {
      document.querySelectorAll('img#anything-llm-icon').forEach(icon => {
        if (!icon.dataset.modified) { // Evita cambios repetidos
          icon.src = "/LogoUserChat.png";
          icon.style.width = "40px";
          icon.style.height = "40px";
          icon.dataset.modified = "true"; // Marcamos como modificado
        }
      });
    };

    // 🔹 Función para cambiar el nombre del asistente en cada mensaje
    const updateAssistantName = () => {
      document.querySelectorAll("div.allm-text-left").forEach(name => {
        if (name.innerText.includes("Anything LLM Chat Assistant")) {
          name.innerText = "UControl AI Assistant";
        }
      });
    };

    // 🔹 Observador para detectar mensajes nuevos y aplicar cambios en tiempo real
    const observer = new MutationObserver(() => {
      updateIcons();  // Actualiza el icono en cada nuevo mensaje
      updateAssistantName();  // Cambia el nombre en cada mensaje nuevo
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.removeChild(script);
      observer.disconnect();
    };
  }, []);

  return null;
};

export default ChatWidget;
