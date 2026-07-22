import { Link, NavLink } from 'react-router-dom';
import { MapPin, Menu, X, LogOut } from 'lucide-react';
import { useState } from 'react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/explore', label: 'Explore' },
  { to: '/culture', label: 'Culture' },
];

export default function Navbar({ onLogout }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-emerald-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2 font-bold text-xl">
            <MapPin className="h-6 w-6 text-emerald-400" />
            <span>Johar Trails</span>
          </Link>

          <div className="hidden sm:flex items-center space-x-6">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `transition ${isActive ? 'text-emerald-300 font-semibold' : 'hover:text-emerald-300'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <button 
              onClick={onLogout}
              className="flex items-center gap-1 text-sm font-medium bg-emerald-700 hover:bg-emerald-600 px-3 py-1.5 rounded-lg transition"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>

          <button
            className="sm:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="sm:hidden flex flex-col gap-3 pb-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `transition ${isActive ? 'text-emerald-300 font-semibold' : 'hover:text-emerald-300'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <button 
              onClick={() => {
                setOpen(false);
                onLogout();
              }}
              className="flex items-center gap-1 text-sm font-medium text-left transition hover:text-emerald-300"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
