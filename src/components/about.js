import React, { useEffect } from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import AboutV3 from './section-components/about-v3';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import SgdImpactTable from './section-components/sgd-impact-table';
import VisionAndMission from './VisionAndMission/VisionAndMission';
import Sustainability from './section-components/sustainable_mechanism';
import LogicalFramework from './logical_framwork/logical_framwork';
import SdgSynergies from './sgd_synergies';
import MonitoringFramework from './monitoring_framework';
import BrandArea from './brands/brands';
import TeamV1 from './section-components/team-v1';
import EligibilityCriteria from './section-components/eligibility-criteria';
import ServiceV2 from './section-components/service-v2';



const About_v1 = () => {
   // Add useEffect to handle hash navigation
useEffect(() => {
    const hash = window.location.hash; 
    if (hash) {
      // Remove the # symbol and clean the hash
      const cleanHash = hash.replace('#', '');
      const targetElement = document.getElementById(cleanHash);
      
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }, 500);
      }
    }
  }, []);

    return <div>
        <Navbar />
        <PageHeader headertitle="About Us" />
        <div id="objectives">
            <AboutV3 />
        </div>
        <div id="vision-mission">
            <VisionAndMission />
        </div>
        <div id="sdg-impact-mapping">
            <SgdImpactTable />
        </div>
        <div id="cross-cutting-sdg-synergies">
            <SdgSynergies />
        </div>
        <div id="logical-framework">
            <LogicalFramework /> 
        </div>
        <div id="sustainability-mechanisms">
            <Sustainability />
        </div>


        <div id="sdg-4-monitoring">
            <MonitoringFramework />
        </div>
        <div id="target-beneficiaries"> 
            <EligibilityCriteria title="Target Beneficiaries" />
        </div>
        <TeamV1 />
        <ServiceV2 />
        <BrandArea />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default About_v1

