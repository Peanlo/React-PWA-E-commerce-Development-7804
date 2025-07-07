import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from './SafeIcon';
import useStore from '../../store/useStore';

const { FiSearch } = FiIcons;

const SearchBar = () => {
  const navigate = useNavigate();
  const { searchQuery, setSearchQuery } = useStore();
  const [localQuery, setLocalQuery] = useState(searchQuery);

  useEffect(() => {
    setLocalQuery(searchQuery);
  }, [searchQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(localQuery);
    if (localQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(localQuery)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative">
        <input
          type="text"
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <SafeIcon
          icon={FiSearch}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
        />
      </div>
    </form>
  );
};

export default SearchBar;