import { Palette, Users, CalendarDays, HeartHandshake } from "lucide-react";
import { communities, artForms, festivals, etiquette } from "../data/culture";

export default function Culture() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-emerald-900 text-white py-24 px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-800 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-200">
          <Palette className="w-4 h-4" /> Culture & Heritage
        </span>
        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight">
          The people behind the paintings
        </h1>
        <p className="mt-6 text-lg text-emerald-100 max-w-2xl mx-auto">
          Jharkhand's identity is inseparable from its indigenous
          communities — their festivals, sacred groves, and the mural
          traditions still painted straight onto mud-and-lime walls, not
          just displayed behind museum glass.
        </p>
      </div>

      {/* Communities */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center gap-2 mb-2">
          <Users className="w-5 h-5 text-emerald-600" />
          <h2 className="text-2xl font-bold text-gray-900">
            Indigenous communities
          </h2>
        </div>
        <p className="text-gray-600 max-w-2xl mb-8">
          Jharkhand is home to more than thirty tribal communities. These four
          have shaped much of the state's visible cultural life.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {communities.map((c) => (
            <div
              key={c.name}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100"
            >
              <img
                src={c.image}
                alt={c.name}
                className="w-full h-40 object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `${import.meta.env.BASE_URL}heritage-3.svg`;
                }}
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {c.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {c.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Art forms */}
      <div className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-center gap-2 mb-2">
            <Palette className="w-5 h-5 text-emerald-600" />
            <h2 className="text-2xl font-bold text-gray-900">Art forms</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mb-8">
            From mud-wall murals to masked dance, these traditions are still
            practised — several of them are bookable as hands-on
            experiences under Explore.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {artForms.map((a) => (
              <div
                key={a.name}
                className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm flex flex-col sm:flex-row"
              >
                <img
                  src={a.image}
                  alt={a.name}
                  className="w-full sm:w-48 h-48 sm:h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `${import.meta.env.BASE_URL}heritage-3.svg`;
                  }}
                />
                <div className="p-6 flex-1">
                  <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                    {a.category}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-gray-900">
                    {a.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {a.description}
                  </p>
                  <p className="mt-3 text-xs text-gray-400">{a.region}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Festival calendar */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center gap-2 mb-2">
          <CalendarDays className="w-5 h-5 text-emerald-600" />
          <h2 className="text-2xl font-bold text-gray-900">
            Festival calendar
          </h2>
        </div>
        <p className="text-gray-600 max-w-2xl mb-8">
          Time a visit around a festival and you'll see the same art and
          music that fills Jharkhand's museums still being made in its
          villages.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {festivals.map((f) => (
            <div
              key={f.name}
              className="rounded-xl bg-emerald-50 p-6 border border-emerald-100"
            >
              <h3 className="text-lg font-bold text-gray-900">{f.name}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-emerald-600">
                {f.season}
              </p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {f.note}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Etiquette */}
      <div className="bg-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <div className="flex items-center gap-2 mb-2">
            <HeartHandshake className="w-5 h-5 text-emerald-300" />
            <h2 className="text-2xl font-bold">
              Visiting respectfully
            </h2>
          </div>
          <p className="text-emerald-100 max-w-2xl mb-8">
            A few habits that keep tourism a good thing for the communities
            who host it.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {etiquette.map((tip) => (
              <li
                key={tip}
                className="bg-emerald-800/60 rounded-xl p-5 text-sm text-emerald-50 leading-relaxed"
              >
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
