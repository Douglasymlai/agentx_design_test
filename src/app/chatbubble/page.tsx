'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

interface VisibleMessage {
  id: number;
  opacity: number;
}

export default function ChatBubble() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleMessages, setVisibleMessages] = useState<VisibleMessage[]>([]);

  // Simulate adding messages
  useEffect(() => {
    const demoMessages: Message[] = [
      { id: 1, text: "Hello!", sender: 'user' },
      { id: 2, text: "Hi there! How can I help you today?", sender: 'bot' },
      { id: 3, text: "I'm looking for restaurant recommendations in downtown", sender: 'user' },
      { id: 4, text: "I'd be happy to help! What type of cuisine are you interested in?", sender: 'bot' },
      { id: 5, text: "I'm in the mood for Italian food", sender: 'user' },
      { id: 6, text: "Great choice! I recommend 'La Bella Italia' on Main Street. They're known for their homemade pasta and authentic atmosphere. Would you like their menu?", sender: 'bot' },
      { id: 7, text: "Yes, please share the menu!", sender: 'user' },
      { id: 8, text: "Here's a link to their digital menu: www.labellaitalia.com/menu. They're open until 10 PM today. Would you like me to help you make a reservation?", sender: 'bot' },
      { id: 9, text: "That would be great, can you book a table for 7 PM?", sender: 'user' },
      { id: 10, text: "I've checked their availability and there's a table for you at 7 PM. How many people will be dining?", sender: 'bot' }
    ];
    setMessages(demoMessages);
  }, []);

  // Handle scroll and visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const messageId = Number(entry.target.getAttribute('data-message-id'));
          const ratio = entry.intersectionRatio;
          
          setVisibleMessages((prev) => {
            const existingIndex = prev.findIndex(m => m.id === messageId);
            const opacity = Math.min(ratio * 2, 1); // This creates a smoother fade

            if (existingIndex >= 0) {
              return prev.map(m => 
                m.id === messageId ? { ...m, opacity } : m
              );
            }
            
            return [...prev, { id: messageId, opacity }];
          });
        });
      },
      {
        root: containerRef.current,
        threshold: Array.from({ length: 20 }, (_, i) => i / 20), // Creates more granular steps
        rootMargin: "-20px 0px" // Starts fading slightly before the edge
      }
    );

    const messageElements = document.querySelectorAll('.message-item');
    messageElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const newId = messages.length > 0 ? Math.max(...messages.map(m => m.id)) + 1 : 1;
      setMessages(prev => [...prev, {
        id: newId,
        text: newMessage.trim(),
        sender: 'user'
      }]);
      setNewMessage('');
      
      // Simulate bot response
      setTimeout(() => {
        const responseId = newId + 1;
        setMessages(prev => [...prev, {
          id: responseId,
          text: "I'm a bot response to your message.",
          sender: 'bot'
        }]);
      }, 1000);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md flex flex-col h-[600px] bg-gray-100 rounded-lg">
        <div 
          ref={containerRef}
          className="flex-1 p-4 overflow-y-auto"
        >
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                className="message-item"
                data-message-id={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: visibleMessages.find(m => m.id === message.id)?.opacity ?? 0,
                  y: 0 
                }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 mb-2 ${
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white ml-auto'
                      : 'bg-gray-300 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <form 
          onSubmit={handleSendMessage}
          className="p-4 border-t border-gray-200 bg-white rounded-b-lg"
        >
          <div className="flex gap-2 rounded-full">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              disabled={!newMessage.trim()}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
