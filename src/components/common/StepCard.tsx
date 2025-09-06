'use client'
import React from 'react';

export default function StepCard({ number, title, desc, icon, extras }: { number: number; title: string; desc: string; icon:
React.ReactNode; extras?: React.ReactNode }) {
return (
<div className="bg-white text-left">
    <div className="flex items-center mb-3">
        <div
            className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-bold mr-3">
            {number}
        </div>
        <div className="flex items-center text-lg font-semibold">{icon}{title}</div>
    </div>
    <p className="text-slate-600 text-sm">{desc}</p>
    {extras && <div className="mt-3">{extras}</div>}
</div>
);
}