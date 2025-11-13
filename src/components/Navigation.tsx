import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { path: '/', label: 'HOME' },
    { path: '/services', label: 'SERVICES' },
    { path: '/about', label: 'ABOUT' },
    { path: '/insights', label: 'INSIGHTS' },
    { path: '/careers', label: 'CAREERS' },
    { path: '/contact', label: 'CONTACT' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <span className="text-2xl lg:text-3xl font-bold">
              <span className="text-gray-900">CA</span>
              <span className="text-amber-500"> Mukander Beniwal</span>
            </span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`hidden md:flex items-center space-x-8 ${isOpen ? 'flex flex-col absolute top-20 left-0 right-0 bg-white p-4 space-x-0 space-y-2' : ''}`}>
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-amber-600 border-b-2 border-amber-600 pb-1'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="bg-slate-800 text-white px-6 py-2 rounded hover:bg-slate-900 transition-colors font-medium ml-4">
              GET QUOTE
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 font-medium transition-all ${
                  isActive(link.path)
                    ? 'text-amber-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full bg-slate-800 text-white px-6 py-2 rounded hover:bg-slate-900 transition-colors font-medium mt-2">
              GET QUOTE
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
