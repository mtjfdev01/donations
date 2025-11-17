import React from 'react';
import Navbar from './global-components/navbar-v2';
import Footer from './global-components/footer';
import CategoryV2 from './section-components/category-v2';
import PageHeader from './global-components/page-header';

const Donate = () => {
    return <div>
        <Navbar />
        <PageHeader customclass="flood-bg-image" />
        <CategoryV2 showAllSections={true} />
        <Footer />
    </div>
}

export default Donate

