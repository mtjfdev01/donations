import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import Neighbour from './section-components/neighbour';
import ServiceV2 from './section-components/service-v2';

const Facalities_and_Services = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Facilities And Services" />
        {/* <Neighbour /> */}
        <ServiceV2 />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Facalities_and_Services