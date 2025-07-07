# ShopCraft - E-commerce Progressive Web App

A modern, feature-rich e-commerce Progressive Web App built with React, Tailwind CSS, and advanced PWA capabilities.

## 🚀 Features

### Core E-commerce Features
- **Product Catalog** - Browse products with filtering and search
- **Shopping Cart** - Add, remove, and manage cart items
- **Wishlist** - Save products for later
- **Checkout Process** - Complete order flow with Stripe integration
- **Order Management** - Track and manage orders
- **User Account** - Profile management and preferences

### Progressive Web App Features
- **Offline Functionality** - Works without internet connection
- **Installable** - Can be installed on devices like a native app
- **Push Notifications** - Receive updates and offers
- **Service Worker** - Advanced caching and background sync
- **App Shell Architecture** - Fast loading and smooth performance
- **Responsive Design** - Works on all devices and screen sizes

### Advanced Features
- **Stripe Payment Integration** - Secure payment processing
- **Real-time Inventory** - Stock management and availability
- **Review System** - Customer reviews and ratings
- **Advanced Search** - Filter by category, price, rating, etc.
- **Smooth Animations** - Framer Motion powered transitions
- **State Management** - Zustand for efficient state handling

## 🛠️ Technology Stack

- **Frontend**: React 18, Tailwind CSS, Framer Motion
- **State Management**: Zustand with persistence
- **Payment Processing**: Stripe
- **PWA**: Vite PWA plugin, Workbox
- **Build Tool**: Vite
- **Icons**: React Icons
- **Notifications**: React Hot Toast
- **Date Handling**: date-fns

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ecommerce-pwa
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add:
```env
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here
```

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## 🔧 Configuration

### PWA Configuration
The app is configured as a PWA with:
- **Service Worker**: Automatic caching and offline support
- **Web App Manifest**: Installable app configuration
- **Offline Page**: Custom offline experience
- **Background Sync**: Data synchronization when back online

### Stripe Configuration
1. Get your Stripe publishable key from [Stripe Dashboard](https://dashboard.stripe.com)
2. Add it to your `.env` file
3. The app includes a demo checkout flow

## 📱 PWA Features

### Installation
- Users can install the app from their browser
- Works on desktop and mobile devices
- Provides native app-like experience

### Offline Functionality
- Products and cart data cached for offline viewing
- Offline page shown when no connection
- Background sync for order processing

### Performance
- App shell architecture for fast loading
- Image optimization and lazy loading
- Efficient state management and caching

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3B82F6)
- **Secondary**: Purple (#8B5CF6)
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Error**: Red (#EF4444)

### Typography
- **Font Family**: System fonts for optimal performance
- **Headings**: Bold, hierarchical sizing
- **Body**: Readable, accessible text

### Components
- **Responsive**: Mobile-first design approach
- **Accessible**: WCAG compliant components
- **Consistent**: Unified design language

## 🔐 Security

- **Secure Payments**: Stripe handles all payment processing
- **Data Protection**: No sensitive data stored locally
- **HTTPS**: Required for PWA features
- **Input Validation**: Form validation and sanitization

## 📊 Performance

- **Lighthouse Score**: Optimized for all metrics
- **Core Web Vitals**: Excellent performance scores
- **Bundle Size**: Optimized with code splitting
- **Caching Strategy**: Efficient caching for fast loads

## 🚀 Deployment

The app can be deployed to any static hosting service:

### Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

### Vercel
```bash
npm run build
# Deploy the 'dist' folder
```

### GitHub Pages
```bash
npm run build
# Deploy the 'dist' folder to gh-pages branch
```

## 🧪 Testing

Run tests:
```bash
npm run test
```

Run linting:
```bash
npm run lint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Stripe** - For secure payment processing
- **Workbox** - For PWA capabilities
- **Framer Motion** - For smooth animations

## 📞 Support

For support, email support@shopcraft.com or join our community Discord.

---

Built with ❤️ by the ShopCraft Team