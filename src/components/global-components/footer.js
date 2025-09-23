import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import Copyright from './copyright';
import { FaMobileScreen } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";

class Footer_v1 extends Component {

    componentDidMount() {

    	const $ = window.$;
    	
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);

         $('.go-top').find('a').on('click', function () {

			$(".quarter-overlay").fadeIn(1);

				$(window).scrollTop(0);

			setTimeout(function(){
			    	$(".quarter-overlay").fadeOut(300);
				}, 800);

        });


		$(document).on('click','.theme-btn-1 ', function(){ 
            $( 'div' ).removeClass( 'modal-backdrop' );
            $( 'div' ).removeClass( 'show' );
            $( 'div' ).removeClass( 'fade' );
			$('body').attr("style", "");
        });
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"

        return (
				<footer className="ltn__footer-area  ">
				  <div className="footer-top-area  section-bg-2 plr--5">
				    <div className="container-fluid">
				      <div className="row">
				        <div className="col-xl-3 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-about-widget">
				            <div className="footer-logo">
				              <div className="site-logo">
				                <img src={publicUrl+"assets/img/banner/mtjf_logo.png"} alt="Logo" /> 
				              </div>
				            </div>
				            {/* <p>A Shelter of Dignity for Widows, Abandoned
							Women & Orphans .</p> */}
				            <div className="footer-address">
				              <ul>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-placeholder" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p>Makhdoompur Road Tulamba, <br /> District Khanewal, Pakistan</p>
				                  </div>
				                </li>
				                <li>
				                  <div className="footer-address-icon">
				                    <IoCallSharp />
				                  </div>
				                  <div className="footer-address-info">
				                    <p><a href="tel:+92 303 2440000">+92 303 2440000</a></p>
				                    <p><a href="tel:+92 61 111 786 853">+92 61 111 786 853</a></p>
				                  </div>
				                </li>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-mail" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p><a href="mailto:info@mtjfoundation.org">info@mtjfoundation.org</a></p>
				                  </div>
				                </li>
				              </ul>
				            </div>
				            <div className="ltn__social-media mt-20">
						    	<Social />
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-2 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">Quick Links</h4>
				            <div className="footer-menu go-top">
				              <ul>
				                <li><a href="https://mtjfoundation.org/" target="_blank">Home</a></li>
				                <li><a href="https://mtjfoundation.org/about-mtj/" target="_blank">About</a></li>
				                <li><a href="https://mtjfoundation.org/our-projects/" target="_blank">Projects</a></li>
				                <li><a href="https://mtjfoundation.org/volunteer/" target="_blank">Volunteer</a></li>
				                <li><a href="https://mtjfoundation.org/contact/" target="_blank">Contact us</a></li>
				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-2 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">Locations </h4>
				            <div className="footer-menu go-top">
				              <ul>
							  <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-placeholder" /> <span style={{fontWeight: 'bold'}}>Karachi:</span>
				                  </div>
				                  <div className="footer-address-info">
				                    <p>Office No. 1, 190-1/A, Khayyam Chambers Nursery Market, Block 2, P.E.C.H.S. Main Shahrah-e-Faisal, Karachi</p>
									<div className="footer-address-icon">
				                    <IoCallSharp /><span style={{fontWeight: 'bold'}}>021-111-786-853</span>
				                  </div>
								  <div className="footer-address-icon">
									{/* here i want mobile icon icon-call */}
				                    <FaMobileScreen  /> <span style={{fontWeight: 'bold'}}> 0300-2001575 </span>
				                  </div>
				                  </div>
				                </li>	
								<li>
				                  <div className="footer-address-icon">
								  <i className="icon-placeholder" /> <span style={{fontWeight: 'bold'}}>Multan:</span>
				                  </div>
								  <div className="footer-address-info">
				                    <p>House #89 Block C, Model Town Multan</p>
									<div className="footer-address-icon">
				                    <IoCallSharp /> <span style={{fontWeight: 'bold'}}>061-111-786-853</span>
				                  </div>
								  <div className="footer-address-icon">
									{/* here i want mobile icon icon-call */}
				                    <FaMobileScreen  /> <span style={{fontWeight: 'bold'}}> 0300-4422543 </span>
				                  </div>
				                  </div>
				                </li>				              

								</ul>
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-2 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            {/* <h4 className="footer-title">Locations (2)</h4> */}
				            <div className="footer-menu go-top">
				              <ul>
							  <li>
				                  <div className="footer-address-icon">
								  <i className="icon-placeholder" /> <span style={{fontWeight: 'bold'}}>Lahore:</span>
				                  </div>
								  <div className="footer-address-info">
				                    <p>Office # 59-B, Faisal Town, Opposite Moon Market. Lahore</p>
								  <div className="footer-address-icon">
									{/* here i want mobile icon icon-call */}
				                    <FaMobileScreen  /> <span style={{fontWeight: 'bold'}}> 0300-4425557 </span>
				                  </div>
				                  </div>
				                </li>	
								<li>
				                  <div className="footer-address-icon">
								  <i className="icon-placeholder" /> <span style={{fontWeight: 'bold'}}>Faisalabad:</span>
				                  </div>
								  <div className="footer-address-info">
				                    <p>Jamia al Hasanain, Green Town, Faisalabad</p>
								  <div className="footer-address-icon">
									{/* here i want mobile icon icon-call */}
									<IoCallSharp /><span style={{fontWeight: 'bold'}}>061-111-786-853</span>
									<div className="footer-address-icon"><FaMobileScreen  /> <span style={{fontWeight: 'bold'}}> 0300-4463903 </span></div>
				                  </div>
				                  </div>
				                </li>			              
				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-3 col-md-6 col-sm-12 col-12">
				          <div className="footer-widget footer-newsletter-widget">
				            <h4 className="footer-title">Newsletter</h4>
				            <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
				            <div className="footer-newsletter">
				              <form action="#">
				                <input type="email" name="email" placeholder="Email*" />
				                <div className="btn-wrapper">
				                  <button className="theme-btn-1 btn" type="submit"><i className="fas fa-location-arrow" /></button>
				                </div>
				              </form>
				            </div>
				            {/* <h5 className="mt-30">We Accept</h5>
				            <img src={publicUrl+"assets/img/icons/payment-4.png"} alt="Payment Image" /> */}
				          </div>
				        </div>
				      </div>
				    </div>
				  </div>
				  <Copyright />
				</footer>
        )
    }
}


export default Footer_v1