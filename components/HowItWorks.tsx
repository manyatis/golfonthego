export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Initial Consultation",
      description: "Call us to discuss your event needs and we'll create a custom package with pricing",
      icon: "📞"
    },
    {
      number: "2",
      title: "Space Assessment",
      description: "We visit your venue to check the space and plan the perfect setup for your event",
      icon: "📏"
    },
    {
      number: "3",
      title: "Event Day Setup & Support",
      description: "Our team arrives early to set up and provides full support throughout your event",
      icon: "🎯"
    },
    {
      number: "4",
      title: "Enjoy & We Handle The Rest",
      description: "Focus on your guests while we manage competitions, games, and complete cleanup",
      icon: "✨"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-golf-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-golf-green mb-4 leading-tight">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Four simple steps to bring professional golf entertainment to your event
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/3 left-full w-full h-0.5 bg-golf-light-green opacity-30 z-0" />
              )}

              <div className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-bold text-golf-cream bg-golf-green rounded-full w-12 h-12 flex items-center justify-center">
                    {step.number}
                  </span>
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-golf-green mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center p-6 bg-white rounded-xl shadow-lg max-w-lg mx-auto">
            <div className="text-center sm:text-left mb-4 sm:mb-0 sm:mr-8">
              <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mb-1">Average Setup Time</p>
              <p className="text-2xl sm:text-3xl font-bold text-golf-green">90 Minutes</p>
            </div>
            <div className="w-16 h-px sm:w-px sm:h-16 bg-gray-300 mb-4 sm:mb-0 sm:mx-4"></div>
            <div className="text-center sm:text-left sm:ml-8">
              <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mb-1">Rental Duration</p>
              <p className="text-2xl sm:text-3xl font-bold text-golf-green">4-8 Hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}