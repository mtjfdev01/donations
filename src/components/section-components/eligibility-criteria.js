import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

// it accepts a prop called title 
class EligibilityCriteria extends Component {
  render() {
    // let publicUrl = process.env.PUBLIC_URL + '/';
    // let imagealt = 'image';

    // Eligibility criteria data
    const eligibilityItems = [
      {
        iconClass: 'flaticon-woman',
        title: 'Widows & Divorced Women',
        description: 'Without male guardianship, financially vulnerable',
        category: 'Category Description',
        to: '/#',
      },
      {
        iconClass: 'flaticon-family',
        title: 'Abandoned Women headed Families',
        description: 'Deserted or socially excluded women with dependent children',
        category: 'Category Description',
        to: '/#',
      },
      {
        iconClass: 'flaticon-children',
        title: 'Double Orphans',
        description: 'Children who have lost both parents',
        category: 'Category Description',
        to: '/#',
      },
      {
        iconClass: 'flaticon-charity',
        title: 'Zakat Eligible Individuals',
        description: 'Minimum 70% of residents will be verified as Zakat eligible',
        category: 'Category Description',
        to: '/#',
      },
    ];

    return (
      <div className="ltn__category-area ltn__product-gutter section-bg-1--- pt-20 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                {/* <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">Eligibility Criteria</h6> */}
                <h1 className="section-title">{this?.props?.title || "Eligibility Criteria"}</h1>
              </div>
            </div>
          </div>

          <div className="row ltn__category-slider-active--- slick-arrow-1 justify-content-center go-top">
            {eligibilityItems.map((item, idx) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-20" key={idx}>
                <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center--- eligibility-item">
                  {/* <Link to={item.to}> */}
                    <span className="category-title">{item.title}</span>
                    <span className="category-brief">{item.description}</span>
                  {/* </Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default EligibilityCriteria;
