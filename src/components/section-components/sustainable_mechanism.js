import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { 
  FaGraduationCap,
  FaHospital,
  FaBolt,
  FaBuilding,
  FaSlidersH,
  FaHome,
  FaUsers,
  FaHandHoldingWater ,
  FaStore,
  FaHandsHelping 
} from 'react-icons/fa';
import { FaCow } from 'react-icons/fa6';
import { IoWaterOutline } from "react-icons/io5";
import { PiMosque } from "react-icons/pi";
import { GiWaterTower } from "react-icons/gi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaSolarPanel } from "react-icons/fa6";
import { MdFamilyRestroom } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";


class Sustainability extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

        const accordionData = [
            {
                id: 'faq-item-2-1',
                icon: GiMoneyStack,
                title: 'REVENUE STREAMS',
                content: 'Dairy sales, shop rentals, vocational products.',
                hasVideo: false
            },
            {
                id: 'faq-item-2-2',
                icon: FaSolarPanel,
                title: 'SOLAR ROI',
                content: 'Energy savings fund community welfare.',
                hasVideo: true,
                hasVideo: false,
                // imageSrc: 'assets/img/bg/17.jpg'
            },
            {
                id: 'faq-item-2-3',
                icon: MdFamilyRestroom,
                title: 'GRADUATION MODEL',
                content: 'Families exit after 10-15 years; new beneficiaries rotate in.',
                hasVideo: true,
                hasVideo: false,
                // imageSrc: 'assets/img/bg/17.jpg'
            }
        ];



    return <div className="neighbour-area section-bg-1 pt-70 pb-70">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center---">
			          {/* <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">Explore Neighbour</h6> */}
			          <h1 className="section-title text-center">Sustainability Mechanism</h1>
			        </div>
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-lg-12">
			            <div className="ltn__faq-inner ltn__faq-inner-2 ltn__faq-inner-3">
                            <div className="row">
                                {accordionData.map((item, index) => (
                                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={item.id}>
                                        <div className="card h-100">
                                            <div className="card-body text-center">
                                                <div className="mb-3">
                                                    <i className="fs-1  sustainability_icon">
                                                        <item.icon />
                                                    </i>
                                                </div>
                                                <h5 className="card-title mb-3">{item.title}</h5>
                                                <p className="card-text">{item.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
			     </div>
			    </div>
			  </div>
			</div>
        }
}

export default Sustainability