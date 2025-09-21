import React from 'react';
import { useCart } from '../../../contexts/CartContext';
import { FaTimes, FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import './index.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const CartSidebar = () => {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    getCartItemCount,
    clearCart
  } = useCart();

  const navigate = useNavigate();

  console.log("cartItems 1122", cartItems);
  
  const handleCheckout = () => {
    closeCart();  // Close the cart sidebar
    navigate('/checkout');  // Navigate without page reload
  };

  const continueDonating = () => {
    // Check if we are on checkout page
    const currentPath = window.location.pathname;
    const isOnCheckoutPage = currentPath.includes('/checkout');
    
    if (isOnCheckoutPage) {
      // If on checkout page, redirect to donate page with flood_relief parameter
      navigate('/donate?donation_for=flood_relief');
      closeCart();

    } else {
      // If not on checkout page, just close the cart
      closeCart();
    }
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="cart-backdrop" onClick={closeCart}></div>
      
      {/* Cart Sidebar */}
      <div className="cart-sidebar">
        {/* Header */}
        <div className="cart-header">
          <div className="cart-title">
            <h3>Donation Cart</h3>
            <span className="cart-count">({getCartItemCount()} items)</span>
          </div>
          <button className="close-btn" onClick={closeCart}>
            <FaTimes />
          </button>
        </div>

        {/* Cart Items */}
        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty</p>
              <p>Add some donation items to get started!</p>
            </div>
          ) : (
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-info">
                    <h4 className="item-title">{item.title}</h4>
                    <p className="item-subtitle">{item.subtitle}</p>
                    <p className="item-price">{item.price.toLocaleString()} PKR</p>
                  </div>
                  
                  <div className="item-controls">
                    <div className="quantity-controls">
                      <button
                        className="qty-btn"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <FaMinus />
                      </button>
                      <span className="qty-value">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <FaPlus />
                      </button>
                    </div>
                    
                    <div className="item-total">
                      <span>{(item.price * item.quantity).toLocaleString()} PKR</span>
                    </div>
                    
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                      title="Remove item"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary">
              <div className="cart-total">
                <span>Total:</span>
                <span className="total-amount">{getCartTotal().toLocaleString()} PKR</span>
              </div>
              <button className="clear-cart-btn" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
            
            <div className="cart-actions">
              <button className="continue-shopping-btn" onClick={continueDonating}>
                Continue Donating
              </button>
              <button className="checkout-btn" onClick={handleCheckout}>
                Proceed to Donate
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
