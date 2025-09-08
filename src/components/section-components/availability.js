import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Availability extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

        // Array of data to loop through
        const availabilityData = [
            {
                residence: 'Tower Name',
                bedrooms: '3',
                bathroom: '3',
                sqft: '1,200',
                rentPrice: '$3,500',
                details: '+ Available'
            },
            {
                residence: 'Tower Name',
                bedrooms: '3',
                bathroom: '3',
                sqft: '1,200',
                rentPrice: '$3,500',
                details: '+ Available'
            },
            {
                residence: 'Tower Name',
                bedrooms: '3',
                bathroom: '3',
                sqft: '1,200',
                rentPrice: '$3,500',
                details: '+ Available'
            },
            {
                residence: 'Tower Name',
                bedrooms: '3',
                bathroom: '3',
                sqft: '1,200',
                rentPrice: '$3,500',
                details: '+ Available'
            },
            {
                residence: 'Tower Name',
                bedrooms: '3',
                bathroom: '3',
                sqft: '1,200',
                rentPrice: '$3,500',
                details: '+ Available'
            },
            {
                residence: 'Tower Name',
                bedrooms: '3',
                bathroom: '3',
                sqft: '1,200',
                rentPrice: '$3,500',
                details: '+ Available'
            },
            {
                residence: 'Tower Name',
                bedrooms: '3',
                bathroom: '3',
                sqft: '1,200',
                rentPrice: '$3,500',
                details: '+ Available'
            },
            {
                residence: 'Tower Name',
                bedrooms: '3',
                bathroom: '3',
                sqft: '1,200',
                rentPrice: '$3,500',
                details: '+ Available'
            }
        ];

    return <div className="select-availability-area pb-120">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center---">
			          {/* <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">Avialable Spaces</h6> */}
			          <h1 className="section-title">Select Donation</h1>
			        </div>
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="ltn__select-availability-table-wrap">
			          <div className="ltn__select-availability-table d-none d-md-block">
			            <ul className="ltn__select-availability-table-head">
			              <li>Residence</li>
			              <li>Bedrooms</li>
			              <li>Bathroom</li>
			              <li>SQ.FT </li>
			              <li>Rent Price</li>
			              <li>Details</li>
			            </ul>
			            {availabilityData.map((item, index) => (
			              <ul key={index} className="ltn__select-availability-table-row">
			                <li className="tower-name">{item.residence}</li>
			                <li>{item.bedrooms}</li>
			                <li>{item.bathroom}</li>
			                <li>{item.sqft}</li>
			                <li>{item.rentPrice}</li>
			                <li><a href="product-details.html">{item.details}</a></li>
			              </ul>
			            ))}
			          </div>
			          <div className="ltn__select-availability-table-responsive d-md-none">
			            {availabilityData.map((item, index) => (
			              <ul key={index} className="ltn__select-availability-table-row-responsive-item">
			                <li><span>Residence</span> <span className="tower-name">{item.residence}</span></li>
			                <li><span>Bedrooms</span> <span>{item.bedrooms}</span></li>
			                <li><span>Bathroom</span> <span>{item.bathroom}</span></li>
			                <li><span>SQ.FT</span> <span>{item.sqft}</span></li>
			                <li><span>Rent Price</span> <span>{item.rentPrice}</span></li>
			                <li><span>Details</span> <span><a href="product-details.html">{item.details}</a></span></li>
			              </ul>
			            ))}
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default Availability