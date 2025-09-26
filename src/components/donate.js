import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './global-components/navbar-v2';
import Banner from './section-components/banner-v2';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import CategoryV2 from './section-components/category-v2';
import DonationMenuForm from './section-components/donation_menu_form';
import PageHeader from './global-components/page-header';

// update this for donation page
const Donate  = () => {
    const location = useLocation();
    
    // Get donation type from query parameters for dynamic page header
    const getPageTitle = () => {
        const searchParams = new URLSearchParams(location.search);
        const donationFor = searchParams.get('donation_for') || searchParams.get('donationFor');
        
        if (donationFor) {
            const normalizedType = donationFor.toLowerCase().trim();
            switch (normalizedType) {
                case 'apna_ghar':
                case 'apnaghar':
                case 'apna ghar':
                    return "Apna Ghar - Donate Now";
                case 'flood':
                case 'flood_relief':
                case 'floodrelief':
                case 'flood relief':
                    return "Flood Relief - Donate Now";
                case 'general':
                case 'general_donations':
                case 'general donations':
                    return "General Support - Donate Now";
                default:
                    return "Donate Now";
            }
        }
        return "Donate Now";
    };

    return <div>
        <Navbar />
        {/* <Banner /> */}
        <PageHeader  customclass="flood-bg-image" />
        <CategoryV2 showAllSections={true} />
        <DonationMenuForm />

        {/* <CallToActionV1 />
         */}
         <Footer />
    </div>
}

export default Donate

