'use client'
import React from 'react';

export default function Header() {
  return (
    <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-semibold">CRM</div>
        <div className="font-medium">CRM Central</div>
      </div>
      <nav className="flex items-center gap-6 text-sm text-slate-600">
        <a className="hover:underline" href="#">Features</a>
        <a className="hover:underline" href="#">Pricing</a>
        <a className="hover:underline" href="#">Resources</a>
        <button className="px-4 py-2 rounded-md border border-slate-200">Sign in</button>
      </nav>
    </header>
  );
}
