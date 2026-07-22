import { useMemo, useState } from "react";
import LocationCard from "../components/LocationCard";
import locations from "../data/locations";

const categoryFilters = [
  { label: "All Spots", value: "all" },
  { label: "Falls", value: "Falls" },
  { label: "Tribal Art", value: "Tribal Art" },
  { label: "Wildlife", value: "Wildlife" },
  { label: "Hill Station", value: "Hill Station" },
];

const stateFilters = [
  { label: "All States", value: "all" },
  { label: "Jharkhand", value: "Jharkhand" },
  { label: "Tamil Nadu", value: "Tamil Nadu" },
];

export default function Explore() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeState, setActiveState] = useState("all");

  const filteredLocations = useMemo(() => {
    return locations.filter((location) => {
      const categoryMatch = activeCategory === "all" || location.category === activeCategory;
      const stateMatch = activeState === "all" || location.location.includes(activeState);
      return categoryMatch && stateMatch;
    });
  }, [activeCategory, activeState]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Explore Experiences
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Browse all spots or filter by category and state to find the perfect eco-tour.
          </p>
        </div>
        <p className="text-sm text-gray-500">
          Showing {filteredLocations.length} experiences
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-10">
        <div className="flex flex-wrap gap-2">
          {stateFilters.map((filter) => {
            const isActive = activeState === filter.value;
            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveState(filter.value)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-emerald-800 text-white shadow-sm"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="hidden md:block w-px bg-gray-200"></div>

        <div className="flex flex-wrap gap-2">
          {categoryFilters.map((filter) => {
            const isActive = activeCategory === filter.value;
            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveCategory(filter.value)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      {filteredLocations.length === 0 ? (
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-12 text-center">
          <p className="text-xl font-semibold text-gray-800">
            No experiences found for these filters.
          </p>
          <p className="mt-3 text-gray-500">
            Try changing the category or state to see more results.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredLocations.map((loc) => (
            <LocationCard key={loc.id} {...loc} />
          ))}
        </div>
      )}
    </div>
  );
}
