import { useMemo, useState } from "react";
import LocationCard from "../components/LocationCard";
import locations from "../data/locations";

const filters = [
  { label: "All Spots", value: "all" },
  { label: "Falls", value: "Falls" },
  { label: "Tribal Art", value: "Tribal Art" },
  { label: "Wildlife", value: "Wildlife" },
];

export default function Explore() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredLocations = useMemo(
    () =>
      activeFilter === "all"
        ? locations
        : locations.filter((location) => location.category === activeFilter),
    [activeFilter],
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Explore Experiences
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Browse all spots or filter by category to find the perfect eco-tour.
          </p>
        </div>
        <p className="text-sm text-gray-500">
          Showing {filteredLocations.length} experiences
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mb-10">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.value;
          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
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

      {filteredLocations.length === 0 ? (
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-12 text-center">
          <p className="text-xl font-semibold text-gray-800">
            No experiences found for this category.
          </p>
          <p className="mt-3 text-gray-500">
            Select All Spots to return to the full list.
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
