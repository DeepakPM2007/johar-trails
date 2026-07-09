import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

export default function LocationCard({ id, title, category, image, price }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
      <img
        src={image || `${import.meta.env.BASE_URL}waterfall.svg`}
        alt={title}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = `${import.meta.env.BASE_URL}waterfall.jpg`;
        }}
      />
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider flex items-center gap-1">
            <Leaf className="w-3 h-3" /> {category}
          </span>
          <span className="text-sm font-medium text-gray-500">
            ₹{price}/day
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <Link
          to={`/location/${id}`}
          className="mt-4 block w-full text-center bg-emerald-50 text-emerald-700 py-2 rounded-lg font-medium hover:bg-emerald-100 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
