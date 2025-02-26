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

    const observer = new MutationObserver(() => {
      // 🔹 Cambiar el enlace "Powered by AnythingLLM"
      const sponsorLink = document.querySelector('a[href="https://anythingllm.com"]');
      if (sponsorLink) {
        sponsorLink.innerHTML = "Powered by Visionarius Agency";
        sponsorLink.href = "https://www.visionariusagency.com/";
        sponsorLink.style.color = "#3498db";
        sponsorLink.style.fontWeight = "bold";
      }

      // 🔹 Cambiar el icono del asistente en cada mensaje
      /*const assistantIcons = document.querySelectorAll('img[alt="Anything LLM Icon"]');
      assistantIcons.forEach(icon => {
        icon.src = "/LogoUserChat.png";
        icon.style.width = "40px";
        icon.style.height = "40px";
      });


        // 🔹 Cambiar el icono del asistente en cada mensaje nuevo
    document.querySelectorAll('img[alt="Anything LLM Icon"]').forEach(icon => {
      if (!icon.dataset.modified) { // Para evitar cambios repetidos
        icon.src = "/LogoUserChat.png";
        icon.style.width = "40px";
        icon.style.height = "40px";
        icon.dataset.modified = "true"; // Marcamos que ya ha sido cambiado
      }
    })*/


      // 🔹 Cambiar el nombre del asistente en cada mensaje recibido
      const assistantNames = document.querySelectorAll("div.allm-text-left");
      assistantNames.forEach(name => {
        if (name.innerText === "Anything LLM Chat Assistant") {
          name.innerText = "UControl AI Assistant"; // Cambia el nombre dinámicamente
        }
      });
    });

    // 📌 Observamos cambios en el cuerpo de la página para modificar cada mensaje nuevo
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.removeChild(script);
      observer.disconnect();
    };
  }, []);

  return null;
};

export default ChatWidget;
