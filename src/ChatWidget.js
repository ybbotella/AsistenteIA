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

    // 🔹 Función para cambiar el enlace de "Powered by AnythingLLM"
    const updateSponsorLink = () => {
      const sponsorLink = document.querySelector('a[href="https://anythingllm.com"]');
      if (sponsorLink && !sponsorLink.dataset.modified) {
        sponsorLink.innerHTML = "Powered by Visionarius Agency";
        sponsorLink.href = "https://visionariusagency.com";
        sponsorLink.style.color = "#3498db";
        sponsorLink.style.fontWeight = "bold";
        sponsorLink.dataset.modified = "true"; // Marca como modificado
      }
    };

    // 🔹 Función para forzar la actualización de todos los iconos
    const updateIcons = () => {
      document.querySelectorAll('img#anything-llm-icon, img[alt="Anything LLM Icon"]').forEach(icon => {
        if (!icon.dataset.modified) {
          icon.src = "/LogoUserChat.png";
          icon.style.width = "40px";
          icon.style.height = "40px";
          icon.dataset.modified = "true";
        }
      });
    };

    // 🔹 Función para cambiar el icono en el estado de "escribiendo..."
    const updateTypingIndicator = () => {
      document.querySelectorAll("img").forEach(img => {
        if (img.src.includes("anything-llm-chat-widget")) {
          img.src = "/LogoUserChat.png";
          img.style.width = "40px";
          img.style.height = "40px";
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

    // 🔹 Observador para detectar nuevos mensajes y cambios en la UI en tiempo real
    const observer = new MutationObserver(() => {
      updateSponsorLink(); // 🔄 Modifica el enlace del footer
      updateIcons(); // 🔄 Cambia el icono en cada mensaje nuevo
      updateTypingIndicator(); // 🔄 Cambia el icono mientras el bot escribe
      updateAssistantName(); // 🔄 Cambia el nombre en cada mensaje nuevo
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
