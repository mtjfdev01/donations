import React from 'react';
import Navbar from './global-components/navbar-v2';
import Banner from './section-components/banner-v2';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import CategoryV2 from './section-components/category-v2';
import PageHeader from './global-components/page-header';

// update this for donation page
const Donate  = () => {
    return <div>
        <Navbar />
        {/* <Banner /> */}
        <PageHeader headertitle="Donate Now" subheader="Donate" />
        <CategoryV2 showAllSections={true} />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Donate

