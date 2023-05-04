import React, {useEffect, useState} from 'react';
import Layout from '../homelayout/newlayout';
import { Helmet } from 'react-helmet';
import {useTeams} from '../useContentful';






function Aboutus() {
    const [teams, setTeams] = useState([]);
    const {getTeams} = useTeams();

    useEffect(() => {
        getTeams().then((response) => {
            setTeams(response?.items);
        })
    })

  return (
   <Layout>
         <Helmet>
        <title>About | Essence Creative Solutions</title>
      </Helmet>
      <section id="about" class="overlap-height wow animate__fadeIn padding-60px-bottom parallax" data-parallax-background-ratio="0.5" style={{backgroundImage:"url('images/our-story-bg.jpg')"}} >
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-xl-8 col-lg-10 text-center overlap-gap-section">
                        <div class="w-40px h-2px bg-gradient-sky-blue-pink separator-line-vertical margin-30px-tb d-inline-block"></div>
                        <h3 class="alt-font font-weight-500 text-extra-dark-gray letter-spacing-minus-1px">We are corporate <span class="text-gradient-sky-blue-pink  font-weight-600">Creative</span> and <span class="text-gradient-sky-blue-pink  font-weight-600">Marketing</span> Agency</h3>
                    </div>
                </div>
            </div>
        </section>
        <section class="position-relative bg-gradient-sky-blue-pink overflow-visible">
            <div class="container">
                <div class="z-index-6 overlap-section-one-fourth">
                    <div class="d-flex flex-column margin-9-rem-bottom sm-margin-7-rem-bottom">
                        <div class="row">
                            <div class="col-12 col-md-12 z-index-0">
                                <span class="text-overlap text-uppercase title-extra-large-heavy alt-font text-center d-none d-md-block font-weight-700 opacity-1 z-index-minus-1">WHAT WE DO</span>
                                <div class="tilt-box" data-tilt-options='{ "maxTilt": 20, "perspective": 1000, "easing": "cubic-bezier(.03,.98,.52,.99)", "scale": 1, "speed": 500, "transition": true, "reset": true, "glare": false, "maxGlare": 1 }'>
                                    <img src="https://res.cloudinary.com/dedfrilse/image/upload/v1683194865/Clients_Served.png" class="position-relative z-index-6 border-radius-6px" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">

                    <div class="col-12 col-md-4 col-sm-8 text-center process-step-style-04 sm-margin-6-rem-bottom wow animate__fadeIn">
                        <div class="process-step-item">
                            <span class="process-step-item-bfr bg-white"></span>
                            <div class="process-step-item-box">
                                <span class="process-step-item-box-bfr bg-white opacity-2 d-none d-md-block"></span>
                                <div class="process-step-icon">
                                    <span class="process-step-icon-bfr bg-white"></span>
                                    <span class="process-step-number text-slate-blue alt-font font-weight-500"><span class="process-step-number-bfr bg-white"></span>1</span>
                                </div>
                                <div class="process-content last-paragraph-no-margin">
                                    <span class="alt-font d-block font-weight-500 text-white margin-10px-bottom">Digital Marketing Strategy</span>
                                    <p class="text-white opacity-7">We provide sophisticated Social Media management solutions for corporate needs with the Goal to maximize company sales</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-4 col-sm-8 text-center process-step-style-04 sm-margin-6-rem-bottom wow animate__fadeIn" data-wow-delay="0.2s">
                        <div class="process-step-item">
                            <span class="process-step-item-bfr bg-white"></span>
                            <div class="process-step-item-box">
                                <span class="process-step-item-box-bfr bg-white opacity-2 d-none d-md-block"></span>
                                <div class="process-step-icon">
                                    <span class="process-step-icon-bfr bg-white"></span>
                                    <span class="process-step-number text-slate-blue alt-font font-weight-500"><span class="process-step-number-bfr bg-white"></span>2</span>
                                </div>
                                <div class="process-content last-paragraph-no-margin">
                                    <span class="alt-font d-block font-weight-500 text-white margin-10px-bottom">Digital Presence Strategy</span>
                                    <p class="text-white opacity-7">We will enable your Company with not only the online presence, but provide your company the world class online outlook</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-4 col-sm-8 text-center process-step-style-04 wow animate__fadeIn" data-wow-delay="0.4s">
                        <div class="process-step-item">
                            <span class="process-step-item-bfr bg-white"></span>
                            <div class="process-step-item-box">
                                <span class="process-step-item-box-bfr bg-white opacity-2"></span>
                                <div class="process-step-icon">
                                    <span class="process-step-icon-bfr bg-white"></span>
                                    <span class="process-step-number text-slate-blue alt-font font-weight-500"><span class="process-step-number-bfr bg-white"></span>3</span>
                                </div>
                                <div class="process-content last-paragraph-no-margin">
                                    <span class="alt-font d-block font-weight-500 text-white margin-10px-bottom">Branding & Design Strategy</span>
                                    <p class="text-white opacity-7">Stand out in the market with our best branding design strategy for all your business marketing tools design and printing</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <section class="bg-light-gray wow animate__fadeIn" data-wow-delay="0.4s">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-6 text-center margin-4-half-rem-bottom">
                        <span class="alt-font margin-10px-bottom d-block text-uppercase text-medium font-weight-500">HOW WE GET IT DONE</span>
                        <h5 class="alt-font text-extra-dark-gray font-weight-500 letter-spacing-minus-1px">Our Creative Process</h5>
                    </div>
                </div>
                <div class="row justify-content-center">

                    <div class="col-12 col-lg-6 col-md-8 col-sm-10 margin-30px-bottom xs-margin-15px-bottom">
                        <div class="feature-box feature-box-left-icon-middle padding-3-half-rem-all bg-white box-shadow-small box-shadow-extra-large-hover border-radius-6px lg-padding-1-half-rem-lr xs-padding-2-rem-all">
                            <div class="feature-box-icon margin-40px-lr lg-margin-35px-lr xs-margin-20px-right xs-no-margin-left">
                                <h5 class="alt-font no-margin-bottom text-gradient-orange-pink font-weight-600 letter-spacing-minus-1px">01</h5>
                            </div>
                            <div class="feature-box-content border-left border-color-medium-gray padding-45px-lr lg-padding-35px-lr xs-padding-20px-left xs-no-padding-right last-paragraph-no-margin">
                                <span class="text-extra-dark-gray alt-font font-weight-500">Industry Research</span>
                                <p>We ensure your brand uniqueness via our professional market research analysis</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-lg-6  col-md-8 col-sm-10 margin-30px-bottom xs-margin-15px-bottom">
                        <div class="feature-box feature-box-left-icon-middle padding-3-half-rem-all bg-white box-shadow-small box-shadow-extra-large-hover border-radius-6px lg-padding-1-half-rem-lr xs-padding-2-rem-all">
                            <div class="feature-box-icon margin-40px-lr lg-margin-35px-lr xs-margin-20px-right xs-no-margin-left">
                                <h5 class="alt-font no-margin-bottom text-gradient-orange-pink font-weight-600 letter-spacing-minus-1px">02</h5>
                            </div>
                            <div class="feature-box-content border-left border-color-medium-gray padding-45px-lr lg-padding-35px-lr xs-padding-20px-left xs-no-padding-right last-paragraph-no-margin">
                                <span class="text-extra-dark-gray alt-font font-weight-500">Project Planning</span>
                                <p>Our team of experts ensure delivering high quality solutions in time as per your needs</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-lg-6  col-md-8 col-sm-10 md-margin-30px-bottom xs-margin-15px-bottom">
                        <div class="feature-box feature-box-left-icon-middle padding-3-half-rem-all bg-white box-shadow-small box-shadow-extra-large-hover border-radius-6px lg-padding-1-half-rem-lr xs-padding-2-rem-all">
                            <div class="feature-box-icon margin-40px-lr lg-margin-35px-lr xs-margin-20px-right xs-no-margin-left">
                                <h5 class="alt-font no-margin-bottom text-gradient-orange-pink font-weight-600 letter-spacing-minus-1px">03</h5>
                            </div>
                            <div class="feature-box-content border-left border-color-medium-gray padding-45px-lr lg-padding-35px-lr xs-padding-20px-left xs-no-padding-right last-paragraph-no-margin">
                                <span class="text-extra-dark-gray alt-font font-weight-500">Contents Ideation and Design</span>
                                <p>We ensure contents communicate the real brand position of your business</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-lg-6  col-md-8 col-sm-10">
                        <div class="feature-box feature-box-left-icon-middle padding-3-half-rem-all bg-white box-shadow-small box-shadow-extra-large-hover border-radius-6px lg-padding-1-half-rem-lr xs-padding-2-rem-all">
                            <div class="feature-box-icon margin-40px-lr lg-margin-35px-lr xs-margin-20px-right xs-no-margin-left">
                                <h5 class="alt-font no-margin-bottom text-gradient-orange-pink font-weight-600 letter-spacing-minus-1px">04</h5>
                            </div>
                            <div class="feature-box-content border-left border-color-medium-gray padding-45px-lr lg-padding-35px-lr xs-padding-20px-left xs-no-padding-right last-paragraph-no-margin">
                                <span class="text-extra-dark-gray alt-font font-weight-500">Production and Monitoring</span>
                                <p>Always on point when it comes to quality production and project monitoring</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <section class="overflow-visible bg-gradient-sky-blue-pink wow animate__fadeIn">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-lg-6 position-relative md-margin-50px-bottom wow animate__fadeIn" data-wow-delay="0.2s">
                    <div class="text-end sm-margin-40px-bottom align-items-center">
                    <img src="https://res.cloudinary.com/dedfrilse/image/upload/v1652356386/We-design-world-class-digital-content.jpg" alt="" />
                    </div>
                        {/* <div class="w-70 border-radius-6px overflow-hidden position-relative">
                            <img src="https://lithohtml.themezaa.com/images/our-process-02.jpg" alt="" />
                            <div class="opacity-extra-medium"></div>
                        </div> */}
                        {/* <div class="position-absolute right-15px bottom-0px w-70" data-parallax-layout-ratio="1.1">
                            <img class="border-radius-6px" src="https://lithohtml.themezaa.com/images/our-process-01.jpg" alt="" />
                        </div> */}
                    </div>
                    <div class="col-12 col-lg-5 offset-lg-1 wow animate__fadeIn text-center text-sm-start" data-wow-delay="0.4s">
                        <div class="alt-font text-extra-medium font-weight-500 margin-30px-bottom d-flex"><span class="flex-shrink-0 w-50px h-1px bg-white opacity-7 align-self-center margin-20px-right"></span><div class="flex-grow-1"><span class="text-white">Looking for digital marketing agency?</span></div></div>
                        <h5 class="alt-font text-white font-weight-500 margin-30px-bottom">We design world class digital contents and experience for your brand growth</h5>
                        <p class="w-95 text-white">Our aspiration is to help Brands stand out in the local and global markets, by equipping their Businesses with sophisticated solutions in Digital Marketing Strategy which Drive Company sales.</p>
                        <div class="btn-dual margin-15px-top d-inline-block"><a href="our-services.html" class="btn btn-medium btn-dark-gray btn-slide-right-bg">Download Profile<span class="bg-white"></span></a><a href="what-we-offers.html" class="btn btn-medium btn-transparent-dark-gray btn-slide-right-bg">View Our Work<span class="bg-extra-dark-gray"></span></a></div>
                    </div>
                </div>
            </div>
        </section>
        <section class="big-section wow animate__fadeIn">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 text-center margin-six-bottom">
                        <h6 class="alt-font text-extra-dark-gray font-weight-500">Our Awesome Team</h6>
                    </div>
                </div>
                <div class="row row-cols-1 row-cols-md-3 row-cols-sm-1 justify-content-center">
                   {Array.isArray(teams) && teams?.map((team) => {
                       return (
                        <div class="col team-style-02 text-center sm-margin-15px-bottom wow animate__fadeIn" data-wow-delay="0.2s">
                        <figure>
                            <div class="team-member-image border-radius-5px overflow-hidden">
                                <img alt={team?.fields?.teamimage?.fields?.description} src={team?.fields?.teamimage?.fields?.file?.url}/>
                                <div class="team-member-details bg-transparent-gradient-fast-blue-purple padding-2-half-rem-lr align-items-center justify-content-center d-flex flex-column">
                                    <div class="text-white text-uppercase alt-font font-weight-500">{team?.fields?.jobDescription}</div>
                                    <div class="social-icon w-100 position-absolute bottom-40px left-0px">
                                        <a href="https://www.facebook.com/" target="_blank" class="icon-very-small text-white"><i aria-hidden="true" class="fab fa-facebook-f"></i></a>
                                        <a href="https://twitter.com/" target="_blank" class="icon-very-small text-white"><i aria-hidden="true" class="fab fa-twitter"></i></a>
                                        <a href="https://www.dribbble.com" target="_blank" class="icon-very-small text-white"><i aria-hidden="true" class="fab fa-dribbble"></i></a>
                                        <a href="https://www.linkedin.com/" target="_blank" class="icon-very-small text-white"><i aria-hidden="true" class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            <figcaption class="team-member-position padding-35px-tb text-center">
                                <div class="text-extra-dark-gray alt-font line-height-18px text-medium text-uppercase font-weight-500">{team?.fields?.name}</div>
                                <span class="text-small text-uppercase">{team?.fields?.jobTitle}</span>
                            </figcaption>

                        </figure>
                    </div>
                       )
                   })}
                </div>
            </div>
        </section>
        <section class="padding-eight-tb cover-background parallax xs-padding-50px-tb wow animate__fadeIn" data-parallax-background-ratio="0.5" style={{backgroundImage:"url('https://res.cloudinary.com/dedfrilse/image/upload/v1652356387/Are-you-an-awesome-creative-designer.jpg')"}}>
            <div class="opacity-medium bg-gradient-fast-blue-purple"></div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-xl-7 col-lg-8 col-md-10 position-relative text-center">
                        <h3 class="alt-font text-white font-weight-600 margin-35px-bottom">Are you an awesome creative designer? Join our team</h3>
                        <p class="text-white opacity-7 alt-font text-large w-80 mx-auto line-height-32px margin-45px-bottom sm-w-100">Send us your CV with supporting links of your creative works to careers@essence.co.tz</p>
                        <a href="/contactus" class="btn btn-large btn-white btn-rounded btn-box-shadow">CONTACT DETAILS</a>
                    </div>
                </div>
            </div>
        </section>
   </Layout>
  );
}

export default Aboutus;