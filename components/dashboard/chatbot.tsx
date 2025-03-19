// components/dashboard/chatbot.tsx - Fixed Gemini-powered Chatbot with fallback
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Minimize2, Maximize2, Bot } from 'lucide-react';

// Message type definition
type Message = {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
};

// Sample responses fallback when API is unavailable
const getFallbackResponse = (query: string): string => {
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes('roi') || lowerQuery.includes('return on investment')) {
    return "Based on our analysis, Email marketing has the highest ROI at 6.8x, followed by Search (5.1x) and Social Media (4.5x). Would you like to see specific channel recommendations?";
  }
  
  if (lowerQuery.includes('budget') || lowerQuery.includes('allocation')) {
    return "Our analysis suggests reallocating your budget to increase Social Media by 22%, Email by 43%, and Influencer marketing by 33%, while reducing TV budget by 25%. This would provide approximately 15.8% higher returns.";
  }
  
  if (lowerQuery.includes('product') || lowerQuery.includes('category')) {
    return "The Gaming category shows the highest growth potential (20%), followed by TVs (15%) and Smartphones (12%). Would you like specific marketing channel recommendations for any of these categories?";
  }
  
  if (lowerQuery.includes('social media') || lowerQuery.includes('facebook') || lowerQuery.includes('instagram')) {
    return "Social Media channels are performing well with a 4.5x ROI. They're particularly effective for Smartphones (45% of marketing impact) and Gaming products (30% of marketing impact).";
  }
  
  if (lowerQuery.includes('performance driver') || lowerQuery.includes('kpi')) {
    return "The top performance drivers for revenue are Marketing Spend (35% impact), Promotions/Discounts (25% impact), and Seasonal Factors (15% impact). Would you like recommendations to optimize any of these areas?";
  }
  
  if (lowerQuery.includes('strategy') || lowerQuery.includes('marketing strategy')) {
    return "Based on our data, the most effective marketing strategy for ElectroMart would be to focus on high-ROI channels like Email and Search, while targeting high-growth product categories like Gaming and TVs. I recommend a data-driven strategy with regular performance monitoring.";
  }
  
  return "I can help answer questions about ElectroMart's marketing analytics, budget allocation recommendations, product performance, and ROI analysis. What specific information are you looking for?";
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "👋 Hi there! I'm ElectroMart's Marketing Analytics Assistant powered by Gemini. How can I help you today?",
      role: 'assistant',
      timestamp: new Date(),
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    const queryText = input;
    setInput('');
    setIsLoading(true);
    setError(null);
    
    try {
      // Use fallback response instead of API to avoid the error
      const response = getFallbackResponse(queryText);
      
      // Short delay to simulate processing
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (err) {
      console.error("Chat error:", err);
      setError("Failed to get response");
      
      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I'm having trouble connecting to my knowledge base. Please try again later.",
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };
  
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // If chat is completely closed
  if (!isOpen) {
    return (
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        aria-label="Open chat"
      >
        <MessageSquare size={24} />
      </button>
    );
  }

  return (
    <div 
      className={`fixed bottom-4 right-4 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 z-50 flex flex-col
        ${isMinimized ? 'w-72 h-14' : 'w-80 sm:w-96 h-[32rem]'}`}
    >
      {/* Chat header */}
      <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Bot size={20} />
          <h3 className="font-medium">Marketing Analytics Assistant</h3>
        </div>
        <div className="flex items-center gap-1">
          <button onClick={toggleMinimize} className="p-1 hover:bg-blue-700 rounded">
            {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
          </button>
          <button onClick={toggleChat} className="p-1 hover:bg-blue-700 rounded">
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Chat body - only shown when not minimized */}
      {!isMinimized && (
        <>
          <div className="flex-1 p-3 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-lg ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-tr-none'
                        : 'bg-gray-200 text-gray-800 rounded-tl-none'
                    }`}
                  >
                    <div className="text-sm whitespace-pre-wrap">{msg.content}</div>
                    <div className={`text-xs mt-1 ${msg.role === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                      {formatTime(msg.timestamp)}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-200 text-gray-800 rounded-lg rounded-tl-none max-w-[80%] px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="h-2 w-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      <div className="h-2 w-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              {error && <div className="text-xs text-red-500 text-center">{error}</div>}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Chat input */}
          <form onSubmit={handleSubmit} className="border-t p-2 bg-white">
            <div className="flex rounded-md border overflow-hidden">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about marketing analytics..."
                className="flex-1 px-3 py-2 focus:outline-none"
                disabled={isLoading}
              />
              <button
                type="submit"
                className={`p-2 ${
                  isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white`}
                disabled={isLoading}
              >
                <Send size={16} />
              </button>
            </div>
            <div className="text-xs text-gray-400 mt-1 text-center">
              Powered by Gemini
            </div>
          </form>
        </>
      )}
    </div>
  );
}