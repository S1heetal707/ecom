import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['MEN', 'WOMEN', 'KIDS', 'BEAUTY', 'SHOES'];

  return (
    <header className="shadow-md sticky top-0 bg-white z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-800">BRAND</h1>
          </div>

          {/* Categories */}
          <nav className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/category/${category.toLowerCase()}`} // Redirects to the category page
                className="text-sm font-medium text-gray-700 hover:text-black hover:underline transition-colors"
              >
                {category}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="relative w-64">
            <div className="flex items-center border border-gray-300 rounded-md py-1 px-2">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full text-sm focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="h-4 w-4 text-gray-500" />
            </div>
          </div>

          {/* Authentication */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/signup" className="text-sm font-medium text-gray-700 hover:text-black">
              SIGNUP
            </Link>
            <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-black">
              LOGIN
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden rounded-md p-2 text-gray-500 hover:bg-gray-100 focus:outline-none">
            <span className="sr-only">Open menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
