'use client'
import React from 'react';
import ModelCard from './common/ModelCard'

export default function IntegrationsSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Top Integrations</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ModelCard name="Salesforce" desc="Seamless integration to sync leads and opportunities." />
          <ModelCard name="HubSpot" desc="Connect your marketing and sales pipelines effortlessly." />
          <ModelCard name="Slack" desc="Get real-time notifications on deal progress." />
        </div>
      </div>
    </section>
  );
}
