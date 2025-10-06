"use client";
import Image from "next/image";
import React from "react";

/**
 * TrackSo-style marketing section.
 * - Hero blurb (paraphrased)
 * - "Solution Overview" image banner
 * - "Connect your assets" grid (icons/images + labels)
 *
 * Drop referenced images into /public/images/ (see list below).
 */
export default function TracksoLikeSection() {
  const assets = [
    { title: "Solar Inverter", img: "/images/solar-inverter.png", alt: "Solar inverter illustration" },
    { title: "Energy Meter", img: "/images/energy-meter.png", alt: "Energy meter device" },
    { title: "Generator (DG)", img: "/images/generator.png", alt: "Diesel generator icon" },
    { title: "Weather Station", img: "/images/weather-station.png", alt: "Weather station sensors" },
    { title: "VFD", img: "/images/vfd.png", alt: "Variable frequency drive icon" },
    { title: "Water Pump", img: "/images/water-pump.png", alt: "Water pump icon" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/* HERO */}
      <header className="text-center space-y-4 mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Track &amp; optimize your assets
        </h2>

      {/* FULL WIDTH IMAGES */}
      <div className="w-full">
        {/* First full-width image */}
        <div className="relative w-full min-h-[200px] sm:min-h-[360px] md:min-h-[480px] lg:min-h-[550px]">
          <Image
            src="/images/k.png"
            alt="Full screen illustration 1"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        {/* Second full-width image */}
        <div className="relative w-full min-h-[200px] sm:min-h-[360px] md:min-h-[480px] lg:min-h-[550px] mt-8">
          <Image
            src="/images/j.png"
            alt="Full screen illustration 2"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

        
        <p className="pt-3 text-slate-600 max-w-3xl mx-auto">
          Cloud-based monitoring and analytics to keep every site healthy—spot issues sooner, reduce
          downtime, and stay on top of performance without being on-site.
        </p>
      </header>

      {/* SOLUTION OVERVIEW IMAGE */}
      <div className="mb-14">
        <div className="relative w-full rounded-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10">
          <Image
            src="/images/solution-overview.png"
            alt="Solution overview diagram"
            width={1500}
            height={900}
            className="w-full h-auto"
            priority
          />
        </div>
        {/* <p className="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">Solution Overview</p> */}
      </div>

      {/* CONNECT YOUR ASSETS */}
      {/* <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">
          Connect your assets, all at one place
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Bring data from every device into one dashboard for clear insights and faster actions.
        </p>
      </div>

      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
        {assets.map((a) => (
          <li key={a.title} className="group flex flex-col items-center text-center">
            <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full bg-green-50 dark:bg-green-900/10 ring-1 ring-green-600/20 flex items-center justify-center overflow-hidden">
              <Image src={a.img} alt={a.alt} width={112} height={112} className="object-contain" />
            </div>
            <span className="mt-4 text-base sm:text-lg font-medium text-gray-900 dark:text-white">
              {a.title}
            </span>
          </li>
        ))}
      </ul> */}
    </section>
  );
}
