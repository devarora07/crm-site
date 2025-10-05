// app/components/EnergyAssetsSection.tsx
import React from "react";

export default function EnergyAssetsSection() {
  const items = [
    { title: "Solar Power", Icon: SolarPanelIcon },
    { title: "Energy Meter", Icon: EnergyMeterIcon },
    { title: "Generator", Icon: GeneratorIcon },
    { title: "Weather Station", Icon: WeatherStationIcon },
    { title: "VFD", Icon: VfdIcon },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <header className="text-center space-y-3 mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Serving{" "}
          <span className="text-green-600 dark:text-green-400">
            Energy &amp; Asset Management
          </span>{" "}
          Needs
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
          <span className="font-semibold">Connect your assets,</span> all at one place
        </p>
      </header>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {items.map(({ title, Icon }) => (
          <li
            key={title}
            className="group flex flex-col items-center text-center"
          >
            <div className="rounded-full ring-1 ring-green-600/20 bg-green-50 dark:bg-green-900/10 p-6 transition-transform group-hover:scale-105">
              <Icon className="h-16 w-16 stroke-[1.5] text-green-600 dark:text-green-400" />
            </div>
            <span className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
              {title}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Icons (inline SVGs, no external deps) ---------- */

function SolarPanelIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <rect x="6" y="22" width="52" height="20" rx="2" className="stroke-current" />
      <path d="M6 32h52M19 22v20M33 22v20M45 22v20" className="stroke-current" />
      <path d="M12 42l-2 10m44-10l2 10M24 52h16" className="stroke-current" />
      <circle cx="12" cy="12" r="5" className="stroke-current" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M6.5 6.5l2.1 2.1M15.4 15.4l2.1 2.1M17.5 6.5l-2.1 2.1M8.6 15.4L6.5 17.5" className="stroke-current" />
    </svg>
  );
}

function EnergyMeterIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <rect x="14" y="8" width="36" height="48" rx="4" className="stroke-current" />
      <rect x="20" y="18" width="24" height="10" rx="2" className="stroke-current" />
      <path d="M24 22h2m4 0h2m4 0h2" className="stroke-current" />
      <path d="M22 38h20M22 46h20" className="stroke-current" />
      <path d="M32 28v6" className="stroke-current" />
    </svg>
  );
}

function GeneratorIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <rect x="10" y="22" width="44" height="24" rx="3" className="stroke-current" />
      <path d="M14 46v6m36-6v6M8 32h6m36 0h6" className="stroke-current" />
      <rect x="20" y="28" width="12" height="12" rx="2" className="stroke-current" />
      <path d="M36 28h10m-10 6h10m-10 6h10" className="stroke-current" />
      <path d="M28 18h8l4 4" className="stroke-current" />
    </svg>
  );
}

function WeatherStationIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <rect x="12" y="12" width="40" height="40" rx="4" className="stroke-current" />
      {/* Cloud */}
      <path d="M23 30a6 6 0 0111-2 5 5 0 011 10H22a4 4 0 010-8h1z" className="stroke-current" />
      {/* Sun */}
      <circle cx="44" cy="24" r="4" className="stroke-current" />
      <path d="M44 16v2m0 12v2m-8-8h2m12 0h2m-10.8-6.8l1.4 1.4m6 6l1.4 1.4m-8.8 0l1.4-1.4m6-6l1.4-1.4" className="stroke-current" />
      {/* Raindrops */}
      <path d="M26 40c0 2-2 4-2 6m6-6c0 2-2 4-2 6m6-6c0 2-2 4-2 6" className="stroke-current" />
    </svg>
  );
}

function VfdIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <rect x="10" y="14" width="44" height="36" rx="4" className="stroke-current" />
      <rect x="18" y="22" width="12" height="20" rx="2" className="stroke-current" />
      <path d="M36 24h10m-10 8h10m-10 8h10" className="stroke-current" />
      <circle cx="24" cy="32" r="3" className="stroke-current" />
    </svg>
  );
}
