'use client'
import React from 'react';
import Banner from './Banner';
import FloatingTabs from './FloatingTabsSection'; // Your floating tabs component

export default function MergeBanner() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* Floating Tabs in the Background */}
      <div className="absolute inset-0 z-0">
        <FloatingTabs />
      </div>

      {/* Banner in the Foreground */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <Banner />
      </div>
    </div>
  );
}
