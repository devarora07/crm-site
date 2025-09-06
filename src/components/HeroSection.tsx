'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function HeroSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer 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`,
          'Content-Type': 'application/json',
          'X-Title': 'CRM Chatbot',
        },
        body: JSON.stringify({
          model: 'meta-llama/llama-3.1-8b-instruct:free',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful assistant for a CRM dashboard. Keep responses concise and helpful.'
            },
            ...messages,
            userMessage
          ],
          max_tokens: 150,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.choices[0]?.message?.content || 'Sorry, I could not process your request.'
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, there was an error processing your request.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="max-w-4xl mx-auto p-6 space-y-12">
      {/* Hero Content Section */}
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 8 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.45 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight"
        >
          The Unified Dashboard For All Of Your Tickets
        </motion.h1>

        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Better prices, better uptime, one subscription.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <button className="bg-slate-900 text-white px-5 py-3 rounded-lg shadow">
            Get started — Signup
          </button>
          <button className="px-5 py-3 rounded-lg border border-slate-200">
            Explore Tabs
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Monthly Tickets" value="4.2K+" />
        <StatCard title="Global Users" value="10k" />
        <StatCard title="Providers" value="10+" />
      </div>

      {/* API Key Section */}
      <div className="flex justify-center">
        <div className="bg-slate-50 border border-slate-100 p-4 rounded-lg max-w-md w-full">
          <div className="text-xs text-slate-500">Get your Dashboard key</div>
          <div className="mt-2 flex items-center justify-between">
            <div className="font-mono text-sm bg-white px-3 py-2 rounded-md flex-1">
              SLEDOPYT_API_KEY ••••••••••
            </div>
            <button className="ml-3 px-3 py-2 rounded-md border border-slate-200">Copy</button>
          </div>
        </div>
      </div>

      {/* Chat Interface Section */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden max-w-2xl mx-auto">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-xl">AI Assistant</h3>
              <div className="flex items-center gap-2 text-sm opacity-90">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Online & Ready to Help</span>
              </div>
            </div>
          </div>
        </div>

        {/* Messages Container */}
        <div className="h-96 overflow-y-auto p-6 bg-slate-50">
          {messages.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h4 className="font-semibold text-slate-900 mb-3 text-lg">Welcome to Your AI Assistant</h4>
              <p className="text-slate-500 text-base max-w-sm mx-auto">
                Hi! I'm here to help with your CRM questions and guide you through the dashboard features. Ask me anything!
              </p>
            </div>
          )}
          
          <div className="space-y-6">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] px-5 py-4 rounded-2xl text-base ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-br-sm'
                      : 'bg-white text-slate-800 shadow-sm border border-slate-200 rounded-bl-sm'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-5 py-4 rounded-2xl rounded-bl-sm shadow-sm border border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 text-base">AI is thinking</span>
                    <div className="flex space-x-1 ml-2">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Message Input */}
        <div className="p-6 bg-white border-t border-slate-200">
          <form onSubmit={sendMessage} className="space-y-4">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Start a message..."
                className="w-full px-5 py-4 pr-14 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-base placeholder-slate-400"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-slate-300 disabled:to-slate-400 text-white p-2 rounded-lg transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            
            <div className="flex items-center justify-between text-sm text-slate-500">
              <span>Press Enter to send • Powered by AI</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Connected</span>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Additional CTA Section */}
      <div className="text-center py-8">
        {/* <p className="text-slate-600 mb-4">
          Ready to transform your customer relationships?
        </p> */}
        {/* <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
          Start Your Free Trial
        </button> */}
      </div>
    </section>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white border rounded-lg p-6 shadow-sm text-center">
      <div className="text-sm text-slate-500">{title}</div>
      <div className="mt-2 font-semibold text-2xl">{value}</div>
    </div>
  );
}
