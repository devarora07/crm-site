'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';

export default function HeroSection() {

  const handleCopy = () => {
  navigator.clipboard.writeText('SLEDOPYT_API_KEY');

  toast("We keep your API keys protected, so you don’t have to worry.", {
    id: 'copy-toast',
    position: 'top-right',
    duration: 3000,
  });
};


  return (
    <section className="max-w-4xl mx-auto p-6 space-y-12">
      {/* Hero Content */}
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
            Get started
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
            <button 
              onClick={handleCopy}
              className="ml-3 px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-100 transition"
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      {/* React Hot Toast container */}
      <Toaster />
    </section>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white border border-gray-400 rounded-lg p-6 shadow-sm text-center">
      <div className="text-sm text-slate-500">{title}</div>
      <div className="mt-2 font-semibold text-2xl">{value}</div>
    </div>
  );
}
