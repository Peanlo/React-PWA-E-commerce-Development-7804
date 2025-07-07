import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { motion } from 'framer-motion';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoadingSpinner from './components/common/LoadingSpinner';
import PWAInstallPrompt from './components/pwa/PWAInstallPrompt';
import OfflineIndicator from './components/pwa/OfflineIndicator';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const WishlistPage = lazy(() => import('./pages/WishlistPage'));
const OrdersPage = lazy(() => import('./pages/OrdersPage'));
const AccountPage = lazy(() => import('./pages/AccountPage'));

// Stripe configuration
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_demo');

function App() {
  return (
    <Elements stripe={stripePromise}>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <PWAInstallPrompt />
          <OfflineIndicator />
          <Header />
          
          <motion.main 
            className="flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/orders" element={<OrdersPage />} />
                <Route path="/account" element={<AccountPage />} />
              </Routes>
            </Suspense>
          </motion.main>
          
          <Footer />
          <Toaster position="top-right" />
        </div>
      </Router>
    </Elements>
  );
}

export default App;