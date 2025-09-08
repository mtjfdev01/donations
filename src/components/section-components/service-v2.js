import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import { 
	FaGraduationCap,
	FaSlidersH,
	FaHome,
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
class ServiceV2 extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'

        // Feature data array using your neighbour data format
        const featuresData = [
            {
                id: 'faq-item-2-1',
                icon: FaHome,
                title: 'RESIDENTIAL HOUSING (102 UNITS)',
                description: 'Secure, modest homes constructed for long-term use, each with: Private sanitation, cooking area, ventilation, Electricity, solar backup, and water connection',
                isActive: false
            },
            {
                id: 'faq-item-2-2',
                icon: PiMosque,
                title: 'COMMUNITY MOSQUE & ISLAMIC INSTITUTE',
                description: 'Capacity of 150+ worshippers, Quranic and Hadith learning for both residents and local community, Moral, ethical, and spiritual education',
                isActive: true
            },
            {
                id: 'faq-item-2-3',
                icon: FaSolarPanel,
                title: 'CENTRALIZED SOLAR POWER SYSTEM (500 KVA)',
                description: 'Budget: PKR 50 Million, Covers lighting, fans, water pumps, mosque, RO plant, community center, Sustainable energy with 24/7 power at minimal cost',
                isActive: false
            },
            {
                id: 'faq-item-3-4',
                icon: GiWaterTower,
                title: 'WATER SUPPLY SCHEME (OVERHEAD TANK SYSTEM)',
                description: 'RCC overhead tank (40,000 gallons), 24/7 piped water supply to homes, mosque, cattle farm, and green belts, Integrated solar-powered pumping',
                isActive: false
            },
            {
                id: 'faq-item-3-6',
                icon: FaSlidersH,
                title: 'KASB SKILL CENTER (VOCATIONAL TRAINING)',
                description: 'Skills: stitching, handicrafts, food processing, IT basics, beautician, etc. Dedicated trainers and career counselors, Certificate-based programs',
                isActive: false
            },
            {
                id: 'faq-item-3-7',
                icon: AiOutlineUsergroupAdd,
                title: 'LIVELIHOOD SUPPORT (FAMILY-LEVEL)',
                description: 'Livelihood counseling and plans for every family, Small business funding or livestock provision, Follow-up mentorship and sales facilitation',
                isActive: false
            },
            {
                id: 'faq-item-3-8',
                icon: FaHandsHelping,
                title: 'COMMUNITY CENTER',
                description: 'Female leadership and decision-making space, Host parenting workshops, religious classes, and events, Psychological counseling sessions',
                isActive: false
            },
            {
                id: 'faq-item-3-5',
                icon: IoWaterOutline,
                title: 'SOLARIZED WATER FILTRATION PLANT (RO SYSTEM)',
                description: '6,000 GPD (gallons per day) capacity, Provides clean drinking water to 1,000+ people, Access for both residents and nearby community',
                isActive: false
            },
            {
                id: 'faq-item-3-9',
                icon: FaStore,
                title: 'COMMERCIAL SHOPS (20 UNITS)',
                description: 'Provided to APNA GHAR residents, Small-scale retail, food stalls, tailoring, grocery, etc. Income for resident families',
                isActive: false
            },
            {
                id: 'faq-item-3-10',
                icon: FaCow,
                title: 'DAIRY & LIVESTOCK FARM (200+ ANIMALS)',
                description: 'Operated and managed by trained residents, Provides milk and meat for community use and income, Links to MTJF nutrition program',
                isActive: false
            },
            {
                id: 'faq-item-3-11',
                icon: FaGraduationCap,
                title: 'HASNAIN DREAM SCHOOL + CAREER COUNSELING',
                description: 'Modern religious and formal education, Orphaned children receive scholarships, After-school support, mentorship, and career mapping',
                isActive: false
            },
            {
                id: 'faq-item-3-12',
                icon: MdMedicalServices,
                title: 'ADDITIONAL SERVICES',
                description: 'DIGITAL LITERACY HUB: IT lab with coding classes for youth. TELEHEALTH CLINIC: Remote consultations with urban hospitals.',
                isActive: false
            }
        ];

        return (
            <div className="ltn__feature-area pt-90 pb-90 go-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-area ltn__section-title-2--- text-center">
                                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Features</h6>
                                <h1 className="section-title">Facilities And Services</h1>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row ltn__custom-gutter" style={{ rowGap: '30px' }}>
                        {featuresData.map((feature, index) => (
                            <div key={feature.id} className="col-lg-3 col-sm-6 col-12">
					<div className={`ltn__feature-item ltn__feature-item-6`} 
     					style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>                                    <div className="ltn__feature-icon">
                                        <span>
                                            {/* Use the icon component from your data */}
                                            <feature.icon />
                                        </span>
                                    </div>
                                    <div className="ltn__feature-info">
                                        <h4>{feature.title}</h4>
                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default ServiceV2;