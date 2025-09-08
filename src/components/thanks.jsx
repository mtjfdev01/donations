import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import DonationForm from './checkout/index';

const Thanks = () => {
    let publicUrl = process.env.PUBLIC_URL + '/';
    const imageUrl = publicUrl + "assets/img/thanks.jpg";
    
    return (
        <div>
            <Navbar /> 
            <PageHeader headertitle="Thank You" />
            <div className='thanks_container'>
                <div className='thanks_img'>
                    <img src={imageUrl} alt="Thank You" />
                </div>
                <div className='thanks_content'>
                    <h2>Thank You for Your Donation!</h2>
                    <p>Your generous contribution will make a difference in the lives of those in need.</p>
                </div>
            </div>
            <CallToActionV1 />
            <Footer />
        </div>
    );
}

export default Thanks
