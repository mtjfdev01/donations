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
				<style>{`
					.navbar-items {
						width: 100%;
						padding: 0 15px;
					}
					.donation-buttons {
						display: flex;
						gap: 0.5rem;
						align-items: center;
					}
					.cart-container {
						cursor: pointer;
						transition: transform 0.2s ease;
					}
					.cart-container:hover {
						transform: scale(1.05);
					}
					@media (max-width: 768px) {
						.navbar-items {
							padding: 0 10px;
							flex-wrap: nowrap;
							gap: 5px;
						}
						.site-logo-wrap {
							min-width: 0;
						}

						.donation-buttons {
							flex-shrink: 0;
						}
						.donate-now-btn {
							font-size: 1rem;
							padding: 0.4rem 0.8rem;
							white-space: nowrap;
						}
					}
				`}</style>
				<header className={"ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent--- gradient-color-4--- "}>
				<div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
					<div className="navbar-container">
					<div className="row align-items-center justify-content-between">
						<div className="col-12">
							<div className="navbar-items d-flex align-items-center justify-content-between">
								{/* Logo */}
								<div className="site-logo-wrap">
									<div className="site-logo go-top">
										<a href="https://mtjfoundation.org/"> 
											<img src={publicUrl+"assets/img/banner/mtjf_logo.webp"} alt="mtjf_logo" /> 
										</a>
									</div> 
								</div>
								
								{/* Cart Icon */}
								<div onClick={() => { isCartOpen ? closeCart() : openCart(); }} className='cart-container'>
									<div className="icon-shopping-cart">
										<div className="cart_count">
											<sup>{cartCount}</sup>
										</div>
										<PiHandHeartDuotone size={40} />
									</div>
								</div>
								
								{/* Donation Button */}
								<div className="donation-buttons">
									<Link to="/donate" className="btn btn-primary donate-now-btn">
										Donation Menu 
									</Link>
								</div>
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