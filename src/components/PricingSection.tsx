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
        <table className="w-full border border-gray-200 rounded-2xl overflow-hidden shadow-md">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="p-4 text-lg font-semibold border-b border-gray-200">
                Features
              </th>
              {plans.map((plan, idx) => (
                <th
                  key={idx}
                  className={`p-4 text-lg font-semibold text-center border-b border-gray-200 ${
                    plan.highlight
                      ? "bg-purple-50 text-purple-700"
                      : "text-gray-700"
                  }`}
                >
                  {plan.name}
                  <div className="text-sm font-normal text-gray-500">
                    {plan.price}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, rowIdx) => (
              <tr
                key={rowIdx}
                className="hover:bg-gray-50 transition-colors border-t border-gray-200"
              >
                <td className="p-4 font-medium text-gray-700">{feature}</td>
                {plans.map((plan, colIdx) => (
                  <td
                    key={colIdx}
                    className={`p-4 text-center ${
                      plan.highlight ? "bg-purple-50" : ""
                    }`}
                  >
                    {plan.features[rowIdx] ? (
                      <Check
                        className={`inline-block ${
                          plan.highlight
                            ? "text-purple-600"
                            : "text-green-500"
                        }`}
                      />
                    ) : (
                      <X
                        className={`inline-block ${
                          plan.highlight ? "text-purple-400" : "text-red-500"
                        }`}
                      />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-center text-lg mt-8 font-semibold">
        {/* All the features you need — at{" "} */}
        Everything you need in a CRM - for just 1/3rd the cost.
        <span className="">1/3rd the price</span>.
      </p>
    </section>
  );
}
