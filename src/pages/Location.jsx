import { useParams, Link } from "react-router-dom";
import {
  Phone,
  ArrowLeft,
  Calendar,
  ShieldCheck,
  MapPin,
  Sparkles,
  Map,
} from "lucide-react";
import locations from "../data/locations";

export default function Location() {
  const { id } = useParams();
  const spot = locations.find((location) => location.id === id);

  if (!spot) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Experience Not Found
        </h2>
        <p className="text-gray-600 mt-2">
          The trail you are looking for does not exist or has been relocated.
        </p>
        <Link
          to="/explore"
          className="mt-4 inline-block text-emerald-600 font-medium hover:underline"
        >
          Return to Explore
        </Link>
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/${spot.guidePhone}?text=Johar!%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(
    spot.title,
  )}%20experience.`;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Link
        to="/explore"
        className="inline-flex items-center text-emerald-700 font-medium hover:text-emerald-600 mb-6 gap-2"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Explore
      </Link>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          <div className="rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            <img
              src={spot.image || `${import.meta.env.BASE_URL}waterfall.svg`}
              alt={spot.title}
              className="w-full h-96 object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = `${import.meta.env.BASE_URL}waterfall.svg`;
              }}
            />
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-700">
              <Map className="w-4 h-4" /> {spot.category}
            </span>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
              {spot.title}
            </h1>
            <p className="mt-3 text-sm text-gray-500 inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-600" /> {spot.location}
            </p>

            <div className="mt-8 space-y-6 text-gray-600">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Overview
                </h2>
                <p className="mt-3 leading-relaxed">{spot.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  What you will experience
                </h2>
                <ul className="mt-4 space-y-3 list-disc pl-5 text-gray-600">
                  {spot.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-emerald-50 p-5">
                  <p className="text-sm uppercase text-emerald-600 font-semibold">
                    Best time
                  </p>
                  <p className="mt-2 text-gray-900">{spot.bestTime}</p>
                </div>
                <div className="rounded-3xl bg-emerald-50 p-5">
                  <p className="text-sm uppercase text-emerald-600 font-semibold">
                    Ideal duration
                  </p>
                  <p className="mt-2 text-gray-900">{spot.duration}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-[0.2em]">
                  Price
                </p>
                <p className="mt-2 text-3xl font-extrabold text-gray-900">
                  ₹{spot.price}
                </p>
                <p className="text-sm text-gray-500">per day</p>
              </div>
              <div className="rounded-3xl bg-emerald-600 p-3 text-white">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4 text-emerald-600" /> Flexible
                booking slots
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> Direct
                local payouts
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              What’s included
            </h3>
            <ul className="mt-4 space-y-3 text-gray-600 list-disc pl-5">
              {spot.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Local guide
            </p>
            <p className="mt-3 text-lg font-semibold text-gray-900">
              {spot.guideName}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Verified community host
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-emerald-600 px-5 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500"
          >
            <Phone className="w-4 h-4" /> Contact via WhatsApp
          </a>
        </aside>
      </div>
    </div>
  );
}
