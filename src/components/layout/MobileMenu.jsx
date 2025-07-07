import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import useStore from '../../store/useStore';

const { FiHome, FiShoppingBag, FiPackage, FiUser, FiHeart, FiShoppingCart } = FiIcons;

const MobileMenu = () => {
  const { isMenuOpen, setIsMenuOpen, user } = useStore();

  const menuItems = [
    { icon: FiHome, label: 'Home', path: '/' },
    { icon: FiShoppingBag, label: 'Products', path: '/products' },
    { icon: FiPackage, label: 'Orders', path: '/orders' },
    { icon: FiHeart, label: 'Wishlist', path: '/wishlist' },
    { icon: FiShoppingCart, label: 'Cart', path: '/cart' },
    { icon: FiUser, label: 'Account', path: '/account' }
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl z-50 md:hidden"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700"
                >
                  <SafeIcon icon={FiIcons.FiX} className="w-5 h-5" />
                </button>
              </div>

              {/* User Info */}
              {user && (
                <div className="flex items-center space-x-3 mb-6 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {user.name?.charAt(0) || 'U'}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{user.name || 'User'}</p>
                    <p className="text-sm text-gray-500">{user.email || 'user@example.com'}</p>
                  </div>
                </div>
              )}

              {/* Menu Items */}
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={handleLinkClick}
                    className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    <SafeIcon icon={item.icon} className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </nav>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  ShopCraft v1.0.0
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;