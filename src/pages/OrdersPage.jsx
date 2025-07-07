import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';
import useStore from '../store/useStore';

const { FiPackage, FiTruck, FiCheck, FiClock, FiEye, FiRefreshCw } = FiIcons;

const OrdersPage = () => {
  const { orders } = useStore();
  const [selectedOrder, setSelectedOrder] = useState(null);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed':
        return FiCheck;
      case 'processing':
        return FiClock;
      case 'shipped':
        return FiTruck;
      case 'delivered':
        return FiPackage;
      default:
        return FiClock;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'text-green-600 bg-green-100';
      case 'processing':
        return 'text-yellow-600 bg-yellow-100';
      case 'shipped':
        return 'text-blue-600 bg-blue-100';
      case 'delivered':
        return 'text-purple-600 bg-purple-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <SafeIcon icon={FiPackage} className="w-24 h-24 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No orders yet</h2>
          <p className="text-gray-600 mb-8">Start shopping to see your orders here!</p>
          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
          <p className="text-gray-600 mt-2">{orders.length} order(s) found</p>
        </div>

        <div className="space-y-6">
          {orders.map((order) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Order #{order.id}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Placed on {format(new Date(order.date), 'PPP')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                      <SafeIcon icon={getStatusIcon(order.status)} className="w-4 h-4" />
                      <span className="capitalize">{order.status}</span>
                    </div>
                    
                    <button
                      onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <SafeIcon icon={FiEye} className="w-4 h-4" />
                      <span className="text-sm">View Details</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>{order.items.length} item(s)</span>
                  <span className="text-lg font-bold text-gray-900">${order.total.toFixed(2)}</span>
                </div>

                {/* Order Items Preview */}
                <div className="flex space-x-3 mb-4">
                  {order.items.slice(0, 3).map((item) => (
                    <img
                      key={item.id}
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  ))}
                  {order.items.length > 3 && (
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-sm text-gray-600">+{order.items.length - 3}</span>
                    </div>
                  )}
                </div>

                {/* Order Details */}
                {selectedOrder === order.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-gray-200 pt-4 mt-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Items */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Items</h4>
                        <div className="space-y-3">
                          {order.items.map((item) => (
                            <div key={item.id} className="flex items-center space-x-3">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-12 h-12 object-cover rounded"
                              />
                              <div className="flex-1">
                                <h5 className="font-medium text-gray-900">{item.name}</h5>
                                <p className="text-sm text-gray-600">
                                  Qty: {item.quantity} × ${item.price}
                                </p>
                              </div>
                              <span className="font-medium text-gray-900">
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Shipping & Payment */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Shipping Address</h4>
                        <div className="text-sm text-gray-600 mb-4">
                          <p>{order.shippingAddress.firstName} {order.shippingAddress.lastName}</p>
                          <p>{order.shippingAddress.address}</p>
                          <p>
                            {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                          </p>
                          <p>{order.shippingAddress.country}</p>
                        </div>

                        <h4 className="font-semibold text-gray-900 mb-3">Payment Method</h4>
                        <div className="text-sm text-gray-600">
                          <p>Card ending in {order.paymentMethod.last4}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-3 mt-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    <SafeIcon icon={FiTruck} className="w-4 h-4" />
                    <span>Track Order</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                    <SafeIcon icon={FiRefreshCw} className="w-4 h-4" />
                    <span>Reorder</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;