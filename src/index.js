import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

import { CartProvider } from './contexts/CartContext';
import CartSidebar from './components/section-components/cart_sidebar/CartSidebar';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Updated imports
import Donate from './components/donate';
import Thanks from './components/thanks';
import CheckOuttV1 from './components/checkout';

class Root extends Component {
    render() {
        return(
            <CartProvider>
                <Router basename="/">
                    <div>
                        <Routes>  {/* Changed from Switch to Routes */}
                            {/* <Route path="/" element={<HomeV2 />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/team-details" element={<TeamDetails />} />
                            <Route path="/faq" element={<Faq />} />
                            <Route path="/coming-soon" element={<ComingSoon />} /> 
                            <Route path="/404" element={<Error />} />
                            <Route path="/location" element={<Location />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/checkout" element={<CheckOuttV1 />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/add-listing" element={<AddListing />} />
                            <Route path="/wishlist" element={<Wishlist />} />
                            <Route path="/history" element={<History />} />
                            <Route path="/facalities-and-services" element={<Facalities_and_Services />} />
                            <Route path="/budget-overview" element={<Budget_Overview />} />
                                                        */}
                            <Route path="/" element={<Donate />} />
                            <Route path="/donate" element={<Donate />} />
                            <Route path="/thanks" element={<Thanks />} />
                            <Route path="/checkout" element={<CheckOuttV1 />} />

                        </Routes>
                        {/* <TawkMessengerReact
                            propertyId="68b28c0746bc0d230c342684"
                            widgetId="1j3sn61rb"
                        /> */}
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