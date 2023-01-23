import React, {useState, useEffect} from 'react';
import Layout from '../homelayout/newlayout';
import {Helmet} from 'react-helmet';
import {useParams} from 'react-router-dom';
import {useProject} from '../useContentful';
import {Link} from 'react-router-dom';

function Insurance() {
    let { projectId } = useParams();
    const [project, setProject] = useState({});
    const [loading, setLoading] = useState(true);
	const {getProject} = useProject();
    let $ = window?.jQuery;
let Swiper = window.Swiper;
let [swp, setSwp] = useState(false);
var menuBreakPoint  = 991;
var menuBreakPoint  = 991;
var sliderBreakPoint= 991; // It will effect when you have used attribute "data-thumb-slider-md-direction" OR "data-slider-md-direction"

var lastScroll      = 0,
simpleDropdown  = 0,
linkDropdown    = 0,
isotopeObjs     = [],
swiperObjs      = [],
wow             = '';
var mobileAnimation = false;

var isMobile    = false,
isiPhoneiPad= false,
isSafari   = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
isMobile = true;
}

if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
isiPhoneiPad = true;
}
	
	useEffect(() => {
        setLoading(true);
		getProject(projectId).then((response) => {
            console.log(response?.fields);
            setLoading(false)
			setProject(response?.fields);
            setupSwiper();
		})
	}, [projectId])
    
    function setupSwiper() {

        /****** Swiper slider using params ******/
        var swiperItems = document.querySelectorAll(".swiper-container:not( .instafeed-wrapper )");
        swiperItems.forEach( function (swiperItem, index) {
            var _this           = $( swiperItem ),
                sliderOptions   = _this.attr( 'data-slider-options' );
            if ( typeof ( sliderOptions ) !== 'undefined' && sliderOptions !== null ) {
    
                sliderOptions = $.parseJSON( sliderOptions );
    
                /* If user have provided "data-slider-md-direction" attribute then below code will execute */
                var mdDirection = _this.attr( 'data-slider-md-direction' );
                if( mdDirection != '' && mdDirection != undefined ) {
    
                    var direction   = ( sliderOptions['direction'] != '' && sliderOptions['direction'] != undefined ) ? sliderOptions['direction'] : mdDirection;
                    sliderOptions['on'] = {
                                            init: function() {
                                                if( getWindowWidth() <= sliderBreakPoint ) {
                                                    this.changeDirection( mdDirection );
                                                } else {
                                                    this.changeDirection( direction );
                                                }
                                                this.update();
                                            },
                                            resize: function () {
                                                if( getWindowWidth() <= sliderBreakPoint ) {
                                                    this.changeDirection( mdDirection );
                                                } else {
                                                    this.changeDirection( direction );
                                                }
                                                this.update();
                                            }
                                        };
                }
    
                /* If user have provided "data-thumb-slider-md-direction" attribute then below code will execute */
                if( sliderOptions['thumbs'] != '' && sliderOptions['thumbs'] != undefined ) {
    
                    var mdThumbDirection = _this.attr( 'data-thumb-slider-md-direction' );
                    if( mdThumbDirection != '' && mdThumbDirection != undefined ) {
    
                        var thumbDirection   = ( sliderOptions['thumbs']['swiper']['direction'] != '' && sliderOptions['thumbs']['swiper']['direction'] != undefined ) ? sliderOptions['thumbs']['swiper']['direction'] : mdThumbDirection;
                        sliderOptions['thumbs']['swiper']['on'] = {
                                                init: function() {
                                                    if( getWindowWidth() <= sliderBreakPoint ) {
                                                        this.changeDirection( mdThumbDirection );
                                                    } else {
                                                        this.changeDirection( thumbDirection );
                                                    }
                                                    this.update();
                                                },
                                                resize: function () {
                                                    if( getWindowWidth() <= sliderBreakPoint ) {
                                                        this.changeDirection( mdThumbDirection );
                                                    } else {
                                                        this.changeDirection( thumbDirection );
                                                    }
                                                    this.update();
                                                },
                                                click: function() {
                                                    /* Product thumbs automatic next / previous on click slide */
                                                    if( this.activeIndex == this.clickedIndex ) {
                                                        this.slidePrev();
                                                    } else {
                                                        this.slideNext();
                                                    }
                                                }
                                            };
                    }
                }
    
                /* If user have provided "data-slider-number-pagination" attribute then below code will execute */
                var numberPagination = _this.attr( 'data-slider-number-pagination' );
                if( numberPagination != '' && numberPagination != undefined ) {
    
                    sliderOptions['on']['slideChange'] = function () {
                        if( $( '.swiper-pagination-current' ).length > 0 ) {
                            $( '.swiper-pagination-current' ).html( pad( this.realIndex + 1, 2 ) );
                        }
                        if( $( '.swiper-pagination-total' ).length > 0 ) {
                            $( '.swiper-pagination-total' ).html( pad( this.slides.length - 2, 2 ) );
                        }
                    };
                }
    
                /* If user have provided "data-slide-change-on-click" attribute then below code will execute */
                var changeOnClick = _this.attr( 'data-slide-change-on-click' );
                if( changeOnClick != '' && changeOnClick != undefined ) {
    
                    sliderOptions['on'] = {
                                            click: function() {
                                                if ( this.activeIndex > this.clickedIndex ) {
                                                    this.slidePrev();
                                                } else if ( this.activeIndex < this.clickedIndex ) {
                                                    this.slideNext();
                                                }
                                            }
                                        };
                }                
    
                /* If user have provided "data-thumbs" attribute then below code will execute */
                var dataThumbs = _this.attr( 'data-thumbs' );
                if( dataThumbs != '' && dataThumbs != undefined ) {
                    dataThumbs = $.parseJSON( dataThumbs );
                    if ( typeof ( dataThumbs ) !== 'undefined' && dataThumbs !== null ) {
                        sliderOptions['pagination']['renderBullet'] = function ( index, className ) {
                            return '<span class="' + className + '" style="background-image: url( ' + dataThumbs[index] + ' )"></span>';
                        }
                    }
                }
    
                var swiperObj = new Swiper( swiperItem, sliderOptions );
                swiperObjs.push( swiperObj );
            }
        });
    }
    
    /****** Destroy swiper loop ******/
    function destroySwiperLoop() {
        for( var i=0; i < swiperObjs.length; i++ ) {
            var swiperObj   = swiperObjs[i],
                destroyWidth= swiperObj.$el.attr( 'data-slider-destroy' );
            // If user have provided "data-slider-destroy" attribute then below code will execute
            if( destroyWidth != '' && destroyWidth != undefined ) {
                if ( getWindowWidth() <= destroyWidth ) {
                    swiperObj.destroy( false, true ); // Destroy swiper
                } else if( swiperObj.destroyed ) {
                    swiperObjs.splice(i, 1);
                    setupSwiper(); // Initialize swiper again
                }
            }
        };
    }

    function pad( d ) {
        return ( d < 10 ) ? '0' + d.toString() : d.toString();
    }
    
      function getWindowWidth() {
        return $( window ).width();
    }
    
        /****** Get window height ******/
        function getWindowHeight() {
            return $( window ).height();
        }
  return (
   <Layout>
        <Helmet>
        <title>Projects | Essence Creative Solutions</title>
      </Helmet>
      {/* bg-gradient-fast-blue-purple */}
       {!loading && project && <> <section class="py-0 parallax-two overlap-height" data-parallax-background-ratio="0.5" style={{backgroundImage: `url(${project?.bannerPhoto?.fields?.file?.url})`}}>
            <div class="opacity-light"></div>
            <div class="row justify-content-center" style={{width: '100%'}}>
                {/* <div class="col-12 col-md-6 position-relative text-center one-fourth-screen d-flex flex-column justify-content-center sm-h-350px">
                    <span class="text-uppercase text-small alt-font letter-spacing-5px text-white d-inline-block margin-20px-bottom font-weight-500 sm-margin-10px-bottom">{project?.smallDsecription}</span>
                    <h2 class="alt-font text-white font-weight-600 text-uppercase d-block mb-0">{project?.title}</h2>
                </div> */}
            </div>
        </section>
        <section class="overflow-visible pb-0">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 text-center overlap-section-two">
                        <div class="overlap-section-inner">
                            <img style={{padding: 10}} class="sm-w-30 xs-w-40 bg-gradient-fast-blue-purple box-shadow-extra-large" src={`${project?.miniPhoto?.fields?.file?.url}`} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-11">
                        <div class="row">
                            <div class="col-lg-4 padding-five-right lg-padding-15px-right md-margin-50px-bottom wow animate__fadeIn" data-wow-delay="0.2s">
                                <h5 class="alt-font text-extra-dark-gray font-weight-500 margin-4-rem-bottom letter-spacing-minus-1px">The project description</h5>
                                <ul class="list-unstyled">
                                    <li style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}} class="border-bottom border-color-medium-gray padding-20px-bottom margin-20px-bottom"><span class="text-uppercase text-extra-dark-gray w-35 d-inline-block font-weight-500 alt-font text-medium">Client</span><span className='essence-project-font'>{project?.clientName}</span></li>
                                    <li class="border-bottom border-color-medium-gray padding-20px-bottom margin-20px-bottom"><span class="text-uppercase text-extra-dark-gray w-35 d-inline-block font-weight-500 alt-font text-medium">Services</span>{project?.services}</li>
                                    <li><span class="text-uppercase text-extra-dark-gray w-35 d-inline-block font-weight-500 alt-font text-medium">Industry</span>{project?.industry}</li>
                                </ul>
                            </div>
                            <div class="col-lg-7 offset-lg-1 wow animate__fadeIn" data-wow-delay="0.4s">
                                <span class="alt-font text-medium text-uppercase font-weight-500 margin-20px-bottom d-inline-block text-extra-dark-gray">Project Brief</span>
                                <p>{project?.projectBrief}</p>
                                <span class="alt-font text-medium text-uppercase font-weight-500 margin-20px-bottom d-inline-block text-extra-dark-gray">Solution Brief</span>
                                <p>{project?.solutionBrief}</p>
                                <a href={`${project?.projectLink || '#'}`} class="btn btn-link btn-large text-extra-dark-gray">View more about project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="p-0 position-relative overflow-visible wow animate__fadeIn">
            <div class="slider-blog-banner swiper-container black-move" data-slider-options='{ "loop": true, "centeredSlides": true, "slidesPerView": "auto", "speed": 1000, "keyboard": { "enabled": true, "onlyInViewport": true }, "autoplay": { "delay": 1500, "disableOnInteraction": false }, "pagination": { "el": ".swiper-pagination", "clickable": true }, "navigation": { "nextEl": ".swiper-button-next-nav", "prevEl": ".swiper-button-previous-nav" } }'>
                <div class="swiper-wrapper">
       
                   {project && Array?.isArray(project?.gallery) && project?.gallery?.map((proj) => {
                       return (
                        <div class="swiper-slide w-55 sm-w-65">
                        <div class="w-100 padding-15px-lr sm-padding-10px-lr xs-padding-5px-lr">
                            <img src={proj?.fields?.file?.url} alt={proj?.fields?.description} />
                        </div>
                    </div>
                       )
                   })}
               
                </div>
  
                <div class="swiper-pagination swiper-light-pagination"></div>
         
       
                <div class="swiper-button-next-nav swiper-button-next rounded-circle slider-navigation-style-07"><i class="feather icon-feather-arrow-right"></i></div>
                <div class="swiper-button-previous-nav swiper-button-prev rounded-circle slider-navigation-style-07"><i class="feather icon-feather-arrow-left"></i></div>
               
            </div>  
        </section>

        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-11">
                        <div class="row align-items-center">
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} class="col-12 col-md-6 sm-margin-30px-bottom wow animate__fadeIn">
                                <img src={`${project?.quotePhoto?.fields?.file?.url}`} alt=""/>
                            </div>
  
                            <div class="col-12 col-md-6 col-xl-5 offset-xl-1 pe-xl-0 wow animate__fadeInRight">
                                <blockquote class="border-width-6px alt-font border-color-light-peach margin-4-half-rem-tb md-no-padding-right xs-no-margin-tb">
                                    <p>{project?.quoteDescription}</p>
                                    <footer class="text-small letter-spacing-2px d-inline-block text-uppercase">{project?.quoteTitle}</footer>
                                </blockquote>
                            </div>
                     
                        </div>
                    </div>
                </div>
            </div>
        </section>
{project?.previousproject && project?.nextproject &&  <section class="fancy-box-background fancy-box-col bg-light-gray p-0">
            <div class="container-fluid">
                <div class="row row-cols-1 row-cols-sm-2 justify-content-center">
                    <div class="col fancy-box-item px-0">
                        <Link to={`/projects/${project?.previousproject?.sys?.id}`} class="d-flex h-100 align-items-center justify-content-center justify-content-lg-between justify-content-sm-start padding-7-rem-lr padding-4-rem-tb xl-padding-3-rem-all xs-padding-2-rem-tb xs-no-padding-lr">
                            <div class="bg-banner-image cover-background" style={{backgroundImage: `url(${project?.previousproject?.fields?.outerbanner?.fields?.file?.url})`}}></div>
                            <div class="light alt-font text-extra-dark-gray font-weight-500 btn-slide-icon-left text-uppercase me-lg-auto"><i class="line-icon-Arrow-OutLeft icon-medium align-middle margin-20px-right"></i><span class="d-none d-lg-inline-block text-small">Prev project</span></div>
                            <span class="light text-extra-large alt-font text-extra-dark-gray d-block font-weight-500">{project?.previousproject?.fields?.title}</span>
                        </Link>
                    </div>
                    <div class="col fancy-box-item px-0">
                        <Link to={`/projects/${project?.nextproject?.sys?.id}`} class="d-flex h-100 align-items-center justify-content-center justify-content-sm-end justify-content-lg-between padding-7-rem-lr padding-4-rem-tb xl-padding-3-rem-all xs-padding-2-rem-tb xs-no-padding-lr">
                            <div class="bg-banner-image cover-background" style={{backgroundImage: `url(${project?.nextproject?.fields?.outerbanner?.fields?.file?.url})`}}></div>
                            <span class="light text-extra-large alt-font text-extra-dark-gray d-block font-weight-500 me-lg-auto">{project?.nextproject?.fields?.title}</span>
                            <div class="light alt-font text-extra-dark-gray font-weight-500 btn-slide-icon text-uppercase"><span class="d-none d-lg-inline-block text-small">Next project </span><i class="line-icon-Arrow-OutRight icon-medium align-middle margin-20px-left"></i></div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>}
       
       </>}
       
   </Layout>
  );
}

export default Insurance;