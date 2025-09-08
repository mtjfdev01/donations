import React from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import { useCart } from '../../contexts/CartContext';
import { PiHandHeartDuotone } from "react-icons/pi";

// Add this function to handle smart navigation
const handleSmartNavigation = (targetSection) => {
	const currentPath = window.location.pathname;
	if (currentPath && currentPath.includes('/about')) {
	  // Already on about page - scroll to section
	  const element = document.getElementById(targetSection);
	  if (element) {
		element.scrollIntoView({ 
		  behavior: 'smooth', 
		  block: 'start' 
		});
	  }
	} else {
	  // Navigate to about page with section hash
	  window.location.href = `/about#${targetSection}`;
	}
  };


const NavbarV2 = (props) => {
	const { cartItems, openCart, closeCart, isCartOpen } = useCart();
	const cartCount = cartItems?.length ?? 0;
    let publicUrl = process.env.PUBLIC_URL+'/'
	let CustomClass = props.CustomClass ? props.CustomClass : ''
        return (
			<div>
				<header className={"ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent--- gradient-color-4--- "+ CustomClass}>
				{/* ltn__header-top-area end */}
				{/* ltn__header-middle-area start */}
				<div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
					<div className="navbar-container">
					<div className="row align-items-center">
						<div className="col-lg-2 col-md-3 col-6">
						<div className="site-logo-wrap">
							<div className="site-logo go-top">
							<Link to="/"><img src={publicUrl+"assets/img/banner/mtjf_logo.png"} alt="mtjf_logo" /></Link>   
							</div>
						</div>
						</div>
						<div className="col-lg-8 col-md-6 d-none d-md-block">
						<div className="header-menu go-top">
							<nav>
							<div className="ltn__main-menu">
								<ul>
								<li className="menu-icon"><Link to="/">Home</Link>
								</li>
									<li><Link to="/about">About</Link>
									<ul>
										<li><a onClick={() => handleSmartNavigation('vision-mission')}>Vision & Mission</a></li>
										<li><a onClick={() => handleSmartNavigation('objectives')}>Objectives</a></li>
										<li><a onClick={() => handleSmartNavigation('target-beneficiaries')}>Target Beneficiaries</a></li>
										<li><a onClick={() => handleSmartNavigation('sustainability-mechanisms')}>Sustainability Mechanisms</a></li>
										<li><a onClick={() => handleSmartNavigation('sdg-impact-mapping')}>SDG Impact Mapping</a>
										<ul>
											<li><a onClick={() => handleSmartNavigation('sdg-impact-mapping')}>Methodology</a></li>
											<li><a onClick={() => handleSmartNavigation('sdg-impact-mapping')}>SDG Impact Matrix</a></li>
											<li><a onClick={() => handleSmartNavigation('cross-cutting-sdg-synergies')}>Cross-Cutting SDG Synergies</a></li>
											<li><a onClick={() => handleSmartNavigation('sdg-4-monitoring')}>SDG 4 Monitoring Framework</a></li>
										</ul>
										</li>
										<li><a onClick={() => handleSmartNavigation('logical-framework')}>Logical Framework (LFA) Matrix</a></li>
									</ul>
									</li>
								<li><Link to="/facalities-and-services"> Facilities / Services </Link></li>
								<li><Link to="/budget-overview"> Budget Overview </Link></li>
								<li><Link to="/contact">Contact</Link></li>
								<li className="special-link">
									<Link to="/donate">Donate Now</Link>
								</li>
								{/* onlick open cart menu from cart context  handle like toggle*/}
								<li className="special-link ltn__utilize-toggle" onClick={() => {
									isCartOpen ? closeCart() : openCart();
								}}>
									 <div className="icon-shopping-cart">
										<div className="cart_count">
										 <sup>{cartCount}</sup>
										</div>
									 <PiHandHeartDuotone size={40} />

										</div>
								</li>
								<li>
								</li>
								</ul>
							</div>
							</nav>
						</div>
						</div>
						<div className="col-lg-2 col-md-3 col-6 text-center d-none d-xl-block">
						<div className="start-site-logo-wrap">
							<div className="site-logo go-top">
							<Link to="/"><img src={publicUrl+"assets/img/logo.png"} alt="mtjf_logo" /></Link>   
							</div>
						</div>
						</div>


						<div className="col-6 d-md-none">
						{/* Mobile Menu Button */}
						<div className="mobile-menu-toggle d-xl-none">
							<a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
							<svg viewBox="0 0 800 600">
								<path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top" />
								<path d="M300,320 L540,320" id="middle" />
								<path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) " />
							</svg>
							</a>
						</div>
						</div>
					</div>
					</div>
				</div>
				{/* ltn__header-middle-area end */}
				</header>
				<div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
				<div className="ltn__utilize-menu-inner ltn__scrollbar">
					<div className="ltn__utilize-menu-head">
					<div className="site-logo">
						<Link to="/"><img src={publicUrl+"assets/img/logo.png"} alt="Logo" /></Link>
					</div>
					<button className="ltn__utilize-close">×</button>
					</div>
					<div className="ltn__utilize-menu-search-form">

					<div className="ltn__utilize-menu">
					<ul>
						<li><Link to="/">Home</Link>
						</li>
						<li><Link to="/about">About</Link>
							<ul>
								<li><Link to="/">Vision & Mission</Link></li>
								<li><Link to="/">Objectives</Link></li>
								<li><Link to="/">Target Beneficiaries</Link></li>
								<li><Link to="/">Sustainability Mechanisms</Link></li>
								<li><Link to="/">SDG Impact Mapping</Link></li>
							</ul>
						</li>
						<li><Link to="/facalities-and-services">Facilities / Services</Link>
						</li>
						<li><Link to="/budget-overview">Budget Overview</Link>
						</li>
						<li><Link to="/contact">Contact</Link>
						</li>
						<li><Link to="/donate">Donate Now</Link>
						</li>
						{/* Cart Menu */}
						{/* <li onClick={() => {
							isCartOpen ? closeCart() : openCart();
						}}>
							<i className="icon-shopping-cart">
								<sup>{cartCount}</sup>
								</i>
						</li> */}
						<li className="special-link ltn__utilize-toggle" 
						onClick={() => { isCartOpen ? closeCart() : openCart(); }}>
							<div className="icon-shopping-cart">
							<div className="cart_count">
								<sup>{cartCount}</sup>
							</div>
							<PiHandHeartDuotone size={40} />

						</div>
						</li>
					</ul>
					</div>
					<div className="ltn__social-media-2">
					<ul>
						<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
						<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
						<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
						<li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
					</ul>
					</div>
				</div>
				</div>
			</div>
		</div>
		)
}


export default NavbarV2