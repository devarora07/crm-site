'use client'
import React from 'react';
import FeatureCard from './common/FeatureCard';

export default function FeaturesSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">Why Choose RMS Central?</h2>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          Streamline your sales, manage leads, and grow customer relationships with ease.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard title="All-in-One Dashboard" desc="Track leads, deals, and customer interactions in a single platform." />
          <FeatureCard title="Automated Workflows" desc="Automate repetitive tasks so your team focuses on closing deals." />
          <FeatureCard title="Transparent Pricing" desc="Simple plans with no hidden fees, scale as your team grows." />
        </div>
      </div>
    </section>
  );
}
