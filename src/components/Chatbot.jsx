"use client"
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MessageSquare, Send, X, ChevronDown, ChevronUp } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Welcome to Beyond the Couch! I can tell you about our initiatives, volunteer roles, and more. How can I help?", sender: "bot" }
  ]);
  const [inputText, setInputText] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef(null);
  const [conversationContext, setConversationContext] = useState(null);

  // Dynamic response handler with context awareness
  const getBotResponse = useCallback((userInput) => {
    const lowerInput = userInput.toLowerCase().trim();
    const now = new Date();
    const hour = now.getHours();
    const timeBasedGreeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

    // Context continuation
    if (conversationContext) {
      switch(conversationContext.topic) {
        case 'storybooks':
          if (lowerInput.includes('distribution') || lowerInput.includes('get')) {
            return "We distribute through schools and community centers. You can request copies at info.beyondthecouch@gmail.com";
          }
          if (lowerInput.includes('create') || lowerInput.includes('make')) {
            return "We welcome volunteers to help create storybooks! Email us your portfolio if you're an artist/writer.";
          }
          setConversationContext(null);
          return "Our storybooks help children understand emotions. Would you like to know about distribution or creation?";

        case 'workshops':
          if (lowerInput.includes('when') || lowerInput.includes('date')) {
            return "Our next workshop is June 15th about art therapy techniques.";
          }
          if (lowerInput.includes('join') || lowerInput.includes('attend')) {
            return "Register at beyondthecouch.org/events. Student discounts available!";
          }
          setConversationContext(null);
          return "We host monthly workshops. Interested in dates or registration?";

        case 'volunteer':
          if (lowerInput.includes('form') || lowerInput.includes('apply')) {
            return "Get the form at beyondthecouch.org/volunteer. Minimum 4-month commitment required.";
          }
          setConversationContext(null);
          return "Volunteers help with events, content creation, and outreach. Need the application link?";

        default:
          setConversationContext(null);
      }
    }

    // Response handlers in priority order
    const responseHandlers = [
      {
        condition: () => ['hello', 'hi', 'hey', 'greet'].some(g => lowerInput.includes(g)),
        response: () => `${timeBasedGreeting}! 😊 How can I help you with Beyond the Couch today?`
      },
      {
        condition: () => ['how are you', "what's up"].some(p => lowerInput.includes(p)),
        response: () => "I'm an AI excited to share about mental health initiatives! What would you like to know?"
      },
      {
        condition: () => ['thank', 'thanks', 'appreciate'].some(p => lowerInput.includes(p)),
        response: () => ["You're welcome!", "Happy to help!", "My pleasure!"][Math.floor(Math.random() * 3)]
      },
      {
        condition: () => ['bye', 'goodbye', 'see you'].some(p => lowerInput.includes(p)),
        response: () => "Goodbye! Check out our storybooks at beyondthecouch.org!"
      },
      {
        condition: () => ['storybook', 'coloring', 'children', 'book'].some(p => lowerInput.includes(p)),
        response: () => {
          setConversationContext({ topic: 'storybooks' });
          return "We create mental health storybooks for children 4-8 years old. Interested in distribution or creation?";
        }
      },
      {
        condition: () => ['workshop', 'event', 'meeting', 'mixer'].some(p => lowerInput.includes(p)),
        response: () => {
          setConversationContext({ topic: 'workshops' });
          return "We host creative workshops and networking mixers. Want details about upcoming events or registration?";
        }
      },
      {
        condition: () => ['volunteer', 'help', 'join', 'participate'].some(p => lowerInput.includes(p)),
        response: () => {
          setConversationContext({ topic: 'volunteer' });
          return "Volunteers commit 5-10 hours/month helping with:\n- Events\n- Content creation\n- Outreach\nNeed the application form?";
        }
      },
      {
        condition: () => ['contact', 'email', 'reach', 'connect'].some(p => lowerInput.includes(p)),
        response: () => "Contact us at:\nEmail: info.beyondthecouch@gmail.com\nInstagram: @beyondthecouch\nWhich method do you prefer?"
      },
      {
        condition: () => ['what', 'who', 'beyond the couch'].some(p => lowerInput.includes(p)),
        response: () => "Beyond the Couch is a youth-led initiative using art and storytelling to:\n1. Create mental health resources\n2. Provide student opportunities\n3. Host creative workshops\nWhat interests you?"
      },
      {
        condition: () => true, // Default fallback
        response: () => "I can tell you about:\n1. Our storybooks\n2. Workshops\n3. Volunteer opportunities\nWhat would you like to know?"
      }
    ];

    return responseHandlers.find(h => h.condition()).response();
  }, [conversationContext]);

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
        className="flex items-center justify-center w-16 h-16 rounded-full bg-pink-400 hover:bg-pink-500 text-white shadow-lg transform hover:scale-105 transition-all duration-300"
        aria-label="Open chat"
      >
        <MessageSquare size={28} />
      </button>

      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl mb-4 w-80 sm:w-96 overflow-hidden border border-gray-200 flex flex-col">
          <div className="bg-olive-800 text-white p-4 flex justify-between items-center" style={{ backgroundColor: '#5a5d4b' }}>
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
                          ? "bg-pink-400 text-white rounded-br-none" 
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
                  className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
                <button
                  onClick={handleSend}
                  className="bg-pink-400 hover:bg-pink-500 text-white p-2 rounded-r-lg transition-colors"
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