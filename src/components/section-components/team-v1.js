import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TeamV1 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__team-area pt-115 pb-90 go-top">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="section-title-area ltn__section-title-2--- text-center">
						{/* <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Team</h6> */}
						<h1 className="section-title">Certifications</h1>
					</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-12 col-sm-12">
					<div className="ltn__team-item ltn__team-item-3---">
						<div className="team-img certificate_img">
						<img src={publicUrl+"assets/img/team/4.jpg"} alt="Image" />
						</div>

					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default TeamV1