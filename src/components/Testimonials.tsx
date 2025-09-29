export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Birthday Party Host",
      content: "GolfOnTheGo made my husband's 40th birthday unforgettable! The setup was seamless, and our guests had a blast competing on famous courses. Best party entertainment ever!",
      rating: 5,
      image: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Corporate Event Planner",
      content: "We used GolfOnTheGo for our company retreat and it was a huge hit. The team was professional, the equipment top-notch, and it brought everyone together in a fun, competitive way.",
      rating: 5,
      image: "MC"
    },
    {
      name: "Jennifer Davis",
      role: "Wedding Coordinator",
      content: "Added GolfOnTheGo to a bachelor party package and the groom was thrilled! The variety of courses and game modes kept everyone entertained for hours. Highly recommend!",
      rating: 5,
      image: "JD"
    },
    {
      name: "Robert Thompson",
      role: "Country Club Member",
      content: "As an avid golfer, I was skeptical, but the simulator quality exceeded expectations. Perfect for our charity fundraiser - raised more money than any previous event!",
      rating: 5,
      image: "RT"
    },
    {
      name: "Emily Martinez",
      role: "Event Host",
      content: "The kids AND adults loved it at our family reunion! The staff was amazing, teaching beginners and running fun competitions. Worth every penny!",
      rating: 5,
      image: "EM"
    },
    {
      name: "David Wilson",
      role: "Sports Bar Owner",
      content: "Rented for a special event at my bar. The setup was quick, didn't disrupt business, and brought in tons of new customers. Planning to make it a monthly event!",
      rating: 5,
      image: "DW"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-golf-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-golf-green mb-4 leading-tight">
            What Our Customers Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join satisfied customers who&apos;ve made their events unforgettable
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-golf-green rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-golf-green">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8 p-6 bg-white rounded-xl shadow-lg max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-golf-green">50+</p>
              <p className="text-xs sm:text-sm text-gray-500">Golf Courses</p>
            </div>
            <div className="w-16 h-px sm:w-px sm:h-12 bg-gray-300"></div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-golf-green">Professional</p>
              <p className="text-xs sm:text-sm text-gray-500">Equipment</p>
            </div>
            <div className="w-16 h-px sm:w-px sm:h-12 bg-gray-300"></div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-golf-green">Full</p>
              <p className="text-xs sm:text-sm text-gray-500">Event Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}