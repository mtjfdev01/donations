import React from 'react';
import Navbar from './global-components/navbar-v2';
import Footer from './global-components/footer';
import DonationForm from './checkout/index';

const CheckOuttV1 = () => {
    return <div>
        <Navbar /> 
        {/* <PageHeader /> */}
        <DonationForm />
        <Footer />
        {/* <CallToActionV1 />
        <Footer /> */}
    </div>
}

export default CheckOuttV1

