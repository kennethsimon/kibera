import React, {useState, useEffect} from 'react';
import Layout from '../homelayout/newlayout';
import { Helmet } from 'react-helmet';
import {useClients, useTestimonials} from '../useContentful';





function Homepage() {
    const [clients, setClients] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
const {getClients} = useClients();
const {getTestimonials} = useTestimonials();

useEffect(() => {
    getClients().then((response) => {
        setClients(response?.items);
    })
    getTestimonials().then((response) => {
        setTestimonials(response?.items);
    })
}, [])

  return (
<Layout page='home'>
<Helmet>
        <title>Essence Creative | Corporate Creative & Digital Marketing Agency</title>
      </Helmet>
<section class="p-0 example home-startup bg-dark-slate-blue">
            <article class="content">
                <div id="rev_slider_26_1_wrapper" class="rev_slider_wrapper fullscreen-container" data-alias="mask-showcase" data-source="gallery">
             
                    <div id="rev_slider_26_1" class="rev_slider fullscreenbanner" style={{display:"none"}} data-version="5.4.1">
                        <ul> 
                          
                            <li data-index="rs-73" data-transition="zoomout" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="default" data-easeout="default" data-masterspeed="1500"  data-thumb="http://works.themepunch.com/revolution_5_3/wp-content/"  data-rotate="0"  data-saveperformance="off"  data-title="01" data-param1="01" data-description="">
                      
                                <img src="https://res.cloudinary.com/dedfrilse/image/upload/v1652356414/Home_Banner-01.jpg" alt="" data-bgcolor="#262b32" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" class="rev-slidebg" data-no-retina/>

                                <div class="overlay-bg bg-extra-dark-gray" style={{opacity: 0.5}}></div> 

                             
                                <div class="tp-caption tp-resizeme alt-font text-white font-weight-600 text-center"
                                     id="slide-411-layer-01"
                                     data-frames='[{"delay":200,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[-100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                                     data-type="text"
                                     data-whitespace="nowrap"
                                     data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                     data-y="['middle','middle','middle','middle']" data-voffset="['-50','-50','-115','-65']" 
                                     data-width="auto"
                                     data-height="auto"
                                     data-fontsize="['70','53','60','35']"
                                     data-lineheight="['70','59','70','39']"
                                     data-letterspacing="['-2','-1','-1','-1']"
                                     data-responsive="off"
                                     data-responsive_offset="off"
                                     data-paddingtop="['0','0','0','0']"
                                     data-paddingbottom="['15','8','8','8']"
                                     data-paddingright="['0','0','0','0']"
                                     data-paddingleft="['0','0','0','0']"
                                     style={{textShadow: "0 0 20px rgba(0,0,0,0.3)"}}>Delivering creative  
                                     <br/>digital marketing</div>

                          
                                <div class="tp-caption tp-resizeme alt-font text-white font-weight-300 text-center"
                                     id="slide-411-layer-02" 
                                     data-frames='[{"delay":1200,"speed":1000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[-100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                                     data-type="text"
                                     data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                     data-y="['middle','middle','middle','middle']" data-voffset="['65','100','-5','15']" 
                                     data-width="auto"
                                     data-height="auto"
                                     data-fontsize="['19','16','19','14']"
                                     data-lineheight="['28','14','23','20']"
                                     data-letterspacing="['0.5','0.5','0.5','0.5']"
                                     data-responsive="off"
                                     data-responsive_offset="on">Making your business brand stand out</div> 

                       
                                <a style={{ color: "#fff", fontSize: 15, border: 0, borderWidth: 0}} class="tp-caption bg-gradient-sky-blue-pink tp-resizeme rs-btn btn btn-rounded d-flex align-items-center justify-content-center"
                                   href="/aboutus"
                                   id="slide-411-layer-03" 
                                   data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                                   data-y="['middle','middle','middle','middle']" data-voffset="['152','130','82','80']"
                                   data-whitespace="nowrap"
                                   data-type="button"
                                   data-responsive="off"
                                   data-responsive_offset="off"
                                   data-frames='[{"delay":1200,"speed":1000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[-100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                                   data-textAlign="['center','center','center','center']"
                                   data-paddingtop="['8','8','8','8']"
                                   data-paddingbottom="['8','8','8','8']"
                                   data-paddingright="['7','7','7','7']"
                                   data-paddingleft="['34','34','34','34']"
                                   >Get started now 
                                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: 38, height: 38, borderRadius: "50%", background: "#007C3E", marginLeft: 19}}>
                                        <i class="fas fa-play" style={{color: "#fff", fontSize: 12, lineHeight: 15, marginTop: 2, marginLeft: 3}}></i>
                                    </div>
                                </a>         
                            </li>
                     
                            <li data-index="rs-74" data-transition="zoomout" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="default" data-easeout="default" data-masterspeed="1500"  data-thumb="http://works.themepunch.com/revolution_5_3/wp-content/"  data-rotate="0"  data-saveperformance="off"  data-title="02" data-param1="02" data-description="">
                         
                                <img src="https://res.cloudinary.com/dedfrilse/image/upload/v1652356415/Home_Banner-02.jpg" alt="" data-bgcolor="#262b32" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" class="rev-slidebg" data-no-retina/>

                                <div class="overlay-bg bg-extra-dark-gray" style={{opacity: 0.5}}></div> 

                          
                                <div class="tp-caption tp-resizeme alt-font text-white font-weight-600 text-center"
                                     id="slide-411-layer-04" 
                                     data-frames='[{"delay":200,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[-100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                                     data-type="text"
                                     data-whitespace="nowrap"
                                     data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                     data-y="['middle','middle','middle','middle']" data-voffset="['-50','-50','-115','-65']" 
                                     data-width="auto"
                                     data-height="auto"
                                     data-fontsize="['70','53','60','35']"
                                     data-lineheight="['70','59','70','39']"
                                     data-letterspacing="['-2','-1','-1','-1']"
                                     data-responsive="off"
                                     data-responsive_offset="off"
                                     data-paddingtop="['0','0','0','0']"
                                     data-paddingbottom="['15','8','8','8']"
                                     data-paddingright="['0','0','0','0']"
                                     data-paddingleft="['0','0','0','0']"
                                     style={{textShadow: "0 0 20px rgba(0,0,0,0.3)"}}>Drive your sales<br/> with us today</div>

                        
                                <div class="tp-caption tp-resizeme alt-font text-white font-weight-300 text-center"
                                     id="slide-411-layer-05" 
                                     data-frames='[{"delay":1200,"speed":1000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[-100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                                     data-type="text"
                                     data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                     data-y="['middle','middle','middle','middle']" data-voffset="['65','100','-5','15']" 
                                     data-width="auto"
                                     data-height="auto"
                                     data-fontsize="['19','13','19','14']"
                                     data-lineheight="['28','14','23','20']"
                                     data-letterspacing="['0.5','0.5','0.5','0.5']"
                                     data-responsive="off"
                                     data-responsive_offset="on">Reach more customers with our digital strategy</div> 

                   
                                <a style={{ color: "#fff", fontSize: 15, border: 0, borderWidth: 0}} class="tp-caption bg-gradient-sky-blue-pink tp-resizeme rs-btn btn btn-rounded d-flex align-items-center justify-content-center"
                                   href="/aboutus"
                                   id="slide-411-layer-06" 
                                   data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                                   data-y="['middle','middle','middle','middle']" data-voffset="['152','130','82','80']"
                                   data-whitespace="nowrap"
                                   data-type="button"
                                   data-responsive="off"
                                   data-responsive_offset="off"
                                   data-frames='[{"delay":1200,"speed":1000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[-100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                                   data-textAlign="['center','center','center','center']"
                                   data-paddingtop="['8','8','8','8']"
                                   data-paddingbottom="['8','8','8','8']"
                                   data-paddingright="['7','7','7','7']"
                                   data-paddingleft="['34','34','34','34']"
                                   >Get started now 
                                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: 38, height: 38, borderRadius: "50%", background: "#007C3E", marginLeft: 19}}>
                                        <i class="fas fa-play" style={{color: "#fff", fontSize: 12, lineHeight: 15, marginTop: 2, marginLeft: 3}}></i>
                                    </div>
                                </a>       
                            </li>
                     
                            <li data-index="rs-75" data-transition="zoomout" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="default" data-easeout="default" data-masterspeed="1500"  data-thumb="http://works.themepunch.com/revolution_5_3/wp-content/"  data-rotate="0"  data-saveperformance="off"  data-title="03" data-param1="03" data-description="">
                
                                <img src="https://res.cloudinary.com/dedfrilse/image/upload/v1652356415/Home_Banner-03.jpg" alt="" data-bgcolor="#262b32" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" class="rev-slidebg" data-no-retina/>

                                <div class="overlay-bg bg-extra-dark-gray" style={{opacity: 0.5}}></div> 

                          
                                <div class="tp-caption tp-resizeme alt-font text-white font-weight-600 text-center"
                                     id="slide-411-layer-07" 
                                     data-frames='[{"delay":200,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[-100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                                     data-type="text"
                                     data-whitespace="nowrap"
                                     data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                     data-y="['middle','middle','middle','middle']" data-voffset="['-50','-50','-115','-65']" 
                                     data-width="auto"
                                     data-height="auto"
                                     data-fontsize="['70','53','60','35']"
                                     data-lineheight="['70','59','70','39']"
                                     data-letterspacing="['-2','-1','-1','-1']"
                                     data-responsive="off"
                                     data-responsive_offset="off"
                                     data-paddingtop="['0','0','0','0']"
                                     data-paddingbottom="['15','8','8','8']"
                                     data-paddingright="['0','0','0','0']"
                                     data-paddingleft="['0','0','0','0']"
                                     style={{textShadow: "0 0 20px rgba(0,0,0,0.3)"}}>Manage your social  
                                     <br/>media with us</div>

                   
                                <div class="tp-caption tp-resizeme alt-font text-white font-weight-300 text-center"
                                     id="slide-411-layer-08" 
                                     data-frames='[{"delay":1200,"speed":1000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[-100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                                     data-type="text"
                                     data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                     data-y="['middle','middle','middle','middle']" data-voffset="['65','100','-5','15']" 
                                     data-width="auto"
                                     data-height="auto"
                                     data-fontsize="['19','13','19','14']"
                                     data-lineheight="['28','14','23','20']"
                                     data-letterspacing="['0.5','0.5','0.5','0.5']"
                                     data-responsive="off"
                                     data-responsive_offset="on">Build a strong online profile with our strategy</div> 

                 
                                <a style={{ color: "#fff", fontSize: 15, border: 0, borderWidth: 0}} class="tp-caption bg-gradient-sky-blue-pink tp-resizeme rs-btn btn btn-rounded d-flex align-items-center justify-content-center"
                                   href="/aboutus"
                                   id="slide-411-layer-09" 
                                   data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                                   data-y="['middle','middle','middle','middle']" data-voffset="['152','130','82','80']"
                                   data-whitespace="nowrap"
                                   data-type="button"
                                   data-responsive="off"
                                   data-responsive_offset="off"
                                   data-frames='[{"delay":1200,"speed":1000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[-100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                                   data-textAlign="['center','center','center','center']"
                                   data-paddingtop="['8','8','8','8']"
                                   data-paddingbottom="['8','8','8','8']"
                                   data-paddingright="['7','7','7','7']"
                                   data-paddingleft="['34','34','34','34']"
                                   >Get started now 
                                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: 38, height: 38, borderRadius: "50%", background: "#007C3E", marginLeft: 19}}>
                                        <i class="fas fa-play" style={{color: "#fff", fontSize: 12, lineHeight: 15, marginTop: 2, marginLeft: 3}}></i>
                                    </div>
                                </a>
                            </li>
            
                        </ul>
                    </div>
                </div>
            </article>
        </section>
        <section style={{padding: '0 !important'}} class="extra-big-big-section overflow-visible">
            <div class="container">
                <div class="row">
                    <div class="col-12 overlap-section md-no-margin-top md-margin-70px-bottom sm-margin-50px-bottom">
                        <div class="row justify-content-center">
                            <div class="col-12 col-lg-4 col-md-6 col-sm-8 md-margin-30px-bottom xs-margin-15px-bottom">
                            
                                <div class="feature-box h-100 feature-box-left-icon-middle padding-3-rem-all bg-white box-shadow-small box-shadow-large-hover border-radius-4px overflow-hidden last-paragraph-no-margin lg-padding-2-half-rem-tb lg-padding-2-rem-lr md-padding-4-rem-all">
                                    <div class="feature-box-icon margin-30px-right lg-margin-25px-right">
                                        <i class="line-icon-Cursor-Click2 icon-medium text-green"></i>
                                    </div>
                                    <div class="feature-box-content">
                                        <div class="text-slate-blue font-weight-500 text-large margin-5px-bottom">Digital Marketing </div>
                                        <span>Strategy</span>
                                    </div>
                                </div>
             
                            </div>
                            <div class="col-12 col-lg-4 col-md-6 col-sm-8 md-margin-30px-bottom xs-margin-15px-bottom">
                          
                                <div class="feature-box h-100 feature-box-left-icon-middle padding-3-rem-all bg-white box-shadow-small box-shadow-large-hover border-radius-4px overflow-hidden last-paragraph-no-margin lg-padding-2-half-rem-tb lg-padding-2-rem-lr md-padding-4-rem-all">
                                    <div class="feature-box-icon margin-30px-right lg-margin-25px-right">
                                        <i class="line-icon-Bakelite icon-medium text-green"></i>
                                    </div>
                                    <div class="feature-box-content">
                                        <div class="text-slate-blue font-weight-500 text-large margin-5px-bottom">Digital Presence </div>
                                        <span>Strategy</span>
                                    </div>
                                </div>
                             
                            </div>
                            <div class="col-12 col-lg-4 col-md-6 col-sm-8">
                     
                                <div class="feature-box h-100 feature-box-left-icon-middle padding-3-rem-all bg-white box-shadow-small box-shadow-large-hover border-radius-4px overflow-hidden last-paragraph-no-margin lg-padding-2-half-rem-tb lg-padding-2-rem-lr md-padding-4-rem-all">
                                    <div class="feature-box-icon margin-30px-right lg-margin-25px-right">
                                        <i class="line-icon-Boy icon-medium text-green"></i>
                                    </div>
                                    <div class="feature-box-content">
                                        <div class="text-slate-blue font-weight-500 text-large margin-5px-bottom">Branding & Design </div>
                                        <span>Strategy</span>
                                    </div>
                                </div>
                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="extra-big bg-gradient-white-light-gray">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-12 col-lg-6 position-relative text-center md-margin-30px-bottom wow animate__fadeIn" data-wow-delay="0.2s">
                        <img src="https://res.cloudinary.com/dedfrilse/image/upload/v1652416077/476_652px-01.jpg" alt="" />
                        {/* <div class="absolute-middle-center">
                            <a href="https://www.youtube.com/watch?v=g0f_BRYJLJE" class="popup-youtube video-icon-box video-icon-large position-relative">
                                <span>
                                    <span class="video-icon bg-white">
                                        <i class="icon-simple-line-control-play text-extra-dark-gray"></i>
                                        <span class="video-icon-sonar">
                                            <span class="video-icon-sonar-bfr bg-white opacity-7"></span>
                                            <span class="video-icon-sonar-afr bg-white"></span>
                                        </span>
                                    </span>
                                </span>
                            </a>
                        </div> */}
                    </div>
                    <div class="col-12 col-xl-4 col-lg-5 offset-lg-1 col-md-7">
                        <h4 class="alt-font font-weight-600 text-extra-dark-gray margin-4-half-rem-bottom letter-spacing-minus-1px text-center text-lg-start wow animate__fadeInRight" data-wow-delay="0.2s">We make your brand stand out!</h4>
                     
                        <div class="feature-box feature-box-left-icon-middle margin-4-half-rem-bottom wow animate__fadeInRight" data-wow-delay="0.3s">
                            <div class="feature-box-icon feature-box-icon-rounded dark bg-white w-85px h-85px rounded-circle box-shadow-small margin-40px-right">
                                <i class="line-icon-Cursor-Click2 icon-very-medium"></i>
                                <div class="feature-box-icon-hover bg-extra-dark-gray rounded-circle"></div>
                            </div>
                            <div class="feature-box-content last-paragraph-no-margin">
                                <span class="alt-font font-weight-500 margin-5px-bottom d-block text-extra-dark-gray">Creative Marketing</span>
                                <p>Stand out in the market with our digital marketing strategy</p>
                            </div>
                        </div>
                      
                        <div class="feature-box feature-box-left-icon-middle margin-4-half-rem-bottom wow animate__fadeInRight" data-wow-delay="0.4s">
                            <div class="feature-box-icon feature-box-icon-rounded dark bg-white w-85px h-85px rounded-circle box-shadow-small margin-40px-right">
                                <i class="line-icon-Sand-watch2 icon-very-medium"></i>
                                <div class="feature-box-icon-hover bg-extra-dark-gray rounded-circle"></div>
                            </div>
                            <div class="feature-box-content last-paragraph-no-margin">
                                <span class="alt-font font-weight-500 margin-5px-bottom d-block text-extra-dark-gray">Contents Creation</span>
                                <p>Get the best contents design for your brand marketing</p>
                            </div>
                        </div>
                   
                        <div class="feature-box feature-box-left-icon-middle wow animate__fadeInRight" data-wow-delay="0.5s">
                            <div class="feature-box-icon feature-box-icon-rounded dark bg-white w-85px h-85px rounded-circle box-shadow-small margin-40px-right">
                                <i class="line-icon-Idea-5 icon-very-medium"></i>
                                <div class="feature-box-icon-hover bg-extra-dark-gray rounded-circle"></div>
                            </div>
                            <div class="feature-box-content last-paragraph-no-margin">
                                <span class="alt-font font-weight-500 margin-5px-bottom d-block text-extra-dark-gray">Branding & Design</span>
                                <p>Let us assist you in your business branding design needs</p>
                            </div>
                        </div>
     
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-center margin-7-rem-top lg-margin-4-half-rem-top wow animate__fadeIn" data-wow-delay="0.6s">
                        <h3 class="alt-font text-extra-dark-gray font-weight-400">The Essence of  <br/>your<span class="text-gradient-sky-blue-pink  font-weight-600"> Business</span> is <span class="text-gradient-sky-blue-pink  font-weight-600">Creativity!</span></h3>
                    </div>
                    <div class="col-12 margin-6-rem-top md-margin-6-rem-top">
                        <div class="outside-box-right">
                            <div class="swiper-container white-move" data-slider-options='{"loop": true, "slidesPerView": 1, "spaceBetween": 30, "autoplay": { "delay": 3000, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "992": { "slidesPerView": 3 }, "768": { "slidesPerView": 2 } } }'>
                                <div class="swiper-wrapper">      
                                    <div class="swiper-slide interactive-banners-style-07">
                                        <div class="interactive-banners-box bg-dark-slate-blue border-radius-6px">
                                            <div class="interactive-banners-box-image">
                                                <img src="https://res.cloudinary.com/dedfrilse/image/upload/v1652356407/Solution-01.jpg" alt=""/>
                                                <div class="overlay-bg bg-gradient-dark-slate-blue-transparent"></div>
                                            </div>
                                            <div class="fancy-text-content padding-65px-lr md-padding-55px-lr xs-padding-30px-lr">
                                                <div class="text-white opacity-6 margin-10px-bottom"></div>
                                                <div class="alt-font text-extra-large text-white margin-15px-bottom w-60 lg-w-90 sm-w-50 xs-w-90 md-margin-5px-bottom">Revamp Your Social Media With Us</div>
                                                <a  style={{border: 0, borderWidth: 0}} href="what-we-offers.html" class="btn bg-gradient-sky-blue-pink btn-fancy btn-very-small btn-round-edge margin-15px-top">View information</a>
                                            </div>
                                        </div>
                                    </div>
                               
                                    <div class="swiper-slide interactive-banners-style-07">
                                        <div class="interactive-banners-box bg-dark-slate-blue border-radius-6px">
                                            <div class="interactive-banners-box-image">
                                                <img src="https://res.cloudinary.com/dedfrilse/image/upload/v1652356398/Solution-02.jpg" alt=""/>
                                                <div class="overlay-bg bg-gradient-dark-slate-blue-transparent"></div>
                                            </div>
                                            <div class="fancy-text-content padding-65px-lr md-padding-55px-lr xs-padding-30px-lr">
                                                <div class="text-white opacity-6 margin-10px-bottom"></div>
                                                <div class="alt-font text-extra-large text-white margin-15px-bottom w-60 lg-w-90 sm-w-50 xs-w-90 md-margin-5px-bottom">Build Your Brand Presence With Us</div>
                                                <a  style={{border: 0, borderWidth: 0}} href="what-we-offers.html" class="btn btn-fancy bg-gradient-sky-blue-pink btn-very-small btn-round-edge margin-15px-top">View information</a>
                                            </div>
                                        </div>
                                    </div>
                                 
                                    <div class="swiper-slide interactive-banners-style-07">
                                        <div class="interactive-banners-box bg-dark-slate-blue border-radius-6px">
                                            <div class="interactive-banners-box-image">
                                                <img src="https://res.cloudinary.com/dedfrilse/image/upload/v1652356392/Solution-03.jpg" alt=""/>
                                                <div class="overlay-bg bg-gradient-dark-slate-blue-transparent"></div>
                                            </div>
                                            <div class="fancy-text-content padding-65px-lr md-padding-55px-lr xs-padding-30px-lr">
                                                <div class="text-white opacity-6 margin-10px-bottom"></div>
                                                <div class="alt-font text-extra-large text-white margin-15px-bottom w-60 lg-w-90 sm-w-50 xs-w-90 md-margin-5px-bottom">Win More Sale Leads With Our Social Media Strategy</div>
                                                <a  style={{border: 0, borderWidth: 0}} href="what-we-offers.html" class="btn btn-fancy bg-gradient-sky-blue-pink btn-very-small btn-round-edge margin-15px-top">View information</a>
                                            </div>
                                        </div>
                                    </div>
                            
                                    <div class="swiper-slide interactive-banners-style-07">
                                        <div class="interactive-banners-box bg-dark-slate-blue border-radius-6px">
                                            <div class="interactive-banners-box-image">
                                                <img src="https://res.cloudinary.com/dedfrilse/image/upload/v1652356390/Solution-04.jpg" alt=""/>
                                                <div class="overlay-bg bg-gradient-dark-slate-blue-transparent"></div>
                                            </div>
                                            <div class="fancy-text-content padding-65px-lr md-padding-55px-lr xs-padding-30px-lr">
                                                <div class="text-white opacity-6 margin-10px-bottom"></div>
                                                <div class="alt-font text-extra-large text-white margin-15px-bottom w-60 lg-w-90 sm-w-50 xs-w-90 md-margin-5px-bottom">Reach More Customers With Our Digital Marketing Strategy</div>
                                                <a  style={{border: 0, borderWidth: 0}} href="what-we-offers.html" class="btn btn-fancy bg-gradient-sky-blue-pink btn-very-small btn-round-edge margin-15px-top">View information</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide interactive-banners-style-07">
                                        <div class="interactive-banners-box bg-dark-slate-blue border-radius-6px">
                                            <div class="interactive-banners-box-image">
                                                <img src="https://res.cloudinary.com/dedfrilse/image/upload/v1652356396/Solution-05.jpg" alt=""/>
                                                <div class="overlay-bg bg-gradient-dark-slate-blue-transparent"></div>
                                            </div>
                                            <div class="fancy-text-content padding-65px-lr md-padding-55px-lr xs-padding-30px-lr">
                                                <div class="text-white opacity-6 margin-10px-bottom"></div>
                                                <div class="alt-font text-extra-large text-white margin-15px-bottom w-60 lg-w-90 sm-w-50 xs-w-90 md-margin-5px-bottom">Take your Business Online with Us</div>
                                                <a  style={{border: 0, borderWidth: 0}} href="what-we-offers.html" class="btn btn-fancy bg-gradient-sky-blue-pink btn-very-small  btn-round-edge margin-15px-top">View information</a>
                                            </div>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>

            </div>
        </section>
        <section class="p-0 bg-gradient-sky-blue-pink wow animate__fadeIn">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-lg-6 cover-background md-h-550px sm-h-400px xs-h-300px wow animate__fadeInLeft" data-wow-delay="0.2s" style={{backgroundImage: "url('https://res.cloudinary.com/dedfrilse/image/upload/v1652356408/Thinking-Social-Media.jpg')"}}></div>
                    <div class="col-12 col-lg-6 padding-8-half-rem-tb padding-10-half-rem-lr xl-padding-7-half-rem-all lg-padding-4-half-rem-all md-padding-5-half-rem-all xs-padding-5-rem-lr wow animate__fadeIn" data-wow-delay="0.6s">
                        <span class="alt-font font-weight-500 text-extra-medium text-uppercase letter-spacing-minus-1-half d-block margin-25px-bottom text-white">DIGITAL MARKETING STRATEGY</span>
                        <h4 class="alt-font font-weight-600 text-white letter-spacing-minus-1px w-65 margin-2-half-rem-bottom xl-w-100">Thinking Social media management? Think us!</h4>
                        <p class="w-60 xl-w-100 text-white">We provide a combined creative and sophisticated Digital Marketing Strategy in Social media management for corporate needs with the Goal to Maximize Company Sales, Launch New Products or Service Promotion, Seasoned Campaigns and More.</p>
                       
                    </div>
                </div>
            </div>
        </section>
        <section class="big-big-section">
            <div class="container">
            <div class="row justify-content-center">
                    <div class="col-12 col-md-6 text-center">
                        {/* <span class="alt-font margin-10px-bottom d-block text-uppercase text-medium font-weight-500">How to expand business</span> */}
                        <h3 class="alt-font text-extra-dark-gray font-weight-700 letter-spacing-minus-1px">Our Clients</h3>
                    </div>
                </div>
                <div class="row client-logo-style-06 justify-content-center">
                    
                   {Array.isArray(clients) && clients?.map((client, index) => {
                       return (
                        <div class={`col-10 col-md-3 col-sm-2 ${![3, 7].includes(index)  && 'border-right'} ${index <= 3 && 'border-bottom'} border-color-medium-gray text-center xs-no-border-right wow animate__fadeIn`} data-wow-delay="0.1s">
                        <div class="client-box padding-4-rem-tb lg-padding-3-rem-tb xs-padding-4-rem-tb">
                            <a href="#"><img src={client?.fields?.photos[0]?.fields?.file?.url} alt={client?.fields?.photos[0]?.fields?.description}/></a>
                        </div>
                    </div>     
                       )
                   })}    
                    
                </div>
            </div>
        </section>
        <section class="big-section parallax wow animate__fadeIn" data-parallax-background-ratio="0.1" style={{backgroundImage:"url('https://res.cloudinary.com/dedfrilse/image/upload/v1652356387/Get-us-to-assist-you.jpg')"}}>
            <div class="opacity-full bg-gradient-fast-blue-purple"></div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-xl-7 col-lg-8 col-md-10 position-relative text-center wow animate__zoomIn" data-wow-delay="0.4s">
                        <span class="alt-font font-weight-500 text-white text-uppercase letter-spacing-2px opacity-5 d-block margin-30px-bottom md-margin-20px-bottom">WE ARE HERE TO SERVE YOU</span>
                        <h2 class="alt-font font-weight-500 text-white letter-spacing-minus-2px margin-50px-bottom md-margin-40px-bottom">Get us to assist you in driving more sales leads</h2>
                        <a href="/contactus" class="btn btn-large btn-white btn-rounded btn-box-shadow">Contact Us</a>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-12 col-lg-4 col-sm-8 text-center text-lg-start md-margin-5-rem-bottom wow animate__fadeIn" data-wow-delay="0.2s">
                        <span class="alt-font font-weight-500 text-yellow-ochre-light text-uppercase d-block margin-15px-bottom">Loved by our customers</span>
                        <h5 class="alt-font font-weight-700 text-uppercase text-extra-dark-gray letter-spacing-minus-1px m-0">What our clients are saying about our services</h5>
                    </div>
                    <div class="col-12 col-xl-7 offset-xl-1 col-lg-8 wow animate__fadeInRight" data-wow-delay="0.4s">
                        <div class="swiper-simple-arrow-style-1">
                            <div class="swiper-container black-move" data-slider-options='{ "loop": true, "slidesPerView": 1, "spaceBetween": 0, "observer": true, "observeParents": true, "keyboard": { "enabled": true, "onlyInViewport": true }, "autoplay": { "delay": 3000, "disableOnInteraction": false }, "effect": "slide" }'>
                                <div class="swiper-wrapper">
                                {Array.isArray(testimonials) && testimonials?.map((testimonial) => {
                       return (
                                    <div class="swiper-slide text-center">
                                        <div class="feature-box feature-box-left-icon-middle">
                                            <div class="feature-box-icon margin-50px-right xs-margin-15px-right">
                                                <img class="rounded-circle w-180px h-180px sm-w-150px sm-h-150px xs-w-80px xs-h-80px" src={testimonial?.fields?.clientphoto?.fields?.file?.url} alt=""/>
                                            </div>
                                            <div class="feature-box-content">
                                                <p class="w-85 lg-w-100">{testimonial?.fields?.description}</p>
                                                <div class="text-extra-dark-gray alt-font text-uppercase font-weight-600 line-height-20px">{testimonial?.fields?.clientname}</div>
                                                <span class="alt-font text-small text-uppercase">{testimonial?.fields?.jobtitle}</span>
                                            </div>
                                        </div>
                                    </div>
                       )})}
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
   </Layout>
  );
}

export default Homepage;