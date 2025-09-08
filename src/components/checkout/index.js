import React, { useState, useEffect } from "react";
import CountryDropdown from "../section-components/countries_dd";
import './index.css';
import { useCart } from "../../contexts/CartContext";
import axiosInstance from '../../utils/axios';
import { useNavigate } from 'react-router-dom';

const DonationForm = () => {
    // Constants
    const project_id = 4;
    const project_name = "apna_ghar";
    const [paymentFrequency, setPaymentFrequency] = useState({});
    const [formMessage, setFormMessage] = useState({ type: '', text: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { cartItems, getCartTotal } = useCart(); 
    const totalAmount = getCartTotal();
    // State management using hooks
    const [formData, setFormData] = useState({
        donor_name: '',
        donor_email: '',
        donor_phone: '',
        donation_type: '',
        country: '',
        city: '',
        address: ''
    });

    const navigate = useNavigate();

    const handleSubmit = async (e, paymentMethod = null) => {
        e.preventDefault();
         console.log("formData", paymentMethod);
        // Use the passed payment method or the current selected payment
        const currentPayment = paymentMethod;
        
        // Validate required fields and focus on first invalid field
        if (!formData.donor_name.trim()) {
            setFormMessage({ 
                type: 'error', 
                text: 'Please enter your name' 
            });
            setTimeout(() => {
                const nameField = document.querySelector('input[name="donor_name"]');
                if (nameField) {
                    nameField.focus();
                    nameField.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 100);
            return;
        }
        
        if (!formData.donor_email.trim()) {
            setFormMessage({ 
                type: 'error', 
                text: 'Please enter your email' 
            });
            setTimeout(() => {
                const emailField = document.querySelector('input[name="donor_email"]');
                if (emailField) {
                    emailField.focus();
                    emailField.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 100);
            return;
        }
        
        if (!formData.donor_phone.trim()) {
            setFormMessage({ 
                type: 'error', 
                text: 'Please enter your phone number' 
            });
            setTimeout(() => {
                const phoneField = document.querySelector('input[name="donor_phone"]');
                if (phoneField) {
                    phoneField.focus();
                    phoneField.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 100);
            return;
        }
        
        if (!formData.city.trim()) {
            setFormMessage({ 
                type: 'error', 
                text: 'Please enter your city' 
            });
            setTimeout(() => {
                const cityField = document.querySelector('input[name="city"]');
                if (cityField) {
                    cityField.focus();
                    cityField.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 100);
            return;
        }
        
        if (!formData.address.trim()) {
            setFormMessage({ 
                type: 'error', 
                text: 'Please enter your address' 
            });
            setTimeout(() => {
                const addressField = document.querySelector('textarea[name="address"]');
                if (addressField) {
                    addressField.focus();
                    addressField.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 100);
            return;
        }

        // if (!formData.donation_type) {
        //     setFormMessage({ 
        //         type: 'error', 
        //         text: 'Please select a donation type' 
        //     });
        //     setTimeout(() => {
        //         // Try to focus the nice-select wrapper or the hidden select
        //         const niceSelect = document.querySelector('.nice-select');
        //         const selectField = document.querySelector('select[name="donation_type"]');
        //         if (niceSelect) {
        //             niceSelect.focus();
        //             niceSelect.scrollIntoView({ behavior: 'smooth', block: 'center' });
        //         } else if (selectField) {
        //             selectField.focus();
        //             selectField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        //         }
        //     }, 100);
        //     return;
        // }

        // if (!formData.country) {
        //     setFormMessage({ 
        //         type: 'error', 
        //         text: 'Please select your country' 
        //     });
        //     setTimeout(() => {
        //         const countryField = document.querySelector('.country-select');
        //         if (countryField) {
        //             countryField.focus();
        //             countryField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        //         }
        //     }, 100);
        //     return;
        // }
        
        // if (!currentPayment) {
        //     setFormMessage({ 
        //         type: 'error', 
        //         text: 'Please select a payment method' 
        //     });
        //     setTimeout(() => {
        //         // Focus on first payment option
        //         const paymentOption = document.querySelector('.payment-option');
        //         if (paymentOption) {
        //             paymentOption.focus();
        //             paymentOption.scrollIntoView({ behavior: 'smooth', block: 'center' });
        //         }
        //     }, 100);
        //     return;
        // }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.donor_email)) {
            setFormMessage({ 
                type: 'error', 
                text: 'Please enter a valid email address' 
            });
            document.querySelector('input[name="donor_email"]')?.focus();
            return;
        }
        
        // Validate phone format (basic validation)
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(formData.donor_phone)) {
            setFormMessage({ 
                type: 'error', 
                text: 'Please enter a valid phone number' 
            });
            document.querySelector('input[name="donor_phone"]')?.focus();
            return;
        }
        
        setIsSubmitting(true);
        setFormMessage({ type: '', text: '' });

        try {
            const response = await axiosInstance.post('/donations', {
                project_id,
                project_name,
                ...formData,
                donation_method: currentPayment,
                donation_source: paymentFrequency[currentPayment] || 'once',
                amount: totalAmount,
                currency: 'PKR',
                cartItems,
                status: 'pending'
            });
            
            console.log("response", response);
            if(response?.data?.success && response?.data?.paymentUrl){
                try {
                    window.open(response.data.paymentUrl, '_blank');
                    setFormData({
                        donor_name: '',
                        donor_email: '',
                        donor_phone: '',
                        donation_type: '',
                        country: '',
                        city: '',
                        address: ''
                    });
                    setPaymentFrequency({});
                    setFormMessage({ type: 'success', text: 'Payment gateway opened in new tab' });
                } catch (error) {
                    console.error('Error opening payment URL:', error);
                    setFormMessage({ type: 'error', text: 'Failed to open payment gateway' });
                }
            }
            else{
                setFormMessage({ type: 'error', text: 'Failed to submit donation' });
            }

        } catch (error) {
            setFormMessage({ type: 'error', text: 'Failed to submit donation' });
        } finally {
            setIsSubmitting(false);
        }
    };

// Add this right after the useCart 
    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    // Handle frequency change
    const handleFrequencyChange = (paymentMethod, frequency) => {
        setPaymentFrequency(prev => ({
            ...prev,
            [paymentMethod]: frequency
        }));
    };

    // Update form message display
    useEffect(() => {
        if (formMessage.text) {
            const formMessages = document.querySelector('.form-messege');
            if (formMessages) {
                formMessages.className = `form-messege mb-0 mt-20 ${formMessage.type}`;
                formMessages.textContent = formMessage.text;
            }
        }
    }, [formMessage]);

    const publicUrl = process.env.PUBLIC_URL + '/';

    return (
        <div className="ltn__contact-message-area mb-120">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="ltn__form-box contact-form-box box-shadow white-bg">
						<h4 className="title-2">Complete Your Donation</h4>
                            <form id="contact-form" onSubmit={handleSubmit} action={publicUrl + "mail.php"} method="post">
						<div className="row">
							<div className="col-md-6">
							<div className="input-item input-item-name ltn__custom-icon">
                                <input 
                                    type="text" 
                                    name="donor_name" 
                                    placeholder="Enter your name"
                                    value={formData.donor_name}
                                    onChange={handleInputChange}
                                    required
                                />
							</div>
							</div>
							<div className="col-md-6">
							<div className="input-item input-item-email ltn__custom-icon">
                                <input 
                                    type="email" 
                                    name="donor_email" 
                                    placeholder="Enter email address"
                                    value={formData.donor_email}
                                    onChange={handleInputChange}
                                    required
                                />
							</div>
							</div>
                            <div className="col-md-6">
							<div className="input-item input-item-phone ltn__custom-icon">
                                <input 
                                    type="text" 
                                    name="donor_phone" 
                                    placeholder="Enter phone number"
                                    value={formData.donor_phone}
                                    onChange={handleInputChange}
                                    required
                                />
							</div>
							</div>
							<div className="col-md-6">
                                <div className="input-item">
                                <select 
                                        className="nice-select" 
                                        name="donation_type"
                                        value={formData.donation_type}
                                        onChange={handleInputChange}
                                    >
                                    <option value="">Select Donation Type</option>
                                    <option value="General Donation">General Donation</option>
                                    <option value="Zakat Donation">Zakat Donation</option>
                                    <option value="Sadqa Donation">Sadqa Donation</option>
								</select>
							</div>
							</div>
                            {/* country dropdown */}
                            <div className="col-md-6">
                                <CountryDropdown />
                            </div>
                                    <div className="col-md-6">
                                        <div className="input-item input-item-name ltn__custom-icon">
                                            <input 
                                                type="text" 
                                                name="city" 
                                                placeholder="Enter your city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="input-item input-item-textarea ltn__custom-icon">
                                        <textarea 
                                            name="address" 
                                            placeholder="Enter address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    
                                    {/* Payment Method Section */}
                                    <h5 className="title-2">Donate Via :</h5>
                                    <div className="col-md-6">
                                        <div className="input-item">
                                            <div 
                                                className={`payment-option`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleSubmit(e, 'meezan');
                                                }}
                                            >
                                                <div className="payment-icon">
                                                    <i className="fas fa-credit-card"></i>
                                                </div>
                                                <div className="payment-content">
                                                    <h6>VISA, MasterCard, Credit, Debit Card</h6>
                                                    <p>Meezan's Secure online payment gateway</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="input-item">
                                            <div 
                                                className={`payment-option`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleSubmit(e, 'blinq');
                                                }}
                                            >
                                                <div className="payment-icon">
                                                    <i className="fas fa-university"></i>
                                                </div>
                                                <div className="payment-content">
                                                    <h6>Jazz Cash, Easy Pesa</h6>
                                                    <p>Blinq's Secure online payment gateway</p>
                                                    <div className="payment-selection-options">
                                                        {/* <div className="radio-group">
                                                            <div className="radio-item">
                                                                <input 
                                                                    type="radio" 
                                                                    id="meezan-once" 
                                                                    name="meezan-frequency" 
                                                                    value="once"
                                                                    checked={paymentFrequency['meezan'] === 'once'}
                                                                    onChange={() => handleFrequencyChange('meezan', 'once')}
                                                                    className="once-radio"
                                                                />
                                                                <label htmlFor="meezan-once">Once</label>
                                                            </div>
                                                            <div className="radio-item">
                                                                <input 
                                                                    type="radio" 
                                                                    id="meezan-recurring" 
                                                                    name="meezan-frequency" 
                                                                    value="recurring"
                                                                    checked={paymentFrequency['meezan'] === 'recurring'}
                                                                    className="recurring-radio"
                                                                    onChange={() => handleFrequencyChange('meezan', 'recurring')}  
                                                                />
                                                                <label htmlFor="meezan-recurring">Recurring</label>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="input-item">
                                            <div 
                                                className={`payment-option`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleSubmit(e, 'blinq');
                                                }}
                                            >
                                                <div className="payment-icon">
                                                    <i className="fas fa-credit-card"></i>
                                                </div>
                                                <div className="payment-content">
                                                    <h6>VISA, MasterCard, Credit, Debit Card (2)</h6>
                                                    <p>Blinq's Secure online payment gateway</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <p>
                                    <label className="input-info-save mb-0">
                                        <input type="checkbox" name="agree" required defaultChecked /> 
                                        Save my name, email, and website in this browser for the next time I comment.
                                    </label>
                                </p>
                                
                                {/* <div className="btn-wrapper mt-0">
                                    <button 
                                        className="btn theme-btn-1 btn-effect-1 text-uppercase" 
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Processing...' : 'Complete Donation'}
                                    </button>
                                </div> */}
                                 
                                <p className="form-messege mb-0 mt-20" style={{color: 'red'}} />
                            </form>
                        </div>
                    </div>
                    {/* Cart Summary Section */}
                    {/* <div className="col-12">
                        <div className="input-item">
                            <div className="cart-summary-content">
                                <h5 className="section-title mb-3">Donation Summary</h5>
                                {cartItems.length > 0 ? (
                                    <>
                                        {cartItems.map((item) => (
                                            <div key={item.id} className="cart-item-summary">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <span className="item-name">{item.title}</span>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <span className="item-quantity">Quantity: {item.quantity}</span>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <span className="item-total">{(item.price * item.quantity).toLocaleString()} PKR</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="total-amount">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <strong>Total Donation Amount:</strong>
                                                </div>
                                                <div className="col-md-6">
                                                    <strong className="amount">{totalAmount.toLocaleString()} PKR</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="empty-cart">
                                        <p>No items in cart. Please add donation items first.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default DonationForm;