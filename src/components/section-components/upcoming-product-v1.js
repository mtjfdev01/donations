import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class UpcomingProductV1 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div>
			  {/* <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center---">
			          <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color--- white-color">Upcoming Projects</h6>
			          <h1 className="section-title  white-color">Dream Living Space <br />
			            Setting New Standards</h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__upcoming-project-slider-1-active slick-arrow-3">
			      {/* upcoming-project-item */}
			     
			      {/* upcoming-project-item */}
			     
			      {/* upcoming-project-item */}
			     
			      {/*  */}

			</div>
        }
}

export default UpcomingProductV1