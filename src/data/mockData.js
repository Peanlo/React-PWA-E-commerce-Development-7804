export const categories = [
  { id: 1, name: 'Electronics', slug: 'electronics' },
  { id: 2, name: 'Clothing', slug: 'clothing' },
  { id: 3, name: 'Home & Garden', slug: 'home-garden' },
  { id: 4, name: 'Sports', slug: 'sports' },
  { id: 5, name: 'Books', slug: 'books' },
  { id: 6, name: 'Beauty', slug: 'beauty' }
];

export const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    category: 'Electronics',
    rating: 4.5,
    reviews: 128,
    description: 'Premium wireless headphones with noise cancellation and 30-hour battery life.',
    features: ['Noise Cancellation', '30h Battery', 'Bluetooth 5.0', 'Quick Charge'],
    inStock: true,
    stock: 15
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    category: 'Electronics',
    rating: 4.3,
    reviews: 89,
    description: 'Advanced fitness tracking with heart rate monitoring and GPS.',
    features: ['GPS', 'Heart Rate Monitor', 'Water Resistant', '7-day Battery'],
    inStock: true,
    stock: 8
  },
  {
    id: 3,
    name: 'Denim Jacket',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
    category: 'Clothing',
    rating: 4.7,
    reviews: 156,
    description: 'Classic denim jacket with modern fit and premium quality.',
    features: ['100% Cotton', 'Classic Fit', 'Multiple Pockets', 'Machine Washable'],
    inStock: true,
    stock: 22
  },
  {
    id: 4,
    name: 'Coffee Maker',
    price: 149.99,
    originalPrice: 179.99,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop',
    category: 'Home & Garden',
    rating: 4.4,
    reviews: 203,
    description: 'Programmable coffee maker with built-in grinder and thermal carafe.',
    features: ['Built-in Grinder', 'Programmable', 'Thermal Carafe', '12-Cup Capacity'],
    inStock: true,
    stock: 12
  },
  {
    id: 5,
    name: 'Running Shoes',
    price: 129.99,
    originalPrice: 159.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    category: 'Sports',
    rating: 4.6,
    reviews: 342,
    description: 'Lightweight running shoes with advanced cushioning technology.',
    features: ['Breathable Mesh', 'Cushioned Sole', 'Lightweight', 'Durable'],
    inStock: true,
    stock: 35
  },
  {
    id: 6,
    name: 'Skincare Set',
    price: 59.99,
    originalPrice: 79.99,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
    category: 'Beauty',
    rating: 4.8,
    reviews: 89,
    description: 'Complete skincare routine with cleanser, toner, and moisturizer.',
    features: ['All Skin Types', 'Natural Ingredients', 'Dermatologist Tested', 'Cruelty Free'],
    inStock: false,
    stock: 0
  },
  {
    id: 7,
    name: 'Bluetooth Speaker',
    price: 69.99,
    originalPrice: 89.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
    category: 'Electronics',
    rating: 4.2,
    reviews: 67,
    description: 'Portable Bluetooth speaker with 360-degree sound and waterproof design.',
    features: ['360° Sound', 'Waterproof', '12h Battery', 'Voice Assistant'],
    inStock: true,
    stock: 18
  },
  {
    id: 8,
    name: 'Yoga Mat',
    price: 39.99,
    originalPrice: 49.99,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
    category: 'Sports',
    rating: 4.5,
    reviews: 124,
    description: 'Premium yoga mat with superior grip and cushioning.',
    features: ['Non-Slip Surface', 'Eco-Friendly', 'Extra Thick', 'Carry Strap'],
    inStock: true,
    stock: 28
  }
];

export const featuredProducts = products.slice(0, 4);

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    comment: 'Amazing quality and fast delivery! Will definitely shop here again.',
    product: 'Wireless Headphones'
  },
  {
    id: 2,
    name: 'Mike Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    comment: 'Great customer service and the app works perfectly offline too!',
    product: 'Smart Watch'
  },
  {
    id: 3,
    name: 'Emma Davis',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    rating: 4,
    comment: 'Love the user interface and the PWA features. Very convenient!',
    product: 'Denim Jacket'
  }
];