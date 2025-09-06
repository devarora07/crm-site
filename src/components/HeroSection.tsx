'use client'
import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
return (
<section>
    <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
        className="text-4xl md:text-5xl font-extrabold leading-tight">
        The Unified Interface For LLMs
    </motion.h1>

    <p className="mt-4 text-lg text-slate-600 max-w-xl">
        Better prices, better uptime, no subscription. Access many models through a single, OpenAI-compatible API.
    </p>

    <div className="mt-6 flex gap-4">
        <button className="bg-slate-900 text-white px-5 py-3 rounded-lg shadow">Get started — Signup</button>
        <button className="px-5 py-3 rounded-lg border border-slate-200">Explore models</button>
    </div>

    <div className="mt-8 grid grid-cols-3 gap-4 text-center">
        <StatCard title="Monthly Tokens" value="4.2M+" />
        <StatCard title="Global Users" value="171k" />
        <StatCard title="Providers" value="60+" />
    </div>

    <div className="mt-8">
        <div className="bg-slate-50 border border-slate-100 p-4 rounded-lg max-w-md">
            <div className="text-xs text-slate-500">Get your API key</div>
            <div className="mt-2 flex items-center justify-between">
                <div className="font-mono text-sm bg-white px-3 py-2 rounded-md flex-1">OPENROUTER_API_KEY ••••••••••
                </div>
                <button className="ml-3 px-3 py-2 rounded-md border border-slate-200">Copy</button>
            </div>
        </div>
    </div>
</section>
);
}

function StatCard({ title, value }: { title: string; value: string }) {
return (
<div className="bg-white border rounded-lg p-4">
    <div className="text-xs text-slate-500">{title}</div>
    <div className="mt-1 font-semibold text-lg">{value}</div>
</div>
);
}
