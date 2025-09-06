// components/PricingSection.tsx
"use client";

import { Check, X } from "lucide-react";

const features = [
  "Lead Management",
  "Email Integration",
  "Workflow Automation",
  "Mobile App",
  "Custom Reports",
  "24/7 Support",
  "API Access",
];

const plans = [
  {
    name: "Our CRM",
    price: "1/3rd Price",
    highlight: true,
    features: [true, true, true, true, true, true, true],
  },
  {
    name: "Zoho CRM",
    price: "$30+ / user",
    features: [true, true, true, true, true, false, true],
  },
  {
    name: "Odoo CRM",
    price: "$25+ / user",
    features: [true, true, false, true, true, false, false],
  },
];

export default function PricingSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Compare Pricing & Features
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-lg">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-4 text-lg font-semibold">Features</th>
              {plans.map((plan, idx) => (
                <th
                  key={idx}
                  className={`p-4 text-lg font-semibold text-center ${
                    plan.highlight ? "bg-indigo-50 text-indigo-600" : ""
                  }`}
                >
                  {plan.name}
                  <div className="text-sm font-normal">{plan.price}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, rowIdx) => (
              <tr key={rowIdx} className="border-t">
                <td className="p-4 font-medium">{feature}</td>
                {plans.map((plan, colIdx) => (
                  <td key={colIdx} className="p-4 text-center">
                    {plan.features[rowIdx] ? (
                      <Check className="text-green-500 inline-block" />
                    ) : (
                      <X className="text-red-500 inline-block" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-center text-lg mt-8 font-semibold text-indigo-600">
        All the features you need — at <span className="underline">1/3rd the price</span>.
      </p>
    </section>
  );
}
