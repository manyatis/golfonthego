'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    guestCount: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto URL with pre-filled information
    const subject = encodeURIComponent(`GolfOnTheGo Event Inquiry - ${formData.eventType || 'Event'} on ${formData.eventDate || 'TBD'}`)
    const body = encodeURIComponent(`Hello,

I'm interested in booking GolfOnTheGo for my upcoming event. Here are the details:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event Date: ${formData.eventDate || 'To be determined'}
Event Type: ${formData.eventType || 'Not specified'}
Estimated Guest Count: ${formData.guestCount || 'Not specified'}

Additional Details:
${formData.message || 'No additional details provided'}

Please contact me to discuss pricing and availability.

Best regards,
${formData.name}`)

    const mailtoUrl = `mailto:mikejohnmaniatis@gmail.com?subject=${subject}&body=${body}`

    // Open email client
    window.location.href = mailtoUrl
  }

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-golf-green mb-6 leading-tight">
              Ready to Book Your Event?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Fill out the form and we'll get back to you within 24 hours to discuss your perfect golf entertainment package.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-golf-cream rounded-full flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-golf-green mb-1">Service Area</h3>
                  <p className="text-gray-600">
                    We serve the entire metropolitan area and surrounding suburbs within 50 miles
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-golf-cream rounded-full flex items-center justify-center">
                    <span className="text-2xl">📞</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-golf-green mb-1">Call Us</h3>
                  <p className="text-gray-600">
                    (555) 123-GOLF<br />
                    Monday - Sunday: 8am - 8pm
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-golf-cream rounded-full flex items-center justify-center">
                    <span className="text-2xl">✉️</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-golf-green mb-1">Email</h3>
                  <p className="text-gray-600">
                    mikejohnmaniatis@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-golf-cream rounded-xl p-6">
              <h3 className="font-bold text-golf-green mb-3">Quick Response Guarantee</h3>
              <p className="text-gray-700">
                We respond to all inquiries within 24 hours. For last-minute bookings (within 48 hours), call us directly for immediate assistance.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-golf-green to-golf-light-green rounded-2xl p-8 text-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-golf-cream text-sm font-bold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-golf-cream"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-golf-cream text-sm font-bold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-golf-cream"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-golf-cream text-sm font-bold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-golf-cream"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-golf-cream text-sm font-bold mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white focus:outline-none focus:border-golf-cream"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-golf-cream text-sm font-bold mb-2">
                    Event Type *
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white focus:outline-none focus:border-golf-cream"
                  >
                    <option value="" className="text-golf-green">Select event type</option>
                    <option value="birthday" className="text-golf-green">Birthday Party</option>
                    <option value="corporate" className="text-golf-green">Corporate Event</option>
                    <option value="wedding" className="text-golf-green">Wedding/Bachelor Party</option>
                    <option value="fundraiser" className="text-golf-green">Fundraiser</option>
                    <option value="other" className="text-golf-green">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-golf-cream text-sm font-bold mb-2">
                    Estimated Guests
                  </label>
                  <input
                    type="number"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-golf-cream"
                    placeholder="25"
                  />
                </div>
              </div>

              <div>
                <label className="block text-golf-cream text-sm font-bold mb-2">
                  Additional Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-golf-cream"
                  placeholder="Tell us about your event, special requests, or questions..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-golf-cream text-golf-green py-3 px-6 rounded-full font-bold text-lg hover:bg-white transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Send Booking Request
              </button>

              <p className="text-xs text-golf-cream text-center">
                * Required fields. We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}