import React, { useState, useEffect } from "react";
import CountryDropdown from "../section-components/countries_dd";
import './index.css';
import { useCart } from "../../contexts/CartContext";
import axiosInstance from '../../utils/axios';
import LoadingSpinner from '../global-components/loading_spinner/LoadingSpinner';
import { useNavigate, useLocation } from 'react-router-dom';

const DonationForm = () => {
    // Constants
    const project_id = 4;
    const location = useLocation();
    
    // State management using hooks
    const [paymentFrequency, setPaymentFrequency] = useState({});
    const [formMessage, setFormMessage] = useState({ type: '', text: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [project_name, setProjectName] = useState("flood_relief"); // Default to flood_relief
    const { cartItems, getCartTotal, updateQuantity, removeFromCart, addCustomDonation } = useCart(); 
    
    const totalAmount = getCartTotal();
    const [formData, setFormData] = useState({
        donor_name: '',
        donor_email: '',
        donor_phone: '',
        donation_type: 'general', // Set default value
        country: '',
        city: '',
        address: ''
    });

    // Check for query parameters from donation menu form navigation
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const donationType = urlParams.get('donation_type');
        const project = urlParams.get('project');
        const amount = urlParams.get('amount');
        
        // Set project_name from query parameter or default to flood_relief
        if (project && project.trim()) {
            setProjectName(project.trim());
        } else {
            setProjectName("flood_relief");
        }
        
        if (donationType && project && amount) {
            // Update form data with query parameters
            setFormData(prev => ({
                ...prev,
                donation_type: donationType
            }));
            
            // Add donation to cart
            const description = `${donationType === 'general' ? 'General' : donationType === 'sadqa' ? 'Sadqa' : 'Zakat'} Donation - ${project}`;
            addCustomDonation(parseFloat(amount), description);
        }
    }, [location.search]);

    const handleSubmit = async (e, paymentMethod = null) => {
        e.preventDefault();
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

        if(!totalAmount || Number(totalAmount) <= 0 || Number(totalAmount) < 100  ){
            setFormMessage({ 
                type: 'error', 
                text: 'Please add donation items to the cart or enter a valid donation amount (minimum donation amount is 100 PKR)' 
            });
            return;
        }
        setIsSubmitting(true);
        setFormMessage({ type: '', text: '' });

        try {
            setIsLoading(true);

            const payload = {
                project_id,
                project_name,
                ...formData,
                donation_method: currentPayment,
                donation_source: paymentFrequency[currentPayment] || 'once',
                amount: totalAmount,
                currency: 'PKR',
                cartItems,
                status: 'pending'
            };
            
            const response = await axiosInstance.post('/donations', payload);

            if(currentPayment === 'payfast'){
                // Call postToPayfast with the response data from the server
                 postToPayfast(response.data.data, formData);
            }
            else{
                // console.log("response?.success", response?.data?.success);
            // console.log("response?.data?.paymentUrl", response?.data?.data?.paymentUrl);

            if(response?.data?.success && response?.data?.data?.paymentUrl){
                try {
                    setIsLoading(false);
                    // Try to open in new window
                    const paymentWindow = window.open('', '_blank');
                    if (paymentWindow) {
                        paymentWindow.location.href = response.data.data.paymentUrl;
                        paymentWindow.focus();
                    } else {
                        setIsLoading(false);
                        window.location.href = response.data.data.paymentUrl;
                    }
                } catch (error) {
                    console.error('Error opening payment URL:', error);
                    setIsLoading(false);
                    window.location.href = response.data.data.paymentUrl;
                }
            }
            else{
                setIsLoading(false);
                setFormMessage({ type: 'error', text: 'Failed to open invoice url' });
            }
        }
        } catch (error) {
            setIsLoading(false);
            setFormMessage({ type: 'error', text: error?.message });
        } finally {
            setIsSubmitting(false);
        }
    };

// Add this right after the useCart 
    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(`Input changed - ${name}:`, value);
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };


    // Handle donation type change specifically
    // const handleDonationTypeChange = (e) => {
    //     const value = e.target.value;
    //     console.log('Donation type changed to:', value);
    //     setFormData(prev => ({
    //         ...prev,
    //         donation_type: value
    //     }));
    // };
    // // Handle frequency change
    // const handleFrequencyChange = (paymentMethod, frequency) => {
    //     setPaymentFrequency(prev => ({
    //         ...prev,
    //         [paymentMethod]: frequency
    //     }));
    // };

    function postToPayfast(payfastResponse, formData) {
        const { MERCHANT_ID, ACCESS_TOKEN, BASKET_ID, TXNAMT } = payfastResponse;
      
        // Must not be empty
        // const MERCHANT_NAME = (process.env.REACT_APP_MERCHANT_NAME || 'MTJ Foundation');
      
        // ORDER_DATE best in "YYYY-MM-DD HH:mm:ss"
        const now = new Date();
        const ORDER_DATE = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
      
        // SIGNATURE is just a random string per docs (not a hash)
        const SIGNATURE = Math.random().toString(36).slice(2, 10);
        
        const fields = {
          MERCHANT_ID,
          MERCHANT_NAME: 'MTJ Foundation',
          TOKEN: ACCESS_TOKEN,                 // from GetAccessToken
          PROCCODE: '00',
          TXNAMT,              // must match token call
          CUSTOMER_MOBILE_NO: formData.donor_phone,
          CUSTOMER_EMAIL_ADDRESS: formData.donor_email,
          SIGNATURE,
          VERSION: SIGNATURE,
          TXNDESC: (process.env.REACT_APP_TXNDESC || 'Donation'),
          SUCCESS_URL: 'https://donation.mtjfoundation.org/thanks', 
          FAILURE_URL: (process.env.REACT_APP_FAILURE_URL || 'https://donation.mtjfoundation.org/donate?donation_for=flood_relief'), //return back to home page if payment fails
          CHECKOUT_URL: (`https://mtjf-erp-backend.up.railway.app/donations/public/payfast/ipn`), // backend api url to handle payfast response to update donation status
          BASKET_ID,        // must match token call
          ORDER_DATE,
          CURRENCY_CODE: (process.env.REACT_APP_CURRENCY_CODE || 'PKR'),
          TRAN_TYPE: "ECOMM_PURCHASE",
          CURRENCY_CODE:"PKR"
        };
       
        // console.log("fields ************", fields);
        // Build and submit a real HTML form (POST navigation)
        const form = document.createElement('form');
        form.method = 'POST'; 
        form.action = 'https://ipg1.apps.net.pk/Ecommerce/api/Transaction/PostTransaction';
        form.target = '_blank'; // or '_blank' to open new tab
      
        Object.entries(fields).forEach(([k, v]) => {
          if (v == null) return;
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = k;
          input.value = String(v);
          form.appendChild(input);
        });
      
        document.body.appendChild(form);
        form.submit(); // user navigates to PayFast hosted page

        setIsLoading(false);
      }

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


    useEffect(() => {
        // if previously initialized by theme scripts
        const el = document.querySelector('select[name="donation_type"]');
        if (el && el.nextElementSibling?.classList.contains('nice-select')) {
          el.nextElementSibling.remove(); // remove fake dropdown
          el.style.display = '';          // unhide real select
        }
      }, []);
    const publicUrl = process.env.PUBLIC_URL + '/';
    if(isLoading)  return <LoadingSpinner />;

    return (
        <div className="ltn__contact-message-area mb-120 mt-120 sm-mt-100">
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
                                    <span  className="donation_type_select">
                                    <select
                                        name="donation_type"
                                        value={formData.donation_type}
                                        onChange={handleInputChange}
                                    >
                                        <option value="general">General Donation</option>
                                        <option value="zakat">Zakat Donation</option>
                                        <option value="sadqa">Sadqa Donation</option>
                                    </select>
                                </span>
                                </div>
                                {/* country dropdown */}
                                <div className="col-md-6">
                                    <CountryDropdown 
                                        value={formData.country}
                                        onChange={(value) => setFormData(prev => ({ ...prev, country: value }))}
                                    />
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
                                         {/* <div className="col-md-6">
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
                                        </div> */}

                                        {/* blinq payment option */}
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
                                                        <h6>Credit, Debit Card, Jazz Cash, Easy Pesa</h6>
                                                        <p>Blinq's Secure online payment gateway</p>
                                                        <div className="payment-selection-options">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* payfast payment option */}
                                        {/* <div className="col">
                                            <div className="input-item">
                                                <div 
                                                    className={`payment-option`}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleSubmit(e, 'payfast');
                                                    }}
                                                >
                                                    <div className="payment-icon">
                                                        <i className="fas fa-credit-card"></i>
                                                    </div>
                                                    <div className="payment-content">
                                                        <h6> Credit, Debit Card, Jazz Cash, Easy Pesa, U Pesa</h6>
                                                        <p>Payfast's (Faisal Bank Islami) Secure online payment gateway</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
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
                    <div className="col-12 mt-30">
                        <div className="input-item">
                            <div className="cart-summary-content">
                                <h5 className="section-title mb-3">Donation Summary</h5>
                                {cartItems.length > 0 ? (
                                    <>
                                        {/* Column Headers */}
                                        <div className="cart-summary-header">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <h6 className="column-title">Item</h6>
                                                </div>
                                                <div className="col-md-3">
                                                    <h6 className="column-title">Quantity</h6>
                                                </div>
                                                <div className="col-md-3">
                                                    <h6 className="column-title">Total Price</h6>
                                                </div>
                                                <div className="col-md-3">
                                                    <h6 className="column-title">Actions</h6>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Mobile Titles */}
                                        <div className="mobile-titles">
                                            <h6>Item</h6>
                                            <h6>Quantity</h6>
                                            <h6>Price</h6>
                                        </div>
                                        
                                        {cartItems.map((item) => (
                                            <div key={item.id} className="cart-item-summary">
                                                <div className="row align-items-center">
                                                    <div className="mobile-info-row">
                                                        <div className="col-md-3">
                                                            <span className="item-name">{item.title}</span>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <span className="item-quantity">{item.quantity}</span>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <span className="item-total">{(item.price * item.quantity).toLocaleString()} PKR</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="quantity-controls d-flex align-items-center justify-content-center">
                                                            <button
                                                                className="qty-btn btn btn-sm btn-outline-secondary"
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                disabled={item.quantity <= 1}
                                                                title="Decrease quantity"
                                                            >
                                                                <i className="fas fa-minus"></i>
                                                            </button>
                                                            <button
                                                                className="qty-btn btn btn-sm btn-outline-secondary"
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                title="Increase quantity"
                                                            >
                                                                <i className="fas fa-plus"></i>
                                                            </button>
                                                            <button
                                                                className="btn btn-sm  clr_red "
                                                                onClick={() => removeFromCart(item.id)}
                                                                title="Remove item"
                                                            >
                                                                <i className="fas fa-trash"></i>
                                                            </button>
                                                        </div>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationForm;