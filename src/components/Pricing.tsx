'use client'

import { useState } from 'react'

export default function Pricing() {
  const [selectedPackage, setSelectedPackage] = useState(1)

  const packages = [
    {
      id: 0,
      name: "Starter",
      price: "$499",
      duration: "4 hours",
      features: [
        "1 Golf Simulator",
        "25+ Golf Courses",
        "Basic Game Modes",
        "Setup & Breakdown",
        "On-site Support"
      ],
      popular: false
    },
    {
      id: 1,
      name: "Premium",
      price: "$799",
      duration: "6 hours",
      features: [
        "1 Golf Simulator",
        "50+ Golf Courses",
        "All Game Modes",
        "Setup & Breakdown",
        "Dedicated Event Host",
        "Tournament Scoring",
        "Prize Package"
      ],
      popular: true
    },
    {
      id: 2,
      name: "Elite",
      price: "$1,299",
      duration: "8 hours",
      features: [
        "2 Golf Simulators",
        "50+ Golf Courses",
        "All Game Modes",
        "Setup & Breakdown",
        "2 Event Hosts",
        "Tournament Management",
        "Premium Prize Package",
        "Custom Branding",
        "Video Highlights"
      ],
      popular: false
    },
    {
      id: 3,
      name: "Corporate",
      price: "Custom",
      duration: "Flexible",
      features: [
        "3+ Golf Simulators",
        "50+ Golf Courses",
        "All Game Modes",
        "Full Day Support",
        "Multiple Event Hosts",
        "Corporate Branding",
        "Catering Coordination",
        "Team Building Activities",
        "Executive Reporting",
        "Multi-Location Support"
      ],
      popular: false,
      isCustom: true
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-golf-green mb-4 leading-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect package for your event size and budget
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                pkg.popular
                  ? 'bg-golf-green text-white shadow-2xl transform scale-105'
                  : 'bg-white border-2 border-gray-200 hover:border-golf-light-green'
              }`}
              onMouseEnter={() => setSelectedPackage(pkg.id)}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-golf-cream text-golf-green px-6 py-2 rounded-full text-xs font-bold shadow-lg border-2 border-white">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-golf-cream' : 'text-golf-green'}`}>
                  {pkg.name}
                </h3>
                <div className="flex items-baseline justify-center">
                  <span className={`text-5xl font-bold ${pkg.popular ? 'text-white' : 'text-golf-green'}`}>
                    {pkg.price}
                  </span>
                  {!pkg.isCustom && (
                    <span className={`ml-2 ${pkg.popular ? 'text-golf-cream' : 'text-gray-500'}`}>
                      /{pkg.duration}
                    </span>
                  )}
                </div>
                {pkg.isCustom && (
                  <p className={`text-sm mt-2 ${pkg.popular ? 'text-golf-cream' : 'text-gray-500'}`}>
                    Consultation Required
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                        pkg.popular ? 'text-golf-cream' : 'text-golf-light-green'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={pkg.popular ? 'text-white' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-full font-bold transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-golf-cream text-golf-green hover:bg-white'
                    : 'bg-golf-green text-white hover:bg-golf-light-green'
                }`}
              >
                Book This Package
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-golf-cream rounded-2xl p-8">
          <p className="text-2xl font-bold text-golf-green mb-4">
            Every Event is Unique
          </p>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            These are starting prices. During your consultation call, we'll discuss your specific needs
            and create a custom package that's perfect for your event.
          </p>
          <a href="#contact" className="bg-golf-green text-white px-8 py-3 rounded-full font-bold hover:bg-golf-light-green transition-colors inline-block">
            Schedule Your Consultation →
          </a>
        </div>
      </div>
    </section>
  )
}