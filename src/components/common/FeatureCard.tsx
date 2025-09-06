'use client'
import React from 'react';

export default function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white border rounded-lg p-6 text-left">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-slate-600 text-sm">{desc}</p>
    </div>
  );
}
