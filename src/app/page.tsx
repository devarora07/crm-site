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
import PricingSection from '@/components/PricingSection'
import ChatSection from '@/components/ChatSections'
import MergeBanner from '@/components/MergeBanner'
import EnergyAssetsSection from '@/components/EnergyAssetsSection'
import TracksoLikeSection from '@/components/Trackso'

export default function Page() {
  return (
    <>
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* <Header /> */}
      <MergeBanner />
      <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <HeroSection />
        <GraphSection />
      </main>
      <FeaturesSection />
      {/* <ChatSection /> */}
      {/* <EnergyAssetsSection /> */}
      <TracksoLikeSection />
      <PricingSection />
      <IntegrationsSection />
      <CTASection />
      <Footer />
    </div>
    </>
  );
}
