'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Tab {
  id: number;
  title: string;
  icon: React.ReactNode;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  delay: number;
}

export default function Page() {
  const [tabs, setTabs] = useState<Tab[]>([]);

  const tabData = [
    {
      title: "Create New Ticket",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      title: "View My Tickets",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
        </svg>
      )
    },
    {
      title: "View FSR",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 7H7V7h6v2zm3 3H7v-2h9v2zm-3 3H7v-2h6v2z"/>
        </svg>
      )
    },
    {
      title: "View Inventory",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19V1h-2v1H7V1H5v1H4.5C3.67 2 3 2.67 3 3.5v17C3 21.33 3.67 22 4.5 22h15c.83 0 1.5-.67 1.5-1.5v-17C21 2.67 20.33 2 19.5 2z"/>
        </svg>
      )
    },
    {
      title: "Manage Inventory",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
        </svg>
      )
    },
    {
      title: "Consumable Inventory",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      title: "View Monthly Summary",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
        </svg>
      )
    },
    {
      title: "View Other Reports",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"/>
        </svg>
      )
    },
    {
      title: "Download Maintenance Formats",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
        </svg>
      )
    },
    {
      title: "Register a problem",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      title: "View all problems",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
        </svg>
      )
    }
  ];

  useEffect(() => {
    const generateRandomTabs = () => {
      const newTabs = tabData.map((tab, index) => ({
        id: index,
        title: tab.title,
        icon: tab.icon,
        x: Math.random() * (window.innerWidth - 300),
        y: Math.random() * (window.innerHeight - 200),
        rotation: Math.random() * 20 - 10,
        scale: 0.8 + Math.random() * 0.4,
        delay: Math.random() * 2
      }));
      setTabs(newTabs);
    };

    generateRandomTabs();
    
    // Regenerate positions every 10 seconds
    const interval = setInterval(generateRandomTabs, 10000);
    
    return () => clearInterval(interval);
  }, []);

  const getRandomColor = (index: number) => {
    const colors = [
      'from-blue-500 to-purple-600',
      'from-green-500 to-teal-600',
      'from-purple-500 to-pink-600',
      'from-yellow-500 to-orange-600',
      'from-red-500 to-pink-600',
      'from-indigo-500 to-blue-600',
      'from-teal-500 to-green-600',
      'from-orange-500 to-red-600',
      'from-pink-500 to-purple-600',
      'from-cyan-500 to-blue-600',
      'from-lime-500 to-green-600'
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:75px_75px]" />
      
      {/* Floating Tabs */}
      {tabs.map((tab, index) => (
        <motion.div
          key={tab.id}
          initial={{
            x: tab.x,
            y: tab.y,
            scale: 0,
            rotate: tab.rotation,
            opacity: 0
          }}
          animate={{
            x: tab.x,
            y: tab.y,
            scale: tab.scale,
            rotate: tab.rotation,
            opacity: 1
          }}
          transition={{
            duration: 1.5,
            delay: tab.delay,
            ease: "easeOut"
          }}
          whileHover={{
            scale: tab.scale * 1.1,
            rotate: 0,
            zIndex: 50,
            transition: { duration: 0.2 }
          }}
          className="absolute cursor-pointer"
          style={{
            left: tab.x,
            top: tab.y
          }}
        >
          <motion.div
            className={`bg-gradient-to-r ${getRandomColor(index)} text-white p-4 rounded-xl shadow-lg border border-white/20 backdrop-blur-sm min-w-[200px] max-w-[250px]`}
            whileHover={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                {tab.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm leading-tight">
                  {tab.title}
                </h3>
              </div>
            </div>
            
            {/* Floating particles */}
            <motion.div
              className="absolute -top-1 -right-1 w-2 h-2 bg-white/40 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random()
              }}
            />
            <motion.div
              className="absolute -bottom-1 -left-1 w-1 h-1 bg-white/30 rounded-full"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: Math.random()
              }}
            />
          </motion.div>
        </motion.div>
      ))}
      
      {/* Center Title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
            Unified Dashboard
          </h1>
          <p className="text-xl text-slate-600 max-w-md">
            Your complete ticket management system with floating navigation
          </p>
        </motion.div>
      </div>
      
      {/* Refresh Button */}
      <motion.button
        onClick={() => window.location.reload()}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </motion.button>
    </div>
  );
}
