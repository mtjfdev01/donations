import React, { useState } from 'react';
import { useCart } from '../../../contexts/CartContext';
import './index.css';

const DonationMenuForm = () => {
  const { addCustomDonation, openCart } = useCart();
  
  // State management
  const [frequency, setFrequency] = useState('once'); // 'once' or 'monthly'
  const [donationType, setDonationType] = useState('general');
  const [selectedProject, setSelectedProject] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [customDescription, setCustomDescription] = useState('');

  // Predefined donation amounts
  const donationAmounts = [
    { amount: 1000, label: '1,000 PKR' },
    { amount: 2500, label: '2,500 PKR' },
    { amount: 5000, label: '5,000 PKR' },
    { amount: 10000, label: '10,000 PKR' },
    { amount: 25000, label: '25,000 PKR' },
    { amount: 50000, label: '50,000 PKR' },
    { amount: 100000, label: '100,000 PKR' }
  ];

  // Donation types
  const donationTypes = [
    { value: 'general', label: 'General Donation' },
    { value: 'sadqa', label: 'Sadqa' },
    { value: 'zakat', label: 'Zakat' }
  ];

  // Projects based on donation type
  const getProjects = () => {
    switch (donationType) {
      case 'sadqa':
        return [
          { value: 'apna_ghar', label: 'Apna Ghar Project' },
          { value: 'flood_relief', label: 'Flood Relief' },
          { value: 'education', label: 'Education Support' },
          { value: 'healthcare', label: 'Healthcare Fund' }
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
          { value: 'apna_ghar', label: 'Apna Ghar Project' },
          { value: 'flood_relief', label: 'Flood Relief' },
          { value: 'education', label: 'Education Support' },
          { value: 'healthcare', label: 'Healthcare Fund' },
          { value: 'community', label: 'Community Development' }
        ];
    }
  };

  // Handle frequency change
  const handleFrequencyChange = (freq) => {
    setFrequency(freq);
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
      const description = `${donationType === 'general' ? 'General' : donationType === 'sadqa' ? 'Sadqa' : 'Zakat'} Donation - ${customDescription || selectedProject || 'Custom Amount'}`;
      addCustomDonation(amount, description);
      setCustomAmount('');
      setCustomDescription('');
      openCart();
    }
  };

  return (
    <div className="donation-menu-form">
      <div className="container">
        <div className="donation-form-wrapper">
            
          {/* Header Section */}
          <div className="form-header">
            <div className="header-row">
              {/* Frequency Selection */}
              <div className="frequency-section">
                <h4>Donation Frequency</h4>
                <div className="frequency-options">
                  <label className="frequency-option">
                    <input
                      type="radio"
                      name="frequency"
                      value="once"
                      checked={frequency === 'once'}
                      onChange={() => handleFrequencyChange('once')}
                    />
                    <span className="checkmark"></span>
                    <span className="label-text">Give Once</span>
                  </label>
                  <label className="frequency-option">
                    <input
                      type="radio"
                      name="frequency"
                      value="monthly"
                      checked={frequency === 'monthly'}
                      onChange={() => handleFrequencyChange('monthly')}
                    />
                    <span className="checkmark"></span>
                    <span className="label-text">Give Monthly</span>
                  </label>
                </div>
              </div>

              {/* Dropdowns Section */}
              <div className="dropdowns-section">
                <div className="dropdown-group">
                  <label htmlFor="donation-type">Donation Type</label>
                  <select
                    id="donation-type"
                    value={donationType}
                    onChange={handleDonationTypeChange}
                    className="form-dropdown"
                  >
                    {donationTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="dropdown-group">
                  <label htmlFor="project">Project</label>
                  <select
                    id="project"
                    value={selectedProject}
                    onChange={handleProjectChange}
                    className="form-dropdown"
                  >
                    <option value="">Select Project</option>
                    {getProjects().map(project => (
                      <option key={project.value} value={project.value}>
                        {project.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Donation Amount Buttons */}
          <div className="amount-buttons-section">
            <h4>Select Donation Amount</h4>
            <div className="amount-buttons-grid">
              {donationAmounts.map((item, index) => (
                <button
                  key={index}
                  className="amount-button"
                  onClick={() => handleAmountSelect(item.amount)}
                >
                  <span className="amount-value">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Custom Amount Section */}
          <div className="custom-amount-section">
            <h4>Or Enter Custom Amount</h4>
            <div className="custom-amount-form">
              <div className="custom-amount-row">
                <div className="input-group">
                  <label htmlFor="custom-amount">Amount (PKR)</label>
                  <input
                    type="number"
                    id="custom-amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="Enter amount"
                    min="1"
                    className="amount-input"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="custom-description">Description (Optional)</label>
                  <input
                    type="text"
                    id="custom-description"
                    value={customDescription}
                    onChange={(e) => setCustomDescription(e.target.value)}
                    placeholder="Enter description"
                    className="description-input"
                  />
                </div>
              </div>
              <button
                className="custom-donate-button"
                onClick={handleCustomDonation}
                disabled={!customAmount || parseFloat(customAmount) <= 0}
              >
                Donate {customAmount ? `${parseFloat(customAmount).toLocaleString()} PKR` : 'Custom Amount'}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DonationMenuForm;
