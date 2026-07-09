import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-100/80 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 font-bold text-lg text-white"
            >
              <MapPin className="h-5 w-5 text-emerald-400" />
              Johar Trails
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              A zero-commission guide to Jharkhand's eco and cultural
              tourism — connecting travellers directly with local guides,
              homestays, and artisans, with no booking markup in between.
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-wider text-emerald-300">
              Explore
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link to="/explore" className="hover:text-white transition">
                  Experiences & guides
                </Link>
              </li>
              <li>
                <Link to="/culture" className="hover:text-white transition">
                  Culture & heritage
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-wider text-emerald-300">
              Good to know
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Best season: Oct – Mar</li>
              <li>Nearest airport: Ranchi (IXR)</li>
              <li>Booking is direct via WhatsApp — no commission taken</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-emerald-800 pt-6 text-xs text-emerald-100/50">
          Johar Trails — an open, zero-commission eco-tourism resource for
          Jharkhand.
        </div>
      </div>
    </footer>
  );
}
