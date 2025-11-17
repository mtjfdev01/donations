import React from 'react';
import Navbar from './global-components/navbar-v2';
import axiosInstance from '../utils/axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Thanks = () => {
    const navigate = useNavigate();
    const [isSuccess, setIsSuccess] = useState(false);
    const { clearCart } = useCart();

    let publicUrl = process.env.PUBLIC_URL + '/';
    const imageUrl = publicUrl + "assets/img/thanks.jpg";
    
    // Extract URL parameters from Payfast success URL
    const urlParams = new URLSearchParams(window.location.search);
    const donationId = urlParams.get('donation_id');
    const basketId = urlParams.get('basket_id');
    const errCode = urlParams.get('err_code');
    const errMsg = urlParams.get('err_msg');
    const transactionId = urlParams.get('transaction_id');
    const transactionAmount = urlParams.get('transaction_amount');
    const emailAddress = urlParams.get('email_address');
    const mobileNo = urlParams.get('mobile_no');
    
    // Determine the actual donation ID to use
    const actualDonationId = donationId || basketId;
    
    // call donation/status api to get the donation status
    const handleDonationStatus = async () => {
        if (!actualDonationId) {
            console.error('No donation_id or basket_id found in URL parameters');
            setIsSuccess(false);
            navigate('/donation');
            return;
        }

        try {
            console.log("errCode", errCode);
            console.log("errMsg", errMsg);
            // Check if payment was successful
            
            if (errCode == '000') {
                // Call API with payload for successful payment
                const payload = {
                    id: actualDonationId,
                    order_id: transactionId
                };
                
                console.log("Calling API with payload:", payload);
                const response = await axiosInstance.post('/donations/status', payload);
                
                console.log("API response:", response);
                
                if(response.data.success){
                    setIsSuccess(true);
                    clearCart(); // Clear cart after successful payment
                } else {
                    setIsSuccess(false);
                    navigate('/donation');
                }
            } else {
                // For failed payments, just show error without calling API
                console.log("Payment failed - err_code:", errCode, "err_msg:", errMsg);
                setIsSuccess(false);
                // navigate('/donation');
            }
        } catch (error) {
            console.error('Error updating donation status:', error);
            setIsSuccess(false);
            navigate('/donation');
        }
    }
    useEffect(() => {
        // Clear the cart when user reaches the thanks page

        // Call getDonationStatus if we have a donation ID
        if (actualDonationId) {
            console.log("actualDonationId", actualDonationId);
            handleDonationStatus();
        }
    }, [actualDonationId]); 
    return (
        <div>
            <Navbar /> 
            <div className='thanks_container'>
                <div className='thanks_img'>
                    <img src={imageUrl} alt="Thank You" />
                </div>
                <div className='thanks_content'>
                    {isSuccess ? (
                        <>
                            <h2>Thank You for Your Donation!</h2>
                            <p>Your generous contribution will make a difference in the lives of those in need.</p>
                            {transactionId && (
                                <p><strong>Transaction ID:</strong> {transactionId}</p>
                            )}
                        </>
                    ) : (
                        <>
                            <h2>Payment Processing</h2>
                            <p>We are processing your donation. You will receive a confirmation email shortly.</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Thanks
