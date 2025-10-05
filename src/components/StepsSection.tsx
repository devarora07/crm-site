'use client'
import React from 'react';
import StepCard from './common/StepCard';
import { User, CreditCard, Key, Github, Mail, Globe } from 'lucide-react';

// export default function StepsSection() {
//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center">Get Started in 3 Simple Steps</h2>
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
//           <StepCard number={1} title="Sign Up" desc="Create your RMS account and invite your team." icon={<User />} />
//           <StepCard number={2} title="Add Your Customers" desc="Import or add leads and contacts easily." icon={<CreditCard />} />
//           <StepCard number={3} title="Start Managing Deals" desc="Track opportunities, pipelines, and team performance." icon={<Key />} />
//         </div>
//       </div>
//     </section>
//   );
// }

export default function StepsSection() {

    return (  <section className="py-16 bg-white">
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
    </section>)
}
