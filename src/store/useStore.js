import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set, get) => ({
      // Cart state
      cart: [],
      addToCart: (product) => {
        const existingItem = get().cart.find(item => item.id === product.id);
        if (existingItem) {
          set(state => ({
            cart: state.cart.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          }));
        } else {
          set(state => ({
            cart: [...state.cart, { ...product, quantity: 1 }]
          }));
        }
      },
      removeFromCart: (productId) => {
        set(state => ({
          cart: state.cart.filter(item => item.id !== productId)
        }));
      },
      updateQuantity: (productId, quantity) => {
        if (quantity === 0) {
          get().removeFromCart(productId);
        } else {
          set(state => ({
            cart: state.cart.map(item =>
              item.id === productId
                ? { ...item, quantity }
                : item
            )
          }));
        }
      },
      clearCart: () => set({ cart: [] }),
      
      // Wishlist state
      wishlist: [],
      addToWishlist: (product) => {
        const exists = get().wishlist.find(item => item.id === product.id);
        if (!exists) {
          set(state => ({
            wishlist: [...state.wishlist, product]
          }));
        }
      },
      removeFromWishlist: (productId) => {
        set(state => ({
          wishlist: state.wishlist.filter(item => item.id !== productId)
        }));
      },
      
      // Orders state
      orders: [],
      addOrder: (order) => {
        set(state => ({
          orders: [order, ...state.orders]
        }));
      },
      
      // User state
      user: null,
      setUser: (user) => set({ user }),
      
      // Search state
      searchQuery: '',
      setSearchQuery: (query) => set({ searchQuery: query }),
      
      // Filters state
      filters: {
        category: '',
        priceRange: [0, 1000],
        rating: 0,
        inStock: false
      },
      setFilters: (filters) => set({ filters }),
      
      // UI state
      isMenuOpen: false,
      setIsMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
      
      // PWA state
      isInstallPromptShown: false,
      setIsInstallPromptShown: (shown) => set({ isInstallPromptShown: shown }),
      
      // Network state
      isOnline: navigator.onLine,
      setIsOnline: (online) => set({ isOnline: online })
    }),
    {
      name: 'shopcraft-store',
      partialize: (state) => ({
        cart: state.cart,
        wishlist: state.wishlist,
        orders: state.orders,
        user: state.user,
        isInstallPromptShown: state.isInstallPromptShown
      })
    }
  )
);

export default useStore;