'use client'
import React from 'react';
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const sampleData = [
  { week: 'W1', tickets: 120 },
  { week: 'W2', tickets: 180 },
  { week: 'W3', tickets: 240 },
  { week: 'W4', tickets: 300 },
  { week: 'W5', tickets: 360 },
  { week: 'W6', tickets: 420 },
  { week: 'W7', tickets: 480 },
];

function formatShortNumber(num: number) {
if (num >= 1_000_000) return `${Math.round(num / 1_000_000)}M`;
if (num >= 1_000) return `${Math.round(num / 1_000)}k`;
return `${num}`;
}

function formatNumber(num: number) {
return num.toLocaleString();
}


function MiniStat({ label, value }: { label: string; value: string }) {
return (
<div className="bg-slate-50 border border-slate-100 rounded-md px-3 py-2 text-xs">
    <div className="text-slate-500">{label}</div>
    <div className="font-medium text-sm">{value}</div>
</div>
);
}

export default function GraphSection() {
return (
<section>
    <div className="mt-10 bg-white border border-gray-400 rounded-lg p-6 shadow-sm">
        <div className="flex items-start justify-between">
            <div>
                <div className="text-sm text-slate-500">Routing Curves</div>
                <div className="mt-1 font-semibold text-lg">Tickets / week</div>
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
                            <Area type="monotone" dataKey="tickets" stroke="#7c3aed" fillOpacity={1} fill="url(#grad)" />

                            {/* <Area type="monotone" dataKey="tokens" stroke="#7c3aed" fillOpacity={1} fill="url(#grad)" /> */}
                </AreaChart>
            </ResponsiveContainer>
        </div>

        <div className="mt-4 flex gap-3">
            <MiniStat label="Top Uses" value="Field Report Submission" />
            <MiniStat label="Latency" value="2.4s" />
            <MiniStat label="Weekly growth" value="+8.82%" />
        </div>
    </div>

    <div className="mt-6 flex gap-4">
        <div className="flex-1 bg-white border border-gray-400 rounded-lg p-4 text-sm">
            <div className="text-slate-500">Weekly Performance</div>
            <div className="mt-1 font-medium">100+ tickets/week closed</div>
        </div>
        <div className="w-44 bg-white border border-gray-400 rounded-lg p-4 text-sm">
            <div className="text-slate-500">On Site Users</div>
            <div className="mt-1 font-medium">60+</div>
        </div>
    </div>
</section>
);
}

