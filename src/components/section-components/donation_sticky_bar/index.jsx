import React, { useState } from 'react';
import { useCart } from '../../../contexts/CartContext';
import './index.css';

const DonationStickyBar = () => {
  const { addCustomDonation, openCart } = useCart();
  
  // State management
  const [donationType, setDonationType] = useState('general');
  const [selectedProject, setSelectedProject] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [currency, setCurrency] = useState('PKR');

  // Predefined donation amounts (reduced set for sticky bar)
  const donationAmounts = [
    { amount: 1000, label: '1000', smLabel: '1000' },
    { amount: 2500, label: '2500', smLabel: '2500' },
    { amount: 5000, label: '5000', smLabel: '5000' },
    { amount: 10000, label: '10000', smLabel: '10000' },
    { amount: 25000, label: '25000', smLabel: '25000' },
    { amount: 50000, label: '50000', smLabel: '50000' }
  ];

  // Donation types
  const donationTypes = [
    { value: 'general', label: 'General' },
    { value: 'sadqa', label: 'Sadqa' },
    { value: 'zakat', label: 'Zakat' }
  ];

  // Currencies
  const currencies = [
    { value: 'PKR', label: 'PKR' },
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
    { value: 'GBP', label: 'GBP' }
  ];

  // Projects based on donation type
  const getProjects = () => {
    switch (donationType) {
      case 'sadqa':
        return [
          { value: 'apna_ghar', label: 'Apna Ghar' },
          { value: 'flood_relief', label: 'Flood Relief' },
          { value: 'education', label: 'Education' },
          { value: 'healthcare', label: 'Healthcare' }
        ];
      case 'zakat':
        return [
          { value: 'orphan_support', label: 'Orphan Support' },
          { value: 'widow_support', label: 'Widow Support' },
          { value: 'poor_relief', label: 'Poor Relief' },
          { value: 'debt_relief', label: 'Debt Relief' }
        ];
      default:
        return [
          { value: 'apna_ghar', label: 'Apna Ghar' },
          { value: 'flood_relief', label: 'Flood Relief' },
          { value: 'education', label: 'Education' },
          { value: 'healthcare', label: 'Healthcare' },
          { value: 'community', label: 'Community' }
        ];
    }
  };

  // Handle donation type change
  const handleDonationTypeChange = (e) => {
    const value = e.target.value;
    setDonationType(value);
    setSelectedProject(''); // Reset project selection
  };

  // Handle project change
  const handleProjectChange = (e) => {
    setSelectedProject(e.target.value);
  };

  // Handle predefined amount selection
  const handleAmountSelect = (amount) => {
    const description = `${donationType === 'general' ? 'General' : donationType === 'sadqa' ? 'Sadqa' : 'Zakat'} Donation - ${selectedProject || 'General Project'}`;
    addCustomDonation(amount, description);
    openCart();
  };

  // Handle custom amount submission
  const handleCustomDonation = () => {
    const amount = parseFloat(customAmount);
    if (amount > 0) {
      const description = `${donationType === 'general' ? 'General' : donationType === 'sadqa' ? 'Sadqa' : 'Zakat'} Donation - ${selectedProject || 'Custom Amount'}`;
      addCustomDonation(amount, description);
      setCustomAmount('');
      openCart();
    }
  };

  return (
    <div className="donation-sticky-bar">
      <div className="sticky-bar-container">
        {/* Dropdowns */}
        <div className="sticky-dropdowns">
          <select
            value={donationType}
            onChange={handleDonationTypeChange}
            className="sticky-dropdown"
          >
            {donationTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          <select
            value={selectedProject}
            onChange={handleProjectChange}
            className="sticky-dropdown"
          >
            <option value="">Project</option>
            {getProjects().map(project => (
              <option key={project.value} value={project.value}>
                {project.label}
              </option>
            ))}
          </select>
        </div>

        {/* Amount Cards */}
        <div className="sticky-amounts">
          {/* Currency dropdown for mobile */}
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="sticky-dropdown sticky-currency-dropdown sticky-currency-mobile"
            disabled
          >
            {currencies.map(currency => (
              <option key={currency.value} value={currency.value}>
                {currency.label}
              </option>
            ))}
          </select>
          
          {donationAmounts.map((item, index) => (
            <button
              key={index}
              className="sticky-amount-card"
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
              onChange={(e) => setCustomAmount(e.target.value)}
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
