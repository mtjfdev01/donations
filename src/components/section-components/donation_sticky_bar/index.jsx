import React, { useState, useEffect } from 'react';
import { useCart } from '../../../contexts/CartContext';
import './index.css';

const DonationStickyBar = () => {
  const { addCustomDonation, openCart } = useCart();
  
  // Detect if running in iframe
  const isInIframe = window.self !== window.top;
  
  // State management
  const [customAmount, setCustomAmount] = useState('');
  const [currency, setCurrency] = useState('PKR');
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const [selectedAmountCard, setSelectedAmountCard] = useState(null);

  // Auto-resize iframe height
  useEffect(() => {
    if (isInIframe) {
      const updateHeight = () => {
        const height = document.documentElement.scrollHeight;
        window.parent.postMessage({
          type: 'WIDGET_HEIGHT',
          height: height
        }, '*');
      };

      // Update height on load and when content changes
      updateHeight();
      window.addEventListener('resize', updateHeight);
      
      // Update height when form state changes
      const timer = setTimeout(updateHeight, 100);
      
      return () => {
        window.removeEventListener('resize', updateHeight);
        clearTimeout(timer);
      };
    }
  }, [isInIframe, customAmount]);
  
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.custom-dropdown')) {
        setIsCurrencyDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Predefined donation amounts (reduced set for sticky bar)
  const donationAmounts = [
    { amount: 1000, label: '1000', smLabel: '1000' },
    { amount: 2500, label: '2500', smLabel: '2500' },
    { amount: 5000, label: '5000', smLabel: '5000' },
    { amount: 10000, label: '10000', smLabel: '10000' },
    { amount: 25000, label: '25000', smLabel: '25000' },
    { amount: 50000, label: '50000', smLabel: '50000' }
  ];

  // Currencies
  const currencies = [
    { value: 'PKR', label: 'PKR' },
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
    { value: 'GBP', label: 'GBP' }
  ];


  // Handle predefined amount selection
  const handleAmountSelect = (amount) => {
    setSelectedAmountCard(amount);
    setCustomAmount(amount.toString());
  };

  // Handle custom amount input change
  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    
    // Clear selected amount card if input is empty or doesn't match any predefined amount
    if (!value) {
      setSelectedAmountCard(null);
    } else {
      // Check if the value matches any predefined amount
      const matchingAmount = donationAmounts.find(item => item.amount.toString() === value);
      if (matchingAmount) {
        setSelectedAmountCard(matchingAmount.amount);
      } else {
        setSelectedAmountCard(null);
      }
    }
  };

  // Handle custom amount submission
  const handleCustomDonation = () => {
    const amount = parseFloat(customAmount);
    if (amount > 0) {
      if (isInIframe) {
        // Redirect to WordPress with params
        const url = `https://donation.mtjfoundation.org/checkout?donation_type=sadqa&project=flood&amount=${amount}`;
        window.parent.location.href = url;
      } else {
        // Existing cart functionality
        const description = `General Donation - ${amount} ${currency}`;
        addCustomDonation(amount, description);
        setCustomAmount('');
        setSelectedAmountCard(null);
        openCart();
      }
    }
  };

  return (
    <div className={`donation-sticky-bar ${isInIframe ? 'iframe-mode' : ''}`}>
      <div className="sticky-bar-container">
        {/* Amount Cards */}
        <div className="sticky-amounts">
          
          {donationAmounts.map((item, index) => (
            <button
              key={index}
              className={`sticky-amount-card ${selectedAmountCard === item.amount ? 'selected' : ''}`}
              onClick={() => handleAmountSelect(item.amount)}
            >
              <span className="amount-label">{item.label}</span>
              <span className="amount-sm-label">{item.smLabel}</span>
            </button>
          ))}
        </div>
        
        {/* Custom Amount and Donate Button Row */}
        <div className="sticky-custom-row">
          {/* Custom Amount Input */}
          <div className="sticky-custom-input">
            <input
              type="number"
              value={customAmount}
              onChange={handleCustomAmountChange}
              placeholder="Enter Amount"
              min="1"
              className="sticky-amount-input"
            />
          </div>
          
          {/* Donate Button */}
          <button
            className="sticky-donate-button"
            onClick={handleCustomDonation}
            disabled={!customAmount || parseFloat(customAmount) <= 0}
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationStickyBar;
