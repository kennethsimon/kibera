import React from 'react';
import Layout from '../layout/newlayout';






function Aboutus() {

  return (
   <Layout>
     	   <section class="parallax sectiontwo" data-parallax-background-ratio="0.5" style={{backgroundImage: "url('https://res.cloudinary.com/dedfrilse/image/upload/v1649003103/team.jpg')"}}>
            <div class="opacity-extra-medium bg-extra-dark-gray"></div>
            <div class="container">
                <div class="row align-items-stretch justify-content-center small-screen">
                    <div class="col-12 position-relative page-title-extra-small text-center d-flex align-items-center justify-content-center flex-column">
                        <h1 class="alt-font text-white opacity-6 margin-20px-bottom">About our company</h1>
                        <h2 class="text-white alt-font font-weight-500 w-55 md-w-65 sm-w-80 center-col xs-w-100 letter-spacing-minus-1px line-height-50 sm-line-height-45 xs-line-height-30">We are Leading Insurance Consultants</h2>
                    </div>
                    <div class="down-section text-center"><a href="#about" class="section-link"><i class="ti-arrow-down icon-extra-small text-white bg-transparent-black padding-15px-all xs-padding-10px-all border-radius-100"></i></a></div>
                </div>
            </div>
        </section>
        <section class="wow animate__fadeIn">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-lg-6 md-margin-50px-bottom wow animate__fadeIn">
                        {/* <!-- start slider --> */}
                        <div class="swiper-container white-move border-all border-width-12px border-color-white box-shadow-large border-radius-8px" data-slider-options='{ "slidesPerView": 1, "loop": true, "navigation": { "nextEl": ".swiper-button-next-nav", "prevEl": ".swiper-button-previous-nav" }, "autoplay": { "delay": 4500, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "slide" }'>
                            <div class="swiper-wrapper">
                                {/* <!-- start slider item --> */}
                                <div class="swiper-slide"><img src="https://res.cloudinary.com/dedfrilse/image/upload/v1650956926/whoweareslider.png" alt=""/></div>
                                {/* <!-- end slider item -->
                                <!-- start slider item --> */}
                                <div class="swiper-slide"><img src="https://res.cloudinary.com/dedfrilse/image/upload/v1650956926/whoweareslider.png" alt=""/></div>
                                {/* <!-- end slider item -->
                                <!-- start slider item --> */}
                                <div class="swiper-slide"><img src="https://res.cloudinary.com/dedfrilse/image/upload/v1650956926/whoweareslider.png" alt=""/></div>
                                {/* <!-- end slider item --> */}
                            </div>  
                            {/* <!-- start slider navigation --> */}
                            <div class="swiper-button-next-nav swiper-button-next slider-navigation-style-01 light"><i class="feather icon-feather-arrow-right" aria-hidden="true"></i></div>
                            <div class="swiper-button-previous-nav swiper-button-prev slider-navigation-style-01 light"><i class="feather icon-feather-arrow-left" aria-hidden="true"></i></div>
                            {/* <!-- end slider navigation --> */}
                        </div>
                        {/* <!-- end slider --> */}
                    </div>
                    <div class="col-12 col-lg-5 offset-lg-1 wow animate__fadeIn" data-wow-delay="0.2s">
                        <h5 class="alt-font text-extra-dark-gray font-weight-500">It is teamwork that makes quality delivery.</h5>
                        <p>Our dedication is on to the client. Not on the amount of money we earn from what the client has spent but to the cost that a client has saved. We ensure Adding value to your customer experience.</p>
                        <ul class="p-0 list-style-02 margin-2-rem-top margin-3-rem-bottom">
                            <li class="margin-15px-bottom"><i class="feather icon-feather-arrow-right-circle text-large text-fast-blue margin-10px-right" aria-hidden="true"></i><span class="text-extra-dark-gray alt-font">We promise you 24/7 Customer Care</span></li>
                            <li class="margin-15px-bottom"><i class="feather icon-feather-arrow-right-circle text-large text-fast-blue margin-10px-right" aria-hidden="true"></i><span class="text-extra-dark-gray alt-font">We assure you fast-track Claims management</span></li>
                            <li class="margin-15px-bottom"><i class="feather icon-feather-arrow-right-circle text-large text-fast-blue margin-10px-right" aria-hidden="true"></i><span class="text-extra-dark-gray alt-font">We ensure professionalism in work delivery</span></li>
                        </ul>
                        <a href="/images/gwenprofile.pdf" class="btn btn-medium btn-fast-blue btn-round-edge">Download Profile</a>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- end page title -->
        <!-- start section --> */}
        <section id="about" class="bg-extra-dark-theme">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-4 col-md-6">
                        <img src="https://res.cloudinary.com/dedfrilse/image/upload/v1650956923/primarygoal.png" alt="" />
                        <div class="bg-white padding-3-half-rem-lr padding-3-rem-tb lg-padding-2-rem-all md-padding-2-half-rem-all sm-padding-4-rem-all last-paragraph-no-margin">
                            <span class="alt-font text-extra-dark-gray font-weight-500 margin-10px-bottom d-block">Our Primary Goal</span>
                            <p>We want to raise the bar in the insurance industry by providing excellence and utilizing best principles and standards to every aspect of the business.</p>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 pe-lg-0 d-flex md-margin-30px-bottom">
                        <div class="w-100 md-h-700px sm-h-550px xs-h-450px cover-background" style={{backgroundImage: "url('https://res.cloudinary.com/dedfrilse/image/upload/v1650956927/whatwedo.png')"}}></div>
                    </div>
                    <div class="col-12 col-lg-4 col-md-6 ps-lg-0 d-flex sm-margin-30px-bottom">
                        <div class="justify-content-center w-100 d-flex flex-column bg-white padding-5-half-rem-lr lg-padding-3-rem-lr md-padding-4-rem-all">
                            <span class="text-extra-large alt-font font-weight-500 text-black margin-20px-bottom d-block">Fast and First responder to client needs and demand without time limit. 24/7 Availability</span>
                            <p class="text-black opacity-7">With years of experience we were able to observe challenges and issues that most clients face, that makes us able to solve, Inform and Add value to a client.</p>
                            <a href="/contactus" class="btn btn-large btn-link text-black text-white-hover align-self-start">Call us today</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- end section -->
        <!-- start section --> */}
        <section class="wow animate__fadeIn sectionthree">
            <div class="container">
            <div class="row justify-content-center">
                    <div class="col-12 col-md-6 text-center margin-4-half-rem-bottom md-margin-3-rem-bottom wow animate__fadeIn">
                        <h5 class="alt-font font-weight-700 text-extra-dark-gray letter-spacing-minus-1px">Our Clients</h5>
                    </div>
                </div>
                {/* <div class="row align-items-center justify-content-center">
                    <div class="col-12 col-xl-7 col-lg-8 col-md-7 col-sm-10 text-center text-md-start sm-margin-30px-bottom">
                        <h5 class="alt-font text-extra-dark-gray font-weight-500 mb-0"><strong class="text-fast-blue text-decoration-underline">25 years</strong> we have created websites for global brands. Our success story.</h5>
                    </div>
                    <div class="col-12 col-xl-3 offset-xl-2 col-lg-4 col-md-5 text-center text-md-end">
                        <a href="https://www.youtube.com/watch?v=g0f_BRYJLJE" class="popup-youtube btn btn-extra-large btn-gradient-fast-blue-purple btn-round-edge"><i class="fa fa-arrow-right line-icon-Video-5 icon-large d-inline-block no-margin-left margin-15px-right align-middle" aria-hidden="true"></i> <div class="d-inline-block text-start align-middle"><span class="opacity-6 text-medium d-block font-weight-500 line-height-15px">Story video</span>Watch</div></a>
                    </div>
                </div> */}
                <div class="row row-cols-1 row-cols-md-4 row-cols-sm-2 client-logo-style-01 align-items-center  sm-margin-5-rem-top">
                    {/* <!-- start client item --> */}
                    <div class="col text-center margin-30px-bottom sm-margin-15px-bottom wow animate__fadeIn" >
                        <div class="client-box padding-15px-all">
                            <a href="#"><img class="client-box-image" src="https://res.cloudinary.com/dedfrilse/image/upload/v1648980177/Client-01.png" alt="" /></a>
                        </div>
                    </div>
                    {/* <!-- end client item -->
                    <!-- start client item --> */}
                    <div class="col text-center margin-30px-bottom sm-margin-15px-bottom wow animate__fadeIn" data-wow-delay="0.2s">
                        <div class="client-box padding-15px-all">
                            <a href="#"><img class="client-box-image" src="https://res.cloudinary.com/dedfrilse/image/upload/v1648980176/Client-02.png" alt="" /></a>
                        </div>
                    </div>
                    {/* <!-- end client item -->
                    <!-- start client item --> */}
                    <div class="col text-center margin-30px-bottom sm-margin-15px-bottom wow animate__fadeIn" data-wow-delay="0.4s">
                        <div class="client-box padding-15px-all">
                            <a href="#"><img class="client-box-image" src="https://res.cloudinary.com/dedfrilse/image/upload/v1648980176/Client-03.png" alt="" /></a>
                        </div>
                    </div>
                    {/* <!-- end client item -->
                    <!-- start client item --> */}
                    <div class="col text-center margin-30px-bottom sm-margin-15px-bottom wow animate__fadeIn" data-wow-delay="0.6s">
                        <div class="client-box padding-15px-all">
                            <a href="#"><img class="client-box-image" src="https://res.cloudinary.com/dedfrilse/image/upload/v1648980176/Client-04.png" alt="" /></a>
                        </div>
                    </div>
                    {/* <!-- end client item -->
                    <!-- start client item --> */}
                    <div class="col text-center sm-margin-15px-bottom wow animate__fadeIn">
                        <div class="client-box padding-15px-all">
                            <a href="#"><img class="client-box-image" src="https://res.cloudinary.com/dedfrilse/image/upload/v1648980176/Client-05.png" alt="" /></a>
                        </div>
                    </div>
                    {/* <!-- end client item -->
                    <!-- start client item --> */}
                    <div class="col text-center sm-margin-15px-bottom wow animate__fadeIn" data-wow-delay="0.2s">
                        <div class="client-box padding-15px-all">
                            <a href="#"><img class="client-box-image" src="https://res.cloudinary.com/dedfrilse/image/upload/v1648980175/Client-06.png" alt="" /></a>
                        </div>
                    </div>
                    {/* <!-- end client item -->
                    <!-- start client item --> */}
                    <div class="col text-center xs-margin-15px-bottom wow animate__fadeIn" data-wow-delay="0.4s">
                        <div class="client-box padding-15px-all">
                            <a href="#"><img class="client-box-image" src="https://res.cloudinary.com/dedfrilse/image/upload/v1648980177/Client-07.png" alt="" /></a>
                        </div>
                    </div>
                    {/* <!-- end client item -->
                    <!-- start client item --> */}
                    <div class="col text-center wow animate__fadeIn" data-wow-delay="0.6s">
                        <div class="client-box padding-15px-all">
                            <a href="#"><img class="client-box-image" src="https://res.cloudinary.com/dedfrilse/image/upload/v1648980176/Client-08.png" alt="" /></a>
                        </div>
                    </div>
                    {/* <!-- end client item --> */}
                </div>
            </div>
        </section>
        <section class="wow animate__fadeIn bg-light-gray">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-12">
                        <div class="row justify-content-center">
                            <div class="col-12 col-xl-12 col-lg-12 text-center margin-4-half-rem-bottom md-margin-3-rem-bottom">
                                <span class="alt-font letter-spacing-minus-1-half text-extra-medium d-block margin-5px-bottom">Fill out the form and we’ll be in touch soon!</span>
                                <h4 class="alt-font font-weight-600 text-extra-dark-gray">Do you have a project you would like us to work on?</h4>
                            </div>
                            <div class="col-12">
                                {/* <!-- start contact form --> */}
                                <form action="email-templates/contact-form.php" method="post">
                                    <div class="row row-cols-1 row-cols-md-2">
                                        <div class="col margin-4-rem-bottom sm-margin-25px-bottom">
                                            <input class="medium-input bg-white margin-25px-bottom required" type="text" name="name" placeholder="Your name"/>
                                            <input class="medium-input bg-white margin-25px-bottom required" type="email" name="email" placeholder="Your email address"/>
                                            <input class="medium-input bg-white mb-0" type="tel" name="phone" placeholder="Your mobile"/>
                                        </div>
                                        <div class="col margin-4-rem-bottom sm-margin-10px-bottom">
                                            <textarea class="medium-textarea h-200px bg-white" name="comment" placeholder="Your message"></textarea>
                                        </div>
                                        <div class="col text-start sm-margin-30px-bottom">
                                            <input type="checkbox" name="terms_condition" id="terms_condition" value="1" class="terms-condition d-inline-block align-top w-auto mb-0 margin-5px-top margin-10px-right"/>
                                            <label for="terms_condition" class="text-small d-inline-block align-top w-85">I accept the terms & conditions and I understand that my data will be hold securely in accordance with the <a href="#" target="_blank" class="text-decoration-underline text-extra-dark-gray">privacy policy</a>.</label>
                                        </div>
                                        <div class="col text-center text-md-end">
                                            <input type="hidden" name="redirect" value=""/>
                                            <button class="btn btn-medium btn-gradient-light-purple-light-orange mb-0 submit" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                    <div class="form-results d-none"></div>
                                </form>
                                {/* <!-- end contact form --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
   </Layout>
  );
}

export default Aboutus;