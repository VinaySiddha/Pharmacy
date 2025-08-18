import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import "./Chatbot.css"; // Import the CSS file for additional styles
import { findResponse } from './ChatbotData';

const ChatBot: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages([...messages, { user: userMessage, bot: "..." }]);
    setInput("");

    const botResponse = findResponse(userMessage);
    setMessages((prev) =>
      prev.map((msg, i) =>
        i === prev.length - 1 ? { ...msg, bot: botResponse } : msg
      )
    );
  };

  return (
    <>
      {/* Floating Button with Fly-Fall Animation */}
      <motion.div
        className={`fixed bottom-24 left-6 z-50 chatbot-icon ${
          hasAnimated ? "fly-fall" : ""
        }`}
        animate={{ scale: [1, 1.2, 1] }} // Animation to increase and decrease size
        transition={{ duration: 1.5, repeat: Infinity }} // Continuous animation
      >
        <button
          onClick={toggleChat}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          style={{ zIndex: 1000 }} // Ensure the chatbot button is on top
        >
          {isChatOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </button>
      </motion.div>

      {/* Chatbot Popup */}
      {isChatOpen && (
        <div className="fixed bottom-20 left-6 bg-white shadow-lg rounded-lg w-80 md:w-96 h-96 z-50 flex flex-col sm:left-6 left-0 sm:mx-0 mx-4">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-lg">
            <h3 className="text-lg font-bold text-white">Chat with Us</h3>
            <button onClick={toggleChat} className="text-white hover:text-gray-200">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className="mb-4 break-words">
                <p className="text-blue-600 font-medium">{msg.user}</p>
                <p className="text-gray-600">{msg.bot}</p>
              </div>
            ))}
          </div>

          {/* Input Field */}
          <div className="p-4 border-t flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white rounded-lg p-2 hover:bg-blue-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}; // Remove the extra closing bracket that was causing the error

export default ChatBot;