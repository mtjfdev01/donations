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
    // this is format for this page's url 
    //         returnUrl: `${process.env.BASE_Frontend_URL}/thanks?donation_id=${savedDonation.id}`,
    const donationId = new URLSearchParams(window.location.search).get('donation_id');
    // call donation/status api to get the donation status
    const getDonationStatus = async () => {
        const response = await axiosInstance.get(`/donations/${donationId}`);
        console.log("response", response);
        if(response.data.status === 'success'){
            setIsSuccess(true);
        }else{
            setIsSuccess(false);
            // show error image and error text and renavigate to donation page
            navigate('/donation');
        }
    }
    useEffect(() => {
        // Clear the cart when user reaches the thanks page
        clearCart();
        // getDonationStatus();
    }, [donationId, clearCart]);
    return (
        <div>
            <Navbar /> 
            {/* <PageHeader headertitle="Thank You" /> */}
            <div className='thanks_container'>
                <div className='thanks_img'>
                    <img src={imageUrl} alt="Thank You" />
                </div>
                <div className='thanks_content'>
                    <h2>Thank You for Your Donation!</h2>
                    <p>Your generous contribution will make a difference in the lives of those in need.</p>
                </div>
            </div>
            {/* <CallToActionV1 />
            <Footer /> */}
        </div>
    );
}

export default Thanks
