import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Page_header extends Component {

    render() {

        let HeaderTitle = this.props.headertitle;
        let publicUrl = process.env.PUBLIC_URL+'/'
        let Subheader = this.props.subheader ? this.props.subheader : HeaderTitle
		let CustomClass = this.props.customclass ? this.props.customclass : ''
        let Img = this.props.Img ? this.props.Img :'14.jpg'

        return (

		<div className={"text-left bg-image sm-mt-100 "+CustomClass} data-bs-bg={publicUrl+"assets/img/bg/org_flood.jpg"}> 
			<div className="container">
				<div className="row">
				<div className="col-lg-12"> 
					<div className="ltn__breadcrumb-inner">
					<h1 className="page-title clr_white -ml-30">{ HeaderTitle }</h1>
					<div className="ltn__breadcrumb-list">
						<ul>
						{/* <li><Link to="/"><span className="ltn__secondary-color"><i className="fas fa-home" /></span> Home</Link></li> */}
						{/* <li>{ Subheader }</li> */}
						</ul>
					</div>
					</div>
				</div>
				</div>
			</div>
		</div>


        )
    }
}


export default Page_header