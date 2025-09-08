import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import FabButton from '../global-components/fab_button';

class ApartmentV2 extends Component {

    render() {

	let CustomClass = this.props.customClass ? this.props.customClass : ''

    let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className={"ltn__apartments-plan-area pt-115 pb-70 "+ CustomClass}>
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">Apna-Ghar Sketch</h6>
			          <h1 className="section-title">Building Plan</h1>
			        </div>
			        <div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center">
			          <div className="nav">
			            <a className="active show" data-bs-toggle="tab" href="#liton_tab_3_1">Community Map</a>
			            <a data-bs-toggle="tab" href="#liton_tab_3_2">Home</a>
			            <a data-bs-toggle="tab" href="#liton_tab_3_5">Mosque</a>
			            <a data-bs-toggle="tab" href="#liton_tab_3_3"> Hasnaing Dream School</a>
						<a data-bs-toggle="tab" href="#liton_tab_3_4"> Community Center </a>
			            <a data-bs-toggle="tab" href="#liton_tab_3_6"> Livestock Farm</a>
			          </div>
			        </div>
			        <div className="tab-content">
			          <div className="tab-pane fade active show" id="liton_tab_3_1">
			            <div className="ltn__apartments-tab-content-inner">
			              <div className="row">

			                {/* <div className="col-lg-6"> */}
			                  <div className="apartments-plan-img apna_ghar_mbl_img" id='map_img_mobile'>
			                    <img src={publicUrl+"assets/img/others/10.webp"} alt="#" />
			                  </div>
							  <div className="apartments-plan-img apna_ghar_img" id='map_img'>
			                    <img src={publicUrl+"assets/img/others/10-rotated.webp"} alt="#" />
			                  </div>
							  {/* </div> */}

							<div className="col-lg-12">
			                  <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
			                    <h2>Apna Ghar </h2>
			                    <p>APNA GHAR is not just a housing project, it is a faith-anchored community of dignity, purpose, and
									transformation. It brings together shelter, Islam, skills, sustainability, and love. Through your generous
									support, this project becomes a Sadqa-e-Jariah that keeps on giving—a lifelong gift to the most deserving.
								</p>
			                    <div className="apartments-info-list apartments-info-list-color mt-40">
			                      <ul>
			                        <li><label>Total Area</label> <span> 44 Kanals</span></li>
			                        <li><label>Residential Housing </label> <span>102 Units </span></li>
			                        <li><label>Commercial Shops</label> <span> 20 Units </span></li>
			                        <li><label>Dairy & Livestock Farm</label> <span> 200+ Animals </span></li>
			                        <li><label>Community Mosque & Islamic Institute</label> <span> 1 Unit </span></li>
			                      </ul>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="tab-pane fade" id="liton_tab_3_2">
			            <div className="ltn__product-tab-content-inner">
			              <div className="row">
			                <div className="col-lg-6  v-center">

			                  <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white--- text123">
			                    <h2>Home</h2>
			                    <p>Secure, modest homes constructed for long-term use, each with:</p>
			                    <ul className="home-features-list">
			                      <li>Private sanitation, cooking area, ventilation</li>
			                      <li>Electricity, solar backup, and water connection</li>
			                      <li>Housing allocation is based on merit and need (not ownership)</li>
			                    </ul>
			                    {/* <div className="apartments-info-list apartments-info-list-color mt-40">
			                      <ul>
			                        <li><label>Total Area</label> <span> 44 Kanals</span></li>
			                        <li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
			                        <li><label>Bathroom</label> <span>45 Sq. Ft</span></li>
			                        <li><label>Belcony/Pets</label> <span>Allowed</span></li>
			                        <li><label>Lounge</label> <span>650 Sq. Ft</span></li>
			                      </ul>
			                    </div> */}
			                  </div>
			                </div>
			                <div className="col-lg-6">
			                  <div className="apartments-plan-img">
			                    <img src={publicUrl+"assets/img/others/home_map - Copy123.jpg"} alt="#" />
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="tab-pane fade" id="liton_tab_3_3">
			            <div className="ltn__product-tab-content-inner">
			              <div className="row">
			                <div className="col-lg-6 v-center">
			                  <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
			                    <h2>Al-Hasnain Dream School</h2>
								<p>Comprehensive educational institution offering:</p>
								<ul className="school-features-list">
								<li>Modern religious and formal education</li>
								<li>Orphaned children receive scholarships</li>
								<li>After-school support, mentorship, and career mapping</li>
								<li>Collaborations with online education partners</li>
								</ul>
                			  </div>
			                </div>
			                <div className="col-lg-6">
			                  <div className="apartments-plan-img">
			                    {/* <img src={publicUrl+"assets/img/others/10.png"} alt="#" /> */}
								<h3 className='text-center'>Map Will be uploaded soon...</h3>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="tab-pane fade" id="liton_tab_3_4">
			            <div className="ltn__product-tab-content-inner">
			              <div className="row">
			                <div className="col-lg-6">
			                  <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
			                    <h2>Community Center</h2>
                    <p>Dedicated space for community development and empowerment:</p>
                    <ul className="community-center-features-list">
                      <li>Female leadership and decision-making space</li>
                      <li>Host parenting workshops, religious classes, and events</li>
                      <li>Psychological counseling sessions</li>
                      <li>Library, seminar room, and guest lounge</li>
                    </ul>
                  </div>
			                </div>
			                <div className="col-lg-6">
			                  <div className="apartments-plan-img">
			                    {/* <img src={publicUrl+"assets/img/others/10.png"} alt="#" /> */}
								<h3 className='text-center'>Map Will be uploaded soon...</h3>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="tab-pane fade" id="liton_tab_3_5">
			            <div className="ltn__product-tab-content-inner">
			              <div className="row">
			                <div className="col-lg-6 v-center">
			                  <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
			                    <h2>Mosque</h2>
                   				<p>Community mosque serving residents and local community with:</p>
								<ul className="mosque-features-list">
									<li>Capacity of 150+ worshippers</li>
									<li>Quranic and Hadith learning for both residents and local community</li>
									<li>Moral, ethical, and spiritual education</li>
									<li>Religious events and Islamic counseling for women and children</li>
								</ul>
                 			  </div>
			                </div>
			                <div className="col-lg-6">
			                  <div className="apartments-plan-img">
			                    {/* <img src={publicUrl+"assets/img/others/10.png"} alt="#" /> */}
								<h3 className='text-center'>Map Will be uploaded soon...</h3>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
					  <div className="tab-pane fade" id="liton_tab_3_6">
			            <div className="ltn__product-tab-content-inner">
			              <div className="row">
			                <div className="col-lg-6 v-center">
			                  <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
			                    <h2>Dairy & Livestock Farm</h2>
                    <p>DAIRY & LIVESTOCK FARM (200+ ANIMALS)</p>
                    <ul className="livestock-farm-features-list">
                      <li>Operated and managed by trained residents</li>
                      <li>Provides milk and meat for community use and income</li>
                      <li>Links to MTJF nutrition program</li>
                      <li>Integrates with livelihood + health strategy</li>
                    </ul>
                  </div>
			                </div>
			                <div className="col-lg-6">
			                  <div className="apartments-plan-img">
			                    {/* <img src={publicUrl+"assets/img/others/10.png"} alt="#" /> */}
								<h3 className='text-center'>Map Will be uploaded soon...</h3>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default ApartmentV2