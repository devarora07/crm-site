// OpenRouter-Clone-React.tsx
// Extended version with full sections like the OpenRouter homepage
'use client'

import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart, CartesianGrid } from 'recharts';
import { motion } from 'framer-motion';
import { User, CreditCard, Key, Github, Mail, Globe } from 'lucide-react';
import Banner from '@/components/Banner'

const sampleData = [
{ week: 'W1', tokens: 1200000 },
{ week: 'W2', tokens: 1800000 },
{ week: 'W3', tokens: 2400000 },
{ week: 'W4', tokens: 3000000 },
{ week: 'W5', tokens: 3600000 },
{ week: 'W6', tokens: 4200000 },
{ week: 'W7', tokens: 4800000 },
];

export default function OpenRouterClone(): JSX.Element {
return (
<div className="min-h-screen bg-white text-slate-900 antialiased">
    {/* Header */}
    <Banner />
    <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
            <div
                className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-semibold">
                OR</div>
            <div className="font-medium">OpenRouter</div>
        </div>
        <nav className="flex items-center gap-6 text-sm text-slate-600">
            <a className="hover:underline" href="#">Docs</a>
            <a className="hover:underline" href="#">Pricing</a>
            <a className="hover:underline" href="#">Status</a>
            <button className="px-4 py-2 rounded-md border border-slate-200">Sign in</button>
        </nav>
    </header>

    {/* Hero + Graph Section */}
    <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <HeroSection />
        <GraphSection />
    </main>

    {/* Features */}
    <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold">Why OpenRouter?</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
                We unify access to the world’s best LLMs with better routing, uptime, and pricing.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <FeatureCard title="Multi-provider access"
                    desc="Use OpenAI, Anthropic, Google, and more with one key." />
                <FeatureCard title="Automatic routing" desc="Smartly distributes queries to best-performing models." />
                <FeatureCard title="Transparent pricing" desc="Pay only for what you use, no hidden fees." />
            </div>
        </div>
    </section>

    {/* Onboarding Steps Section */}
    <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center">Get Started in 3 Steps</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <StepCard number={1} title="Signup"
                    desc="Create an account to get started. You can set up an org for your team later." icon={<User
                    className="w-5 h-5 text-indigo-500 mr-2" />}
                extras={
                <div className="flex justify-center gap-3 mt-4">
                    <div className="p-2 bg-slate-50 rounded-md">
                        <Globe className="w-5 h-5 text-slate-600" />
                    </div>
                    <div className="p-2 bg-slate-50 rounded-md">
                        <Github className="w-5 h-5 text-slate-600" />
                    </div>
                    <div className="p-2 bg-slate-50 rounded-md">
                        <Mail className="w-5 h-5 text-slate-600" />
                    </div>
                </div>
                }
                />
                <StepCard number={2} title="Buy credits" desc="Credits can be used with any model or provider."
                    icon={<CreditCard className="w-5 h-5 text-indigo-500 mr-2" />}
                extras={
                <div className="mt-4 text-sm bg-slate-50 p-3 rounded-md text-left">
                    <div className="flex justify-between"><span>Apr 1</span><span className="font-semibold">$99</span>
                    </div>
                    <div className="flex justify-between mt-1"><span>Mar 30</span><span
                            className="font-semibold">$10</span></div>
                </div>
                }
                />
                <StepCard number={3} title="Get your API key"
                    desc="Create an API key and start making requests. Fully OpenAI compatible." icon={<Key
                    className="w-5 h-5 text-indigo-500 mr-2" />}
                extras={
                <div className="mt-4 text-left">
                    <div className="font-mono text-xs bg-slate-50 rounded-md px-3 py-2">OPENROUTER_API_KEY</div>
                    <div className="mt-2 font-mono text-xs bg-slate-50 rounded-md px-3 py-2">•••••••••••••••</div>
                </div>
                }
                />
            </div>
        </div>
    </section>

    {/* Models showcase */}
    <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center">Featured Models</h2>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ModelCard name="GPT-5" desc="Latest generation OpenAI model with 69.1B tokens/week." />
                <ModelCard name="Claude 3.5" desc="Anthropic’s frontier model for safety and reasoning." />
                <ModelCard name="Gemini 2.5 Pro" desc="Google’s multimodal flagship with top throughput." />
            </div>
        </div>
    </section>

    {/* Call to Action */}
    <section className="bg-gradient-to-r from-indigo-500 to-purple-500 py-20 text-white text-center">
        <h2 className="text-3xl font-bold">Start building with OpenRouter today</h2>
        <p className="mt-3 text-lg">Unify your LLM access with one API key.</p>
        <button className="mt-6 px-6 py-3 rounded-lg bg-white text-slate-900 font-medium shadow">Get API Key</button>
    </section>

    {/* Footer */}
    <footer className="max-w-6xl mx-auto px-6 py-10 text-slate-500 text-sm text-center">
        © 2023 – 2025 OpenRouter, Inc. All rights reserved.
    </footer>
</div>
);
}

function HeroSection() {
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

function GraphSection() {
return (
<section>
    <div className="bg-white border rounded-2xl p-6 shadow-sm">
        <div className="flex items-start justify-between">
            <div>
                <div className="text-sm text-slate-500">Routing Curves</div>
                <div className="mt-1 font-semibold text-lg">Tokens / week</div>
            </div>
            <div className="text-xs text-slate-400">+8.82% weekly</div>
        </div>

        <div className="mt-4 h-60">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={sampleData} margin={{ top: 10, right: 0, left: -10, bottom: 0 }}>
                    <defs>
                        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopOpacity={0.25} stopColor="#7c3aed" />
                            <stop offset="100%" stopOpacity={0} stopColor="#7c3aed" />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 6" vertical={false} />
                    <XAxis dataKey="week" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} tickFormatter={(val)=> formatShortNumber(val)} />
                        <Tooltip formatter={(val:number)=> formatNumber(val)} />
                            <Area type="monotone" dataKey="tokens" stroke="#7c3aed" fillOpacity={1} fill="url(#grad)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>

        <div className="mt-4 flex gap-3">
            <MiniStat label="Top model" value="Gemini 2.5 Pro" />
            <MiniStat label="Latency" value="2.4s" />
            <MiniStat label="Weekly growth" value="+8.82%" />
        </div>
    </div>

    <div className="mt-6 flex gap-4">
        <div className="flex-1 bg-white border rounded-lg p-4 text-sm">
            <div className="text-slate-500">Featured model</div>
            <div className="mt-1 font-medium">GPT-5 — 69.1B tokens/week</div>
        </div>
        <div className="w-44 bg-white border rounded-lg p-4 text-sm">
            <div className="text-slate-500">Providers</div>
            <div className="mt-1 font-medium">60+</div>
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

function MiniStat({ label, value }: { label: string; value: string }) {
return (
<div className="bg-slate-50 border border-slate-100 rounded-md px-3 py-2 text-xs">
    <div className="text-slate-500">{label}</div>
    <div className="font-medium text-sm">{value}</div>
</div>
);
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
return (
<div className="bg-white border rounded-lg p-6 text-left">
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="mt-2 text-slate-600 text-sm">{desc}</p>
</div>
);
}

function ModelCard({ name, desc }: { name: string; desc: string }) {
return (
<div className="bg-white border rounded-lg p-6">
    <h3 className="font-semibold text-lg">{name}</h3>
    <p className="mt-2 text-slate-600 text-sm">{desc}</p>
</div>
);
}

function StepCard({ number, title, desc, icon, extras }: { number: number; title: string; desc: string; icon:
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

function formatShortNumber(num: number) {
if (num >= 1_000_000) return `${Math.round(num / 1_000_000)}M`;
if (num >= 1_000) return `${Math.round(num / 1_000)}k`;
return `${num}`;
}

function formatNumber(num: number) {
return num.toLocaleString();
}