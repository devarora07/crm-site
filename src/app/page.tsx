'use client'
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import GraphSection from '@/components/GraphSection';
import FeaturesSection from '@/components/FeaturesSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import StepsSection from '@/components/StepsSection'
import Banner from '@/components/Banner'

export default function Page() {
  return (
    <>
    <Banner />
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* <Header /> */}
      <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <HeroSection />
        <GraphSection />
      </main>
      <FeaturesSection />
      <StepsSection />
      <IntegrationsSection />
      <CTASection />
      <Footer />
    </div>
    </>
  );
}
