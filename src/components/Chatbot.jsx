"use client"
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MessageSquare, Send, X, ChevronDown, ChevronUp } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm here to tell you about Beyond the Couch. We're a mental health initiative using art and storytelling. What would you like to know?", sender: "bot" }
  ]);
  const [inputText, setInputText] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef(null);

  // Simplified response handler
  const getBotResponse = useCallback((userInput) => {
    const lowerInput = userInput.toLowerCase().trim();
    const now = new Date();
    const hour = now.getHours();
    const timeBasedGreeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

    // Response handlers in priority order
    const responseHandlers = [
      {
        condition: () => ['hello', 'hi', 'hey', 'greet'].some(g => lowerInput.includes(g)),
        response: () => `${timeBasedGreeting}! 😊 How can I help you today?`
      },
      {
        condition: () => ['how are you', "what's up"].some(p => lowerInput.includes(p)),
        response: () => "I'm just a bot, but I'm happy to share about Beyond the Couch!"
      },
      {
        condition: () => ['thank', 'thanks', 'appreciate'].some(p => lowerInput.includes(p)),
        response: () => "You're welcome! Let me know if you have other questions."
      },
      {
        condition: () => ['bye', 'goodbye', 'see you'].some(p => lowerInput.includes(p)),
        response: () => "Have a wonderful day! Remember to check out our website for more info."
      },
      {
        condition: () => ['storybook', 'coloring', 'children', 'book'].some(p => lowerInput.includes(p)),
        response: () => "We create mental health storybooks for children aged 4-8. These books help kids understand emotions in a fun, accessible way."
      },
      {
        condition: () => ['what', 'who', 'beyond the couch'].some(p => lowerInput.includes(p)),
        response: () => "Beyond the Couch is a youth-led initiative that:\n\n• Creates mental health resources through art\n• Provides creative opportunities\n• Builds mental health awareness\n\nWe believe in making mental health support accessible to all."
      },
      {
        condition: () => ['contact', 'email', 'reach', 'connect'].some(p => lowerInput.includes(p)),
        response: () => "You can reach us at:\n\n📧 info.beyondthecouch@gmail.com\n📱 @beyondthecouch on Instagram\n\nWe'd love to hear from you!"
      },
      {
        condition: () => ['volunteer', 'help', 'join', 'participate'].some(p => lowerInput.includes(p)),
        response: () => "We welcome volunteers! You can help with:\n\n• Content creation\n• Community outreach\n• Event support\n\nVisit our website for more details."
      },
      {
        condition: () => ['mission', 'goal', 'purpose'].some(p => lowerInput.includes(p)),
        response: () => "Our mission is to make mental health resources more accessible through creative means like art and storytelling."
      },
      {
        condition: () => ['team', 'people', 'founder'].some(p => lowerInput.includes(p)),
        response: () => "We're a team of passionate students and mental health advocates. Our team includes artists, writers, and mental health professionals."
      },
      {
        condition: () => true, // Default fallback
        response: () => "I can tell you about our storybooks, mission. What would you like to know?"
      }
    ];

    return responseHandlers.find(h => h.condition()).response();
  }, []);

  const handleSend = useCallback(() => {
    if (!inputText.trim()) return;
    
    const userMessage = { text: inputText, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    
    setTimeout(() => {
      const botResponse = { 
        text: getBotResponse(inputText), 
        sender: "bot" 
      };
      setMessages(prev => [...prev, botResponse]);
    }, 500);
  }, [inputText, getBotResponse]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter') handleSend();
  }, [handleSend]);

  const toggleChat = useCallback(() => {
    setIsOpen(prev => !prev);
    if (!isOpen) setIsMinimized(false);
  }, [isOpen]);

  const toggleMinimize = useCallback(() => {
    setIsMinimized(prev => !prev);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <button 
        onClick={toggleChat}
        className="flex items-center justify-center w-16 h-16 rounded-full bg-[#fe89aa] hover:bg-[#e67899] text-white shadow-lg transform hover:scale-105 transition-all duration-300"
        aria-label="Open chat"
      >
        <MessageSquare size={28} />
      </button>

      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl mb-4 w-80 sm:w-96 overflow-hidden border border-gray-200 flex flex-col">
          <div className="bg-[#5c6650] text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <MessageSquare size={20} className="mr-2" />
              <h3 className="font-serif text-lg font-medium">Beyond the Couch</h3>
            </div>
            <div className="flex items-center">
              <button onClick={toggleMinimize} className="text-white mr-2">
                {!isMinimized ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
              </button>
              <button onClick={toggleChat} className="text-white">
                <X size={20} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="p-4 h-80 overflow-y-auto flex flex-col gap-3 bg-gray-50">
                {messages.map((message, index) => (
                  <div 
                    key={index} 
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div 
                      className={`max-w-xs p-3 rounded-lg whitespace-pre-wrap ${
                        message.sender === "user" 
                          ? "bg-[#fe89aa] text-white rounded-br-none" 
                          : "bg-gray-200 text-gray-800 rounded-bl-none"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-3 border-t border-gray-200 flex">
                <input
                  type="text"
                  placeholder="Ask about Beyond the Couch..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#fe89aa]"
                />
                <button
                  onClick={handleSend}
                  className="bg-[#fe89aa] hover:bg-[#e67899] text-white p-2 rounded-r-lg transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatBot;