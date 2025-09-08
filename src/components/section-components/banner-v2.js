import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
// import mtjf_logo from '../../../public/assets/img/banner/mtjf_logo.png';
class BannerV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <div className="ltn__slider-area ltn__slider-11  ltn__slider-11-slide-item-count-show--- ltn__slider-11-pagination-count-show--- section-bg-1">
			  <div className="ltn__slider-11-inner">
			    <div className="ltn__slider-11-active">
			      {/* slide-item */}
			      <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
			        <div className="ltn__slide-item-inner">
			          <div className="container">
			            <div className="row">
			              <div className="col-lg-12 align-self-center">
			                <div className="slide-item-info">
			                  <div className="slide-item-info-inner ltn__slide-animation">
			                    <div className="slide-video mb-50 d-none">
			                      <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
			                        <i className="fa fa-play" />
			                      </a>
			                    </div>
								<div className="slide-sub-title-container mb-20">
									<div className="mtjf_logo"> <img src={publicUrl+"assets/img/logo.png"}/> </div> 
									<div className='pl-10'> A Shelter of Dignity for Widows, Abandoned
        								Women & Orphans </div>
								</div>	
									<h1 className="slide-title animated ">  Support a Mother, <br />Strengthen <span>Generations</span> </h1>
			                    <div className="slide-brief animated">
									<p>The Prophet ﷺ said: <br /> <span>“The best house is the one that treats orphans well.”</span> <br /> <small>Jami at-Tirmidhi 1917</small> </p>
			                    </div>
			                    <div className="btn-wrapper animated">
			                      <Link to="/donate" className="theme-btn-1 btn btn-effect-1"> Donate Now</Link>
			                      <a className="ltn__video-play-btn bg-white"    href="https://www.youtube.com/embed/As6ihUvuXjM?autoplay=1&mute=1&si=idq0LVtePlsvVS1E" data-rel="lightcase">
			                        <i className="icon-play  ltn__secondary-color" />
			                      </a>
			                    </div>
			                  </div>
			                </div>
			                <div className="slide-item-img">
			                  <img src={publicUrl+"assets/img/slider/61.jpg"} alt="#" />
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/* slide-item */}
			      <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
			        <div className="ltn__slide-item-inner">
			          <div className="container">
			            <div className="row">
			              <div className="col-lg-12 align-self-center">
			                <div className="slide-item-info">
			                  <div className="slide-item-info-inner ltn__slide-animation">
			                    <div className="slide-video mb-50 d-none">
			                      <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
			                        <i className="fa fa-play" />
			                      </a>
			                    </div>
								<div className="slide-sub-title-container mb-20">
								<div className="mtjf_logo"> <img src={publicUrl+"assets/img/logo.png"}/> </div> 									
								<div className='pl-10'> A Shelter of Dignity for Widows, Abandoned Women & Orphans </div>
								</div>	
									<h1 className="slide-title animated ">  Empower a Widow </h1>
									<h1 className='mt-10'> Uplift <span>Generations</span> </h1>
			                    <div className="slide-brief animated">
			                      <p>The Prophet ﷺ said: <br />
										<span>“The one who cares for an orphan will be with me in Paradise.”</span><br />
										<small>Sahih al-Bukhari 6005</small>
									</p>
			                    </div>
			                    <div className="btn-wrapper animated">
			                      <Link to="/service" className="theme-btn-1 btn btn-effect-1">Facilities </Link>
			                      <Link to="/donate" className="btn btn-transparent btn-effect-3"> Donate Now</Link>
			                    </div>
			                  </div>
			                </div>
			                <div className="slide-item-img">
			                  <img src={publicUrl+"assets/img/slider/62.jpg"} alt="#" />
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/* slide-item */}
			      <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
			        <div className="ltn__slide-item-inner">
			          <div className="container">
			            <div className="row">
			              <div className="col-lg-12 align-self-center">
			                <div className="slide-item-info">
			                  <div className="slide-item-info-inner ltn__slide-animation">
			                    <div className="slide-video mb-50 d-none">
			                      <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
			                        <i className="fa fa-play" />
			                      </a>
			                    </div>
								<div className="slide-sub-title-container mb-20">
								<div className="mtjf_logo"> <img src={publicUrl+"assets/img/logo.png"}/> </div> 
									<div className='pl-10'> A Shelter of Dignity for Widows, Abandoned Women & Orphans </div>
								</div>	
									<h1 className="slide-title animated ">   From <span>Hope</span> <br /> to Home </h1>
			                    <div className="slide-brief animated">
			                      <p>Allah says: <br />
									<span>“Worship Allah… and do good to parents, relatives, orphans, and the needy.”</span><br />
									<small>Surah An-Nisa 4:36</small></p>
			                    </div>
			                    <div className="btn-wrapper animated">
			                      <Link to="/service" className="theme-btn-1 btn btn-effect-1">Facilities </Link>
			                      <Link to="/donate" className="btn btn-transparent btn-effect-3"> Donate Now</Link>
			                    </div>
			                  </div>
			                </div>
			                <div className="slide-item-img">
			                  <img src={publicUrl+"assets/img/slider/63.jpg"} alt="#" />
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/* slide-item */}
			      <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
			        <div className="ltn__slide-item-inner">
			          <div className="container">
			            <div className="row">
			              <div className="col-lg-12 align-self-center">
			                <div className="slide-item-info">
			                  <div className="slide-item-info-inner ltn__slide-animation">
			                    <div className="slide-video mb-50 d-none">
			                      <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
			                        <i className="fa fa-play" />
			                      </a>
			                    </div>
								<div className="slide-sub-title-container mb-20">
								<div className="mtjf_logo"> <img src={publicUrl+"assets/img/logo.png"}/> </div> 
									<div className='pl-10'> A Shelter of Dignity for Widows, Abandoned Women & Orphans </div>
								</div>	
									<h1 className="slide-title animated "> Stand with Mothers, <br />Strengthen <span>Communities</span> </h1>
			                    <div className="slide-brief animated">
			                      <p>The Prophet ﷺ said: <br />
									<span>“I and the one who sponsors an orphan will be in Paradise like this” — and he held his two fingers together.</span><br />
									<small>Sahih Muslim 2983</small>
								</p>
			                    </div>
			                    <div className="btn-wrapper animated">
			                      <Link to="/service" className="theme-btn-1 btn btn-effect-1">Facilities </Link>
			                      <Link to="/donate" className="btn btn-transparent btn-effect-3"> Donate Now</Link>
			                    </div>
			                  </div>
			                </div>
			                <div className="slide-item-img">
			                  <img src={publicUrl+"assets/img/slider/64.jpg"} alt="#" />
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			    {/* slider-4-pagination */}
			    <div className="ltn__slider-11-pagination-count">
			      <span className="count" />
			      <span className="total" />
			    </div>
			    {/* slider-sticky-icon */}
			    <div className="slider-sticky-icon-2">
			      <ul>
			        <li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
			        <li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
			        <li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
			      </ul>
			    </div>
			    {/* slider-4-img-slide-arrow */}
			    <div className="ltn__slider-11-img-slide-arrow">
			      <div className="ltn__slider-11-img-slide-arrow-inner">
			        <div className="ltn__slider-11-img-slide-arrow-active">
			          <div className="image-slide-item">
			            <img src={publicUrl+"assets/img/slider/61.jpg"} alt="Flower Image" />
			          </div>
			          <div className="image-slide-item">
			            <img src={publicUrl+"assets/img/slider/62.jpg"} alt="Flower Image" />
			          </div>
			          <div className="image-slide-item">
			            <img src={publicUrl+"assets/img/slider/63.jpg"} alt="Flower Image" />
			          </div>
			          <div className="image-slide-item">
			            <img src={publicUrl+"assets/img/slider/64.jpg"} alt="Flower Image" />
			          </div>
			        </div>
			        {/* slider-4-slide-item-count */}
			        <div className="ltn__slider-11-slide-item-count">
			          <span className="count" />
			          <span className="total" />
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default BannerV2