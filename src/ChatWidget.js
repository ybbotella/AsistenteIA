import { useEffect } from 'react';

const ChatWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://anythingllm-docker-production-3b45.up.railway.app/api/embed/anythingllm-chat-widget.min.js";
    script.setAttribute("data-embed-id", "a86ea8d8-8a30-4838-90ba-682d0b71ccfb");
    script.setAttribute("data-base-api-url", "https://anythingllm-docker-production-3b45.up.railway.app/api/embed");
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ChatWidget;


