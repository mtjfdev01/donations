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
import { MdMedicalServices } from "react-icons/md";

import { FaCow } from 'react-icons/fa6';
import { IoWaterOutline } from "react-icons/io5";
import { PiMosque } from "react-icons/pi";
import { GiWaterTower } from "react-icons/gi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaSolarPanel } from "react-icons/fa6";

class Neighbour extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

        const accordionData = [
            {
                id: 'faq-item-2-1',
                icon: FaHome,
                title: 'RESIDENTIAL HOUSING (102 UNITS)',
                content: 'Secure, modest homes constructed for long-term use, each with:\n• Private sanitation, cooking area, ventilation\n• Electricity, solar backup, and water connection\n• Housing allocation is based on merit and need (not ownership)',
                hasVideo: false
            },
            {
                id: 'faq-item-2-2',
                icon: PiMosque,
                title: 'COMMUNITY MOSQUE & ISLAMIC INSTITUTE',
                content: '\n• Capacity of 150+ worshippers\n• Quranic and Hadith learning for both residents and local community\n• Moral, ethical, and spiritual education\n• Religious events and Islamic counseling for women and children',
                hasVideo: true,
                hasVideo: false,
                // imageSrc: 'assets/img/bg/17.jpg'
            },
            {
                id: 'faq-item-2-3',
                icon: FaSolarPanel,
                title: 'CENTRALIZED SOLAR POWER SYSTEM (500 KVA)',
                content: '\n• Budget: PKR 50 Million\n• Covers lighting, fans, water pumps, mosque, RO plant, community center\n• Sustainable energy with 24/7 power at minimal cost\n• Reduces reliance on fossil fuels\n• Supports SDG 7 (Affordable and Clean Energy)',
                hasVideo: false
            },
            {
                id: 'faq-item-3-4',
                icon: GiWaterTower,
                title: 'WATER SUPPLY SCHEME (OVERHEAD TANK SYSTEM)',
                content: '\n• RCC overhead tank (40,000 gallons)\n• 24/7 piped water supply to homes, mosque, cattle farm, and green belts\n• Integrated solar-powered pumping\n• Promotes health, hygiene, and SDG 6 (Clean Water & Sanitation)',
                hasVideo: false
            },
            {
                id: 'faq-item-3-6',
                icon: FaSlidersH,
                title: 'KASB SKILL CENTER (VOCATIONAL TRAINING)',
                content: '\n• Skills: stitching, handicrafts, food processing, IT basics, beautician, etc.\n• Dedicated trainers and career counselors\n• Certificate-based programs\n• Connected to micro-loans and business incubation\n• Supports SDG 8 (Decent Work and Economic Growth)',
                hasVideo: false
            },
            {
                id: 'faq-item-3-7',
                icon: AiOutlineUsergroupAdd,
                title: 'LIVELIHOOD SUPPORT (FAMILY-LEVEL)',
                content: '\n• Livelihood counseling and plans for every family\n• Small business funding or livestock provision\n• Follow-up mentorship and sales facilitation\n• Connects with MTJF\'s Women Financial Program',
                hasVideo: false
            },
            {
              id: 'faq-item-3-8',
                icon: FaHandsHelping,
                title: `COMMUNITY CENTER ${'\u00A0'}${'\u00A0'}${'\u00A0'}${'\u00A0'}${'\u00A0'}${'\u00A0'}`,
                content: '\n• Female leadership and decision-making space\n• Host parenting workshops, religious classes, and events\n• Psychological counseling sessions\n• Library, seminar room, and guest lounge',
                hasVideo: false
            },
            {
              id: 'faq-item-3-5',
              icon: IoWaterOutline ,
              title: 'SOLARIZED WATER FILTRATION PLANT (RO SYSTEM)',
              content: '\n• 6,000 GPD (gallons per day) capacity\n• Provides clean drinking water to 1,000+ people\n• Access for both residents and nearby community\n• Reduces disease, aligns with SDG 3',
              hasVideo: false
            },
            {
                id: 'faq-item-3-9',
                icon: FaStore,
                title: 'COMMERCIAL SHOPS (20 UNITS)',
                content: '\n• Provided to APNA GHAR residents\n• Small-scale retail, food stalls, tailoring, grocery, etc.\n• Income for resident families\n• Supports economic rehabilitation and dignity',
                hasVideo: false
            },
            {
                id: 'faq-item-3-10',
                icon: FaCow,
                title: 'DAIRY & LIVESTOCK FARM (200+ ANIMALS)',
                content: '\n• Operated and managed by trained residents\n• Provides milk and meat for community use and income\n• Links to MTJF nutrition program\n• Integrates with livelihood + health strategy',
                hasVideo: false
            },
            {
                id: 'faq-item-3-11',
                icon: FaGraduationCap,
                title: 'HASNAIN DREAM SCHOOL + CAREER COUNSELING',
                content: '\n• Modern religious and formal education\n• Orphaned children receive scholarships\n• After-school support, mentorship, and career mapping\n• Collaborations with online education partners',
                hasVideo: false
            },
            {
              id: 'faq-item-3-12',
              icon: MdMedicalServices,
              title: 'ADDITIONAL SERVICES',
              content: '\n•	DIGITAL LITERACY HUB: IT lab with coding classes for youth.\n• TELEHEALTH CLINIC: Remote consultations with urban hospitals.\n• CIRCULAR ECONOMY: Compost waste from dairy farm for green belts.\n• TRAUMA COUNSELING: Partnerships with mental health NGOs and institutes.',
              hasVideo: false
          }
        ];

        const renderAccordionItem = (item, index) => (
            <div className="card" key={item.id}>
                <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target={`#${item.id}`} aria-expanded="false">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center justify-content-center p-10">
                           <i> <item.icon /> </i>
                        </div>
                            <span className="ms-2">{item.title}</span>
                    </div>
                </h6>
                <div id={item.id} className={`collapse ${index === 1 ? 'show---' : ''}`} data-bs-parent={index < 4 ? "#accordion_2" : index < 8 ? "#accordion_4" : "#accordion_4"}>
                    <div className="card-body">
                        {item.hasVideo && (
                            <div className="ltn__video-img alignleft">
                                <img src={publicUrl + item.imageSrc} alt="video popup bg image" />
                                <a className="ltn__video-icon-2 ltn__video-icon-2-small ltn__video-icon-2-border----" href={item.videoUrl} data-rel="lightcase:myCollection">
                                    <i className="fa fa-play" />
                                </a>
                            </div>
                        )}
                        <div dangerouslySetInnerHTML={{ __html: item.content.replace(/\n/g, '<br />') }} />
                    </div>
                </div>
            </div>
        );

    return <div className="neighbour-area section-bg-1 pt-70 pb-70">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center---">
			          {/* <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">Explore Neighbour</h6> */}
			          <h1 className="section-title">Explore Our Facilities & Services</h1>
			        </div>
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-lg-12">
			           <div className="ltn__faq-inner ltn__faq-inner-2 ltn__faq-inner-3">
          <div className="row">
            <div className="col-lg-4">
              <div id="accordion_2">
                {accordionData.slice(0, 4).map((item, index) => renderAccordionItem(item, index))}
              </div>                                
            </div>
            <div className="col-lg-4">
              <div id="accordion_3">
                {accordionData.slice(4, 8).map((item, index) => renderAccordionItem(item, index + 4))}
              </div>                                
            </div>
            <div className="col-lg-4">
              <div id="accordion_4">
                {accordionData.slice(8, 12).map((item, index) => renderAccordionItem(item, index + 8))}
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

export default Neighbour