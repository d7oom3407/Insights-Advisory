
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { getStrategicInsight } from '../services/gemini';
import { Message } from '../types';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! I am your Insights Strategic Assistant. How can I help you with your business goals today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await getStrategicInsight(input);
    setMessages(prev => [...prev, { role: 'assistant', content: response || 'No response' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-[350px] sm:w-[400px] flex flex-col overflow-hidden border border-slate-200">
          <div className="bg-[#1e2258] p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-teal-300" />
              <span className="font-semibold text-sm">Strategic Advisor AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-teal-300 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div ref={scrollRef} className="h-[400px] overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-[#1e2258] text-white' 
                    : 'bg-white border border-slate-200 text-slate-800'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 rounded-2xl p-3 text-sm italic text-slate-400">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask for strategic advice..."
              className="flex-1 bg-slate-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-teal-600 text-white p-2 rounded-full hover:bg-teal-700 transition-colors disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#1e2258] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:bg-teal-900 transition-all duration-300 flex items-center justify-center"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};
