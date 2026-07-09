import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="bg-emerald-900 text-white py-32 px-6 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6">
          Discover the Untouched <span className="text-emerald-400">Jharkhand</span>
        </h1>
        <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto mb-10">
          Connect directly with local tribal guides, explore sacred waterfalls, and experience eco-tourism that gives back to the community.
        </p>
        <Link 
          to="/explore" 
          className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition transform hover:-translate-y-1"
        >
          Start Exploring
        </Link>
      </div>
      
      {/* Value Props */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-white rounded-xl shadow-sm">
          <h3 className="text-xl font-bold mb-2">Zero Commission</h3>
          <p className="text-gray-600">100% of your booking fee goes directly to the local guides and homestays.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-sm">
          <h3 className="text-xl font-bold mb-2">Verified Eco-Guides</h3>
          <p className="text-gray-600">Travel safely with locals who know the forests and tribal history intimately.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-sm">
          <h3 className="text-xl font-bold mb-2">Sustainable Travel</h3>
          <p className="text-gray-600">We monitor ecological capacity to ensure nature stays pristine.</p>
        </div>
      </div>
    </div>
  );
}