import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { PiHandHeartDuotone } from "react-icons/pi";
import { Link } from 'react-router-dom';

const NavbarV2 = (props) => {
	const { cartItems, openCart, closeCart, isCartOpen } = useCart();
	const cartCount = cartItems?.length ?? 0;
    let publicUrl = process.env.PUBLIC_URL+'/'
	let CustomClass = props.CustomClass ? props.CustomClass : ''
        return (
			<div>
				<style jsx>{`
					.donation-buttons {
						display: flex;
						gap: 0.5rem;
						align-items: center;
					}
					@media (max-width: 768px) {
						.donation-buttons {
							flex-direction: column;
							gap: 0.25rem;
						}
						.donate-now-btn {
							font-size: 0.8rem;
							padding: 0.4rem 0.8rem;
						}
					}
				`}</style>
				<header className={"ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent--- gradient-color-4--- "}>
				<div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
					<div className="navbar-container">
					<div className="row align-items-center justify-content-between">
						<div className="col-6 ">
						<div className="site-logo-wrap">
							<div className="site-logo go-top">
							<a href="https://mtjfoundation.org/"> <img src={publicUrl+"assets/img/banner/mtjf_logo.png"} alt="mtjf_logo" /> </a>  
							<div onClick={() => { isCartOpen ? closeCart() : openCart(); }} className='cart-container'>
									 <div className="icon-shopping-cart">
										<div className="cart_count">
										 <sup>{cartCount}</sup>
										</div>
									 <PiHandHeartDuotone size={40} />
									</div>
							</div>
							</div> 
						</div>
						</div>
						<div className="col-6 text-end">
							<div className="donation-buttons">
								<Link to="/donate" className="btn btn-primary donate-now-btn">
									Donation Menu 
								</Link>
							</div>
						</div>	
					</div>
					</div>
				</div>
				</header>
		</div>
		)
}


export default NavbarV2