import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class VideoV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__about-us-area section-bg-1 bg-image-right-before pt-20 pb-20">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6 align-self-center">
			        <div className="about-us-info-wrap">
			          <div className="section-title-area ltn__section-title-2--- mb-20">
			            {/* <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">Building Facilities</h6> */}
			            <h1 className="section-title"> Facilities And Services Offered </h1>
			            {/* <p>APNA GHAR is not just a housing project, it is a faith-anchored community of dignity, purpose, and
						transformation. It brings together shelter, Islam, skills, sustainability, and love. Through your generous
						support, this project becomes a Sadqa-e-Jariah that keeps on giving—a lifelong gift to the most
						deserving.</p> */}
			          </div>
			          <ul className="ltn__list-item-half ltn__list-item-half-2 list-item-margin clearfix">
			            <li>
			              <i className="icon-done" />
			              Residential Housing (102 Units)
			            </li>
			            <li>
			              <i className="icon-done" />
			              Luxurious interior design and amenities
			            </li>
			            <li>
			              <i className="icon-done" />
						  Community Mosque & Islamic Institute
			            </li>
						<li>
			              <i className="icon-done" />
			              Centralized Solar Power System (500 KVA)
			            </li>
			            <li>
			              <i className="icon-done" />
			              Water Supply Scheme (Overhead Tank System)
			            </li>
			            <li>
			              <i className="icon-done" />
			              Solarized Water Filtration Plant (RO System)
			            </li>
						<li>
			              <i className="icon-done" />
						  Kasb Skill Center (Vocational Training)
			            </li>
						<li>
			              <i className="icon-done" />
						  Livelihood Support (Family-Level)
			            </li>
						<li>
			              <i className="icon-done" />
						  Community Center
			            </li>
						<li>
			              <i className="icon-done" />
						  Commercial Shops (20 Units)
			            </li>
						<li>
			              <i className="icon-done" />
						  Dairy & Livestock Farm (200+ Animals)
			            </li>
						<li>
			              <i className="icon-done" />
						  Hasnaing Dream School + Career Counseling
			            </li>
			          </ul>
			          {/* <div className="  ltn__animation-pulse2 text-center mt-30">
			            <a className="ltn__video-play-btn bg-white--- ltn__secondary-bg" href="https://www.youtube.com/embed/As6ihUvuXjM?autoplay=1&mute=1&si=idq0LVtePlsvVS1E" data-rel="lightcase:myCollection">
			              <i className="icon-play  ltn__secondary-color--- white-color" /> 
			            </a>
			          </div> */}
			        </div>
			      </div>
			      <div className="col-lg-6 align-self-center">
			        <div className="about-us-img-wrap about-img-left">
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default VideoV2