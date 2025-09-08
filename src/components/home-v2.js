import React from 'react';
import Navbar from './global-components/navbar-v2';
import Banner from './section-components/banner-v2';
import Aboutv3 from './section-components/about-v3';
import Video from './section-components/video-v2';
import UpComingProduct from './section-components/upcoming-product-v1';
import ApartmentV2 from './section-components/apartment-v2';
import ProductSlider from './section-components/product-slider-v2';
import Neighbour from './section-components/neighbour';
import Category from './section-components/category-v2';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import FabButton from './global-components/fab_button';
import EligibilityCriteria from './section-components/eligibility-criteria';
import BrandArea from './brands/brands';
const Home_V2 = () => {
    return <div>
        <Navbar />
        <Banner />
        <FabButton  tooltip="View Community Map" targetId="map_img_mobile" /> 
        <Aboutv3 />
        <Video />
        <ApartmentV2 />
        <UpComingProduct />
        <ProductSlider />
        <Neighbour />
        <Category showAllSections={false} />
        <EligibilityCriteria title="Eligibility Criteria" />
        <BrandArea />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Home_V2

