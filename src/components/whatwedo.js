import React from 'react';
import Layout from '../layout/newlayout';






function Services() {
  return (
   <Layout>
        {/* <!-- start page title --> */}
        <section class="parallax bg-extra-dark-gray sectiontwo" data-parallax-background-ratio="0.5" style={{backgroundImage: "url('https://res.cloudinary.com/dedfrilse/image/upload/v1649003103/team.jpg')"}}>
            <div class="opacity-extra-medium bg-extra-dark-gray"></div>
            <div class="container">
                <div class="row align-items-stretch justify-content-center small-screen">
                    <div class="col-12 col-xl-6 col-lg-7 col-md-8 position-relative page-title-extra-small text-center d-flex justify-content-center flex-column">
                        <h1 class="alt-font text-white opacity-6 margin-20px-bottom">What we offer</h1>
                        <h2 class="text-white alt-font font-weight-500 letter-spacing-minus-1px line-height-50 sm-line-height-45 xs-line-height-30 no-margin-bottom">Dedicated Insurance Consultants</h2>
                    </div>
                    <div class="down-section text-center"><a href="#down-section" class="section-link"><i class="ti-arrow-down icon-extra-small text-white bg-transparent-black padding-15px-all xs-padding-10px-all border-radius-100"></i></a></div>
                </div>
            </div>
        </section>
        {/* <!-- end page title -->
        <!-- start section --> */}
        <section id="down-section">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-md-6 position-relative sm-margin-30px-bottom">
                        <img class="border-radius-5px" src="https://res.cloudinary.com/dedfrilse/image/upload/v1650956926/whatwedoplay.png" alt="" />
                        {/* <a href="#" class="popup-youtube video-icon-box video-icon-large absolute-middle-center">
                            <span>
                                <span class="video-icon bg-gradient-light-purple-light-orange">
                                    <i class="icon-simple-line-control-play text-white"></i>
                                    <span class="video-icon-sonar">
                                        <span class="video-icon-sonar-bfr bg-gradient-light-purple-light-orange opacity-7"></span>
                                        <span class="video-icon-sonar-afr bg-gradient-light-purple-light-orange"></span>
                                    </span>
                                </span>
                            </span>
                        </a> */}
                    </div>
                    <div class="col-12 col-lg-5 col-md-6 offset-lg-1">
                        <h5 class="alt-font font-weight-500 text-extra-dark-gray w-90">Our role is to simplify your entire experience of accessing insurance services.</h5>
                        <p class="w-85 lg-w-90">We provide services across the insurance spectrum, including risk management, insurance Agency and Claim Management, to local and multinational firms operating in all sectors of the economy.</p>
                        {/* <div class="btn-dual margin-15px-top d-inline-block">
                            <a href="who-we-are.html" class="btn btn-medium btn-dark-gray btn-slide-right-bg">Discover Litho<span class="bg-white"></span></a>
                            <a href="about-us.html" class="btn btn-medium btn-transparent-dark-gray btn-slide-right-bg xs-no-margin">Read More<span class="bg-extra-dark-gray"></span></a>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-extra-dark-theme wow animate__fadeIn">
            <div class="container">
                <div class="row">
                    <div class="col-12 tab-style-02">
                        {/* <!-- start tab navigation --> */}
                        <ul class="nav nav-tabs justify-content-center text-center alt-font margin-6-rem-bottom sm-margin-3-rem-bottom">
                            <li class="nav-item"><a class="nav-link active text-white"><h6 style={{lineHeight: 0}} class="alt-font font-weight-500 text-white">01</h6>24/7 Customer Support</a></li>
                            <li class="nav-item"><a class="nav-link text-white"><h6 style={{lineHeight: 0}} class="alt-font font-weight-500 text-white">02</h6>Products Knowledge
</a></li>
                            <li class="nav-item"><a class="nav-link text-white"><h6 style={{lineHeight: 0}} class="alt-font font-weight-500 text-white">03</h6>Claims Bureau</a></li>
                            <li class="nav-item"><a class="nav-link text-white" ><h6 style={{lineHeight: 0}} class="alt-font font-weight-500 text-white">04</h6>Insurance Consultancy</a></li>
                        </ul>
                        {/* <!-- end tab navigation --> */}
                        <div class="tab-content">
                            {/* <!-- start tab item --> */}
                            <div id="research" class="tab-pane fade in active show">
                                <div class="row align-items-lg-center">
                                    <div class="col-12 col-lg-4 col-md-12 md-margin-6-rem-bottom sm-margin-4-rem-bottom">
                                        <img src="https://res.cloudinary.com/dedfrilse/image/upload/v1650956918/whatwedobottom.png" alt="" />
                                    </div>
                                    <div class="col-12 col-lg-4 col-md-6 padding-4-rem-left lg-padding-2-rem-left md-padding-15px-left sm-margin-30px-bottom">
                                        <h6 class="alt-font font-weight-500 text-white w-95 md-w-100">We are quality driven, working with a strong focus on delivering best customer experience.</h6>
                                        <a href="/contactus" class="popup-youtube video-icon-box video-icon-small position-relative">
                                            <span>
                                                {/* <span class="video-icon bg-gradient-light-purple-light-orange margin-15px-right">
                                                    <i class="icon-simple-line-control-play text-white"></i>
                                                    <span class="video-icon-sonar">
                                                        <span class="video-icon-sonar-bfr bg-gradient-light-purple-light-orange opacity-7"></span>
                                                    </span>
                                                </span> */}
                                                <span class="video-icon-text alt-font text-medium text-white text-uppercase text-decoration-line-bottom d-inline-block font-weight-500 align-middle">GET US TODAY</span>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="col-12 col-lg-4 col-md-6 last-paragraph-no-margin">
                                        <span class="alt-font text-extra-medium d-block text-white margin-20px-bottom font-weight-500">We are the market leading Insurance Consultants. Get us to assist you.</span>
                                        <p class='text-white'>We Thrive to be the most preferred insurance consultant/Agency ranks among the top reliable Insurance Consultants in the market, and to carve a niche in the insurance market as a growing company that is dedicated to achieving superior results to the satisfaction of our clients.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end tab item -->
                            <!-- start tab item --> */}
                          
                            {/* <!-- end tab item -->
                            <!-- start tab item --> */}
                        
                            {/* <!-- end tab item -->
                            <!-- start tab item --> */}
                         
                            {/* <!-- end tab item --> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
   </Layout>
  );
}

export default Services;