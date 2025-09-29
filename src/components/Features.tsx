export default function Features() {
  const features = [
    {
      title: "Pre-Event Space Check",
      description: "We visit your venue beforehand to ensure perfect setup and discuss your specific needs",
      icon: "📏"
    },
    {
      title: "Tailored Experience",
      description: "Custom setup for your specific event - corporate gatherings, team building, weddings, fundraisers & more",
      icon: "🎯"
    },
    {
      title: "White-Glove Support",
      description: "Dedicated event staff manages everything from setup to competitions to breakdown",
      icon: "🤵"
    },
    {
      title: "Contest Modes",
      description: "Closest to pin, hole-in-one challenges, longest drive, and custom tournament formats",
      icon: "🏆"
    },
    {
      title: "50+ Golf Courses",
      description: "Play world-famous courses like Pebble Beach, St. Andrews, and Augusta National",
      icon: "⛳"
    },
    {
      title: "All Equipment Included",
      description: "Premium clubs, balls, and accessories provided - works indoors or outdoors",
      icon: "🎒"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-golf-green mb-4 leading-tight">
            Why Choose GolfOnTheGo?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform any space into a premium golf experience with our state-of-the-art simulators
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-gradient-to-br from-golf-cream to-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-golf-green mb-3 group-hover:text-golf-light-green transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-golf-green rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Perfect For Any Event</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="mr-3">✓</span> Corporate Events & Team Building
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span> Client Entertainment
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span> Weddings & Bachelor Parties
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span> Fundraisers & Charity Events
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span> Birthday & Graduation Parties
                </li>
              </ul>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-golf-cream mb-2">100%</p>
              <p className="text-xl">Satisfaction Guaranteed</p>
              <p className="mt-4 text-sm opacity-90">
                If you&apos;re not completely satisfied, we&apos;ll make it right
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}