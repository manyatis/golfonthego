'use client'

import { useState } from 'react'

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-golf-green via-golf-light-green to-golf-green opacity-90 z-10"></div>

      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up leading-tight">
          Bring the Golf Course
          <span className="block text-golf-cream">To Your Party!</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 leading-relaxed">
          Tailored golf simulator experiences with white-glove support for corporate events, weddings, fundraisers & more
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400 max-w-md sm:max-w-none mx-auto">
          <a href="#contact" className="bg-golf-cream text-golf-green px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white transform hover:scale-105 transition-all duration-300 shadow-xl inline-block text-center">
            Book Your Event
          </a>
          <a href="#pricing" className="border-2 border-golf-cream text-golf-cream px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-golf-cream hover:text-golf-green transform hover:scale-105 transition-all duration-300 inline-block text-center">
            View Packages
          </a>
        </div>

        <p className="mt-6 text-golf-cream animate-fade-in-up animation-delay-500 text-sm sm:text-base">
          <span className="block sm:inline">✓ Space Assessment</span>
          <span className="hidden sm:inline"> &nbsp; </span>
          <span className="block sm:inline">✓ Custom Setup</span>
          <span className="hidden sm:inline"> &nbsp; </span>
          <span className="block sm:inline">✓ Full Event Support</span>
        </p>

        <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-4 sm:gap-8 max-w-xs sm:max-w-lg mx-auto animate-fade-in-up animation-delay-600">
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-golf-cream">50+</p>
            <p className="text-xs sm:text-sm">Golf Courses</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-golf-cream">Premium</p>
            <p className="text-xs sm:text-sm">Equipment</p>
          </div>
        </div>
      </div>
    </section>
  )
}