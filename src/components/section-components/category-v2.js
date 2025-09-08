import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaMinus, 
  FaPlus,
  FaHeart
} from 'react-icons/fa';
import { donationSections } from '../../utils';
import { useCart } from '../../contexts/CartContext';
import { PiHandHeartDuotone } from "react-icons/pi";

const CategoryV2 = (props) => {
  const [quantities, setQuantities] = useState({}); // key: "sectionIndex-idx" -> number
  const [customAmount, setCustomAmount] = useState('');
  const [customDescription, setCustomDescription] = useState('');
  const { addToCart, openCart, addCustomDonation } = useCart();

  const getKey = (sectionIndex, idx) => `${sectionIndex}-${idx}`;
  const getQty = (key) => quantities[key] ?? 1;

  const inc = (key) => {
    setQuantities(prev => ({
      ...prev,  
      [key]: (prev[key] ?? 1) + 1
    }));
  };

  const dec = (key) => {
    setQuantities(prev => {
      const current = prev[key] ?? 1;
      const next = Math.max(1, current - 1);
      return { ...prev, [key]: next };
    });
  };

// update handleDonate signature
const handleDonate = (item, quantity, sectionIndex, idx) => {
  const id = item.id ?? `${sectionIndex}-${idx}`; // make a stable id
  addToCart({ ...item, id }, quantity);
  openCart();
};

// Handle custom donation
const handleCustomDonate = () => {
  const amount = parseFloat(customAmount);
  if (amount > 0) {
    addCustomDonation(amount, customDescription || 'Custom Donation');
    setCustomAmount('');
    setCustomDescription('');
    openCart();
  }
};


  // Get the showAllSections prop, default to true if not provided
  const { showAllSections = true } = props;
  // Filter sections based on prop
  const sectionsToShow = showAllSections ? donationSections : donationSections.slice(0, 1);

    return (
      <div className="ltn__category-area ltn__product-gutter section-bg-1--- pt-115 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">{showAllSections ? "Donation Menu" : "Quick Donate"}</h6>
                <h1 className="section-title">Donate & Participate in Sheltering</h1> 
              </div>
            </div>
          </div>

          {sectionsToShow.map((section, sectionIndex) => (
            <div key={sectionIndex} className="donation-section mb-5">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-subtitle-area text-center mb-4">
                    <h3 className="section-subtitle ltn__secondary-color text-start">{section.sectionTitle}</h3>
                    {/* <p className="section-description">{section.sectionTitle}</p> */}
                  </div>
                </div>
              </div>
              
              <div className="row  justify-content-left go-top">
                {/* Custom Donation Card - Only appears in "Building Hope, Brick by Brick" section */}
                {section.sectionTitle === "Building Hope, Brick by Brick" && (
                  <div className="col-lg-3 col-md-4 col-sm-12 col-12">
                    <div className="ltn__category-item-5  text-start---">
                      <div className={`category_item_container custom-donation-card ${customAmount ? 'has-amount' : ''}`}>
                        <span className="category-icon" style={{boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'}}>
                          <PiHandHeartDuotone size={40} />
                        </span>
                        <b><span style={{color: 'black'}}>Custom Donation</span></b>
                        <span className="category-subtitle" style={{color: 'black'}}>Enter any amount you wish</span>

                        <div className="custom-donation-inputs">
                          <input 
                            type="number" 
                            placeholder="Amount (PKR)"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            min="1"
                            className="input-item input-item-name"
                          />
                        </div>

                        <button 
                          className="donate-button" 
                          type="button"      
                          onClick={(e) => { 
                            e.preventDefault(); 
                            e.stopPropagation(); 
                            handleCustomDonate();
                          }}
                          disabled={!customAmount || parseFloat(customAmount) <= 0}
                        >
                          Donate: {customAmount ? `${parseFloat(customAmount).toLocaleString()} PKR` : 'Enter Amount'}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {section.items.map((item, idx) => {
                  const key = getKey(sectionIndex, idx);
                  const qty = getQty(key);
                  const total = item.price * qty;

                  return (
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={idx}>
                      <div className="ltn__category-item-5  text-start---">
                        {/* keep anchor element for styling, block all default navigation */}
                        <div
                         className='category_item_container'
                        >
                          <span className="category-icon">
                            <item.iconClass />
                          </span>
                          <b><span>{item.title}</span></b>
                          <span className="category-subtitle">{item.subtitle}</span>

                          <div className="danation_cta_container">
                            <div className="donate-container mt-10">
                              <div className="qty-flex" role="group" aria-label="Quantity selector">
                                <button
                                  type="button"
                                  className="qty-btn"
                                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); dec(key); }}
                                  aria-label="Decrease quantity"
                                  disabled={qty <= 1}
                                >
                                  <FaMinus />
                                </button>

                                <span className="qty-value" aria-live="polite">Quantity: {qty}</span>

                                <button
                                  type="button"
                                  className="qty-btn"
                                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); inc(key); }}
                                  aria-label="Increase quantity"
                                >
                                  <FaPlus />
                                </button>
                              </div>

                              {/* use total instead of item.price */}
                            </div>
                          </div>
                          <button 
                            className="donate-button" 
                            type="button"      
                            onClick={(e) => { 
                              e.preventDefault(); 
                              e.stopPropagation(); 
                              handleDonate(item, qty, sectionIndex, idx); // ✅ pass them in
                            }}
                          >
                            Donate:  {total} PKR
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Show "View All Donations" button only when not showing all sections */}
              {!showAllSections && (
                <div className="row mt-4">
                  <div className="col-lg-12 text-center">
                    <Link to="/donate" className="donate-button donate_btn">
                      View All Donation Options
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
};

export default CategoryV2;
