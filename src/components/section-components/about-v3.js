import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="ltn__about-us-area pt-115 pb-100 ">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6 align-self-center">
			        <div className="about-us-img-wrap about-img-left">
			          <img src={publicUrl+"assets/img/others/11.jpg"}  alt="About Us Image" />
			          <div className="about-us-img-info about-us-img-info-2 about-us-img-info-3 d-none">
			            <div className="ltn__video-img ltn__animation-pulse1">
			              <img src={publicUrl+"assets/img/others/8.png"} alt="video popup bg image" />
			              <a className="ltn__video-icon-2 ltn__video-icon-2-border---" href="https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0" data-rel="lightcase:myCollection">
			                <i className="fa fa-play" />
			              </a>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-6 align-self-center">
			        <div className="about-us-info-wrap">
			          <div className="section-title-area ltn__section-title-2--- mb-30">
			            {/* <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">About Us</h6> */}
			            <h3 className="section-title">APNA GHAR </h3>
						<h6>A Shelter of Dignity for Widows, Abandoned Women & Orphans</h6>
			            <p>APNA GHAR Project— A first of it's kind integrated community for widows, orphans, and abandoned
							women-headed families. Built upon over 44 Kanals of donated
							land, this initiative seeks to establish a secure, dignified, and
							empowering residential ecosystem with holistic services
							addressing livelihood, education, faith, clean energy, and water
							access. </p>
			          </div>    

					<h6 className="section-subtitle section-subtitle-2--- ltn__primary-color">Objectives :</h6>

			          <div className="ltn__feature-item ltn__feature-item-3">
			            <div className="ltn__feature-icon">
			              <span><i className="flaticon-house-4" /></span>
			            </div>
			            <div className="ltn__feature-info">
			              <h4><a href="service-details.html">Shelter With Dignity</a></h4>
			              <p>To provide shelter with dignity to Zakat-eligible, vulnerable
						  women-headed families and orphans.</p>
			            </div>
			          </div>
			          <div className="ltn__feature-item ltn__feature-item-3">
			            <div className="ltn__feature-icon">
			              <span><i className="flaticon-call-center-agent" /></span>
			            </div>
			            <div className="ltn__feature-info">
			              <h4><a href="service-details.html">Faith-based Professional Skills </a></h4>
			              <p>To offer a faith-based and professional skills pathway
						  toward independence. </p>
			            </div>
			          </div>
			          <div className="ltn__feature-item ltn__feature-item-3">
			            <div className="ltn__feature-icon">
			              <span><i className="flaticon-maps-and-location" /></span>
			            </div>
			            <div className="ltn__feature-info">
			              <h4><a href="service-details.html">Sustainable Model</a></h4>
			              <p>To build a sustainable model powered by green energy and community-owned businesses.</p>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default AboutV3