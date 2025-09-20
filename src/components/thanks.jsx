import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import DonationForm from './checkout/index';
import axiosInstance from '../utils/axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Thanks = () => {
    const navigate = useNavigate();
    const [isSuccess, setIsSuccess] = useState(false);

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
        getDonationStatus();
    }, [donationId]);
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
