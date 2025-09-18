import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import DonationForm from './checkout/index';

const CheckOuttV1 = () => {
    return <div>
        <Navbar /> 
        <PageHeader headertitle="Checkout" />
        <DonationForm />
        {/* <CallToActionV1 />
        <Footer /> */}
    </div>
}

export default CheckOuttV1

