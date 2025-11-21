import '@fontsource/poppins/400.css'; // Regular
import '@fontsource/poppins/500.css'; // Medium
import '@fontsource/poppins/600.css'; // Semibold
import '@fontsource/poppins/700.css'; // Bold
import React, { Component, useEffect, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import { CartProvider } from './contexts/CartContext';
import CartSidebar from './components/section-components/cart_sidebar/CartSidebar';
import LoadingSpinner from './components/global-components/loading_spinner/LoadingSpinner';

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";  // Updated imports

// Lazy load all route components for code splitting and faster initial load
const Donate = lazy(() => import('./components/donate'));
const Thanks = lazy(() => import('./components/thanks'));
const CheckOuttV1 = lazy(() => import('./components/checkout'));
const CategoryV2 = lazy(() => import('./components/section-components/category-v2'));
const DonationMenuForm = lazy(() => import('./components/section-components/donation_menu_form'));
const DonationStickyBar = lazy(() => import('./components/section-components/donation_sticky_bar'));
const Footer_v1 = lazy(() => import('./components/global-components/footer'));

const ScrollToTop = () => {
    const { pathname } = useLocation();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    
    return null;
  };

class Root extends Component {
    render() {
        return(
            <CartProvider>
                <Router basename="/">
                    <ScrollToTop />
                    <div>
                        <Suspense fallback={<LoadingSpinner text="Loading..." />}>
                            <Routes>
                                <Route path="/" element={<Donate />} />
                                <Route path="/donate" element={<Donate />} />
                                <Route path="/donation_menu_form" element={<DonationMenuForm />} />
                                <Route path="/thanks" element={<Thanks />} />
                                <Route path="/checkout" element={<CheckOuttV1 />} />
                                <Route path="/donation_screen" element={<CategoryV2 showAllSections={true} />} />
                                <Route path="/donation_sticky_bar" element={<DonationStickyBar />} />
                                
                                {/* Iframe-specific routes */}
                                <Route path="/embed/donation" element={<DonationMenuForm />} />
                                <Route path="/embed/donation-bar" element={<DonationStickyBar />} />
                                <Route path="/footer" element={<Footer_v1 />} />
                            </Routes>
                        </Suspense>
                        <CartSidebar />
                    </div>
                </Router>
            </CartProvider>
        )
    }
}

export default Root;

const container = document.getElementById('quarter');
const root = createRoot(container);
root.render(<Root />);