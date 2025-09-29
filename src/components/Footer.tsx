export default function Footer() {
  return (
    <footer className="bg-golf-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold text-golf-cream mb-4">GolfOnTheGo</h3>
            <p className="text-gray-300 mb-4">
              Bringing premium golf entertainment to your doorstep. Tailored experiences with white-glove service for every event.
            </p>
          </div>

          <div>
            <h4 className="text-golf-cream font-bold mb-4">Perfect For</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Weddings & Receptions</li>
              <li>Graduation Parties</li>
              <li>Sport Watch Parties</li>
              <li>Birthday Celebrations</li>
              <li>Corporate Events</li>
              <li>Charity Fundraisers</li>
              <li>Bachelor/Bachelorette</li>
              <li>Family Reunions</li>
            </ul>
          </div>

          <div>
            <h4 className="text-golf-cream font-bold mb-4">Event Formats</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Closest to Pin</li>
              <li>Hole in One Contest</li>
              <li>Longest Drive</li>
              <li>Tournament Play</li>
              <li>Team Scrambles</li>
              <li>Skills Challenges</li>
              <li>Free Play Mode</li>
              <li>Custom Competitions</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-golf-light-green/30">
          <div className="text-center">
            <p className="text-gray-300">
              © 2025 GolfOnTheGo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}