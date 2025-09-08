import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import BudgetOverview from './budget_overview/index';

const Budget_Overview = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Budget Overview" />
        <BudgetOverview />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Budget_Overview

