import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import './WhatsAppIcon.css';

const WhatsAppIcon: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const handleWhatsAppClick = () => {
    setShowChat(!showChat);
  };

  const startChat = () => {
    window.open('https://wa.me/+919390649113', '_blank');
  };

  return (
    <>
      <div 
        className={`whatsapp-icon ${hasAnimated ? 'animate-fly-fall' : ''}`}
        onClick={handleWhatsAppClick}
        title="Contact us on WhatsApp"
      >
        <Phone size={24} />
      </div>

      {showChat && (
        <div className="whatsapp-chat-popup">
          <div className="chat-header">
            <div className="welcome-text">Welcome!</div>
            <button className="close-button" onClick={() => setShowChat(false)}>×</button>
          </div>
          <div className="chat-messages">
            <div className="message bot">
              Hello, how can we help you?
            </div>
            <div className="message user">
              Hi! I am interested to take admission in SVIPS. Can you guide me through admission process?
            </div>
          </div>
          <button className="start-chat-button" onClick={startChat}>
            Start Chat on WhatsApp
          </button>
        </div>
      )}
    </>
  );
};

export default WhatsAppIcon;