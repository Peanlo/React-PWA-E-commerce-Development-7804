import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import useStore from '../../store/useStore';

const { FiWifiOff, FiWifi } = FiIcons;

const OfflineIndicator = () => {
  const { isOnline, setIsOnline } = useStore();

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [setIsOnline]);

  return (
    <AnimatePresence>
      {!isOnline && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          className="fixed top-16 left-0 right-0 z-40 bg-red-500 text-white py-2 px-4 text-center text-sm font-medium"
        >
          <SafeIcon icon={FiWifiOff} className="w-4 h-4 inline mr-2" />
          You're offline. Some features may be limited.
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OfflineIndicator;