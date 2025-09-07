'use client'
import React from 'react';

export default function ModelCard({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="bg-white border border-gray-400 rounded-lg p-6">
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="mt-2 text-slate-600 text-sm">{desc}</p>
    </div>
  );
}
