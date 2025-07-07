import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import useStore from '../../store/useStore';
import SearchBar from '../common/SearchBar';
import MobileMenu from './MobileMenu';

const { FiShoppingCart, FiHeart, FiUser, FiMenu, FiX } = FiIcons;

const Header = () => {
  const location = useLocation();
  const { cart, wishlist, user, isMenuOpen, setIsMenuOpen } = useStore();
  const [showSearch, setShowSearch] = useState(false);

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = wishlist.length;

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">ShopCraft</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`text-sm font-medium transition-colors ${
                isActive('/products') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Products
            </Link>
            <Link
              to="/orders"
              className={`text-sm font-medium transition-colors ${
                isActive('/orders') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Orders
            </Link>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <SearchBar />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Search Toggle - Mobile */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-blue-600"
              onClick={() => setShowSearch(!showSearch)}
            >
              <SafeIcon icon={FiIcons.FiSearch} className="w-5 h-5" />
            </button>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <SafeIcon icon={FiHeart} className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <SafeIcon icon={FiShoppingCart} className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* User Account */}
            <Link
              to="/account"
              className="hidden md:flex items-center space-x-2 p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <SafeIcon icon={FiUser} className="w-5 h-5" />
              <span className="text-sm">{user?.name || 'Account'}</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-gray-200 py-4"
            >
              <SearchBar />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <MobileMenu />
    </header>
  );
};

export default Header;