import React, {useEffect} from 'react';
// import $ from 'jquery';
// window.jQuery = $;

function Layout(props) {
let $ = window?.jQuery;
let Swiper = window.Swiper;

var menuBreakPoint  = 991;
var menuBreakPoint  = 991;
var sliderBreakPoint= 991; // It will effect when you have used attribute "data-thumb-slider-md-direction" OR "data-slider-md-direction"

var lastScroll      = 0,
simpleDropdown  = 0,
linkDropdown    = 0,
isotopeObjs     = [],
swiperObjs      = [],
wow             = '';

  useEffect(() => {
    var revapi265
(function () {
    if (!/loaded|interactive|complete/.test(document.readyState))
        document.addEventListener("DOMContentLoaded", onLoad);
    else
        onLoad();
    function onLoad() {
        var tpj;
        if (tpj === undefined) {
            tpj = $;
            if ("off" == "on")
                tpj.noConflict();
        }
        if (tpj("#rev_slider_31_1").revolution == undefined) {
            console.log('rev err');
        } else {
            revapi265 = tpj("#rev_slider_31_1").show().revolution({
                sliderType: "standard",
                jsFileLocation: "revolution/js/",
                sliderLayout: "fullwidth",
                dottedOverlay: "none",
                delay: 9000,
                navigation: {
                    keyboardNavigation: "on",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    mouseScrollReverse: "default",
                    onHoverStop: "off",
                    touch: {
                        touchenabled: "on",
                        touchOnDesktop: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    bullets: {
                        enable: true,
                        style: 'zeus',
                        tmp: '<div class="wrapper"></div>',
                        direction: 'horizontal',
                        rtl: false,

                        container: 'slider',
                        h_align: 'center',
                        v_align: 'bottom',
                        h_offset: -535,
                        v_offset: 45,
                        space: 10,

                        hide_onleave: false,
                        hide_onmobile: false,
                        hide_under: 0,
                        hide_over: 9999,
                        hide_delay: 200,
                        hide_delay_mobile: 1200
                    },
                },
                parallax: {
                    type: "mouse",
                    origo: "slidercenter",
                    speed: 2000,
                    levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 46, 47, 48, 49, 50, 55],
                    type: "mouse",
                    disable_onmobile: "on"
                },
                responsiveLevels: [1240, 1025, 778, 480],
                visibilityLevels: [1920, 1500, 1025, 768],
                gridwidth: [1150, 1025, 778, 480],
                gridheight: [800, 550, 550, 800],
                lazyType: "none",
                shadow: 0,
                spinner: "spinner3",
                stopLoop: "on",
                stopAfterLoops: 0,
                stopAtSlide: 1,
                shuffle: "off",
                autoHeight: "off",
                fullScreenAutoWidth: "on",
                fullScreenAlignForce: "off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "",
                disableProgressBar: "on",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLimit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false,
                }
            });
        }
        ; /* END OF revapi call */
    }
    ; /* END OF ON LOAD FUNCTION */
}()); /* END OF WRAPPING FUNCTION */
setupSwiper();
destroySwiperLoop()
  }, []);


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

function getTopSpaceHeaderHeight() {
    var topSpaceHeaderHeight = 0;
    if ( $( 'header nav.navbar' ).length > 0 ) { // Standard header
        topSpaceHeaderHeight = topSpaceHeaderHeight + $( 'header nav.navbar' ).outerHeight();
    }
    if ( $( '.top-bar' ).length > 0 ) { // Top bar
        topSpaceHeaderHeight = topSpaceHeaderHeight + $( '.top-bar' ).outerHeight();
    }
    if ( $( '.sidebar-nav-action' ).length > 0 && getWindowWidth() <= menuBreakPoint ) { // Left modern
        topSpaceHeaderHeight = topSpaceHeaderHeight + $( '.sidebar-nav-action' ).outerHeight();
    }
    if ( $( '.side-menu-header' ).length > 0 && getWindowWidth() <= menuBreakPoint ) { // Left classic
        topSpaceHeaderHeight = topSpaceHeaderHeight + $( '.side-menu-header' ).outerHeight();
    }
    return topSpaceHeaderHeight;
}


function menuPosition( element ) {
    var windowWidth     = getWindowWidth();
        /****** Don't change variables value ******/
        var lastScroll      = 0,
        simpleDropdown  = 0,
        linkDropdown    = 0,
        isotopeObjs     = [],
        swiperObjs      = [],
        wow             = '';
    if ( element.hasClass( 'simple-dropdown' ) ) {
        simpleDropdown  = element;
        linkDropdown    = element.find( 'a.nav-link' );
        var menuSpacing     = 30,
            menuLeftPosition= element.offset().left,
            menuWidth       = element.children( '.dropdown-menu' ).outerWidth(),
            menuDropdownCSS = ( windowWidth - menuSpacing ) - ( menuLeftPosition + menuWidth );
        if( menuDropdownCSS < 0 ) {
            element.children( '.dropdown-menu' ).css( 'left', menuDropdownCSS );
        }
    }
    if ( element.parent().hasClass( 'dropdown-menu' ) && element.parents( '.simple-dropdown' ) ) {
        var dropdownWidth   = 0,
            maxValueInArray = 0,
            lastValue       = 0,
            multiDepth      = 0;
        dropdownWidth = element.outerWidth() - linkDropdown.outerWidth();
        element.find( '.dropdown-menu' ).each( function () {
            var arr = [];
            if ( element.find( 'li' ).hasClass( 'dropdown' ) ) {
                dropdownWidth = dropdownWidth + element.outerWidth();
                element.find( 'li.dropdown' ).each( function () {
                    var dropdownMenu = element.closest( '.dropdown-menu' );
                    arr.push( dropdownMenu.outerWidth() );
                });
                maxValueInArray = lastValue + Math.max.apply( Math, arr );
                lastValue       = maxValueInArray;
                dropdownWidth   = dropdownWidth + maxValueInArray;
                multiDepth      = multiDepth + 1;
            } else if ( multiDepth < 1 ) {
                dropdownWidth = dropdownWidth + element.outerWidth();
            }
        });
        var menuRightPosition = windowWidth - ( simpleDropdown.offset().left + simpleDropdown.outerWidth() );
        if ( dropdownWidth > menuRightPosition ) {
            if( element.find( '.dropdown-menu' ).length > 0 ) {
                var menuTopPosition = element.position().top,
                    submenuObj      = element.find( '.dropdown-menu' ),
                    submenuHeight   = submenuObj.outerHeight(),
                    totalHeight     = menuTopPosition + submenuHeight + getTopSpaceHeaderHeight(),
                    windowHeight    = getWindowHeight();
                if( totalHeight > windowHeight ) {
                    submenuObj.css( 'top', '-' + ( totalHeight - windowHeight ) + 'px' );
                }
            }
            element.addClass( 'menu-left' );
        }
    }
}

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

/****** Reset swiper loop ******/
function resetSwiperLoop() {
    setTimeout( function() {
        for( var i=0; i < swiperObjs.length; i++ ) {
            var swiperObj = swiperObjs[i];
            swiperObj.update();
        }
    }, 500 );
}


   useEffect(() => {
    var menuBreakPoint  = 991;
    $( '.dropdown' ).on( 'mouseenter touchstart', function( e ) {
        var _this = $( this );
            _this.siblings( '.dropdown' ).removeClass( 'open' );
            _this.parents( '.navbar-nav' ).siblings( '.navbar-nav' ).find( '.dropdown' ).removeClass( 'open' );
            _this.addClass( 'open' );
        if ( getWindowWidth() > menuBreakPoint ) {
            menuPosition( _this );
            if( $( e.target ).siblings( '.dropdown-menu' ).length ) {
                e.preventDefault();
            }
        }

    }).on( 'mouseleave', function( e ) {

        var _this = $( this );
        _this.removeClass( 'menu-left' );
        _this.removeClass( 'open' );
    });
   }, [])


  return (
      <>
      {/* <!-- start header --> */}
        <header>
            {/* <div class="top-bar bg-light-gray border-bottom border-color-black-transparent d-none d-md-inline-block padding-35px-lr md-no-padding-lr">
                <div class="container-fluid nav-header-container">
                    <div class="d-flex flex-wrap align-items-center">
                        <div class="col-12 text-center text-sm-start col-sm-auto me-auto ps-lg-0">
                            <ul class="social-icon padding-5px-tb">
                                <li><a class="text-neon-blue-hover" href="http://www.facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a class="text-neon-blue-hover" href="http://www.dribbble.com" target="_blank"><i class="fab fa-dribbble"></i></a></li>
                                <li><a class="text-neon-blue-hover" href="http://www.twitter.com" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                <li><a class="text-neon-blue-hover" href="http://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                        <div class="col-auto d-none d-sm-block text-end px-lg-0 font-size-0">
                            <div class="top-bar-contact">
                                <span class="top-bar-contact-list">
                                    <i class="feather icon-feather-phone-call icon-extra-small text-extra-dark-gray"></i>
                                    0222 8899900
                                </span>
                                <span class="top-bar-contact-list d-none d-md-inline-block no-border-right pe-0">
                                    <i class="feather icon-feather-map-pin icon-extra-small text-extra-dark-gray"></i>
                                    401 Broadway, 24th Floor, San Francisco
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <nav class="navbar navbar-expand-lg navbar-light bg-white header-light fixed-top navbar-boxed header-reverse-scroll">
                <div class="container-fluid nav-header-container">
                    <div class="col-6 col-lg-2 me-auto ps-lg-0">
                        <a class="navbar-brand" href="/">
                            <img style={{width: 150}} src="images/gwen.png" data-at2x="images/gwen.png" class="default-logo" alt=""/>
                        </a>
                    </div>
                    <div class="col-auto menu-order px-lg-0">
                        <button class="navbar-toggler float-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
                            <span class="navbar-toggler-line"></span>
                            <span class="navbar-toggler-line"></span>
                            <span class="navbar-toggler-line"></span>
                            <span class="navbar-toggler-line"></span>
                        </button>
                        <div class=" collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul class="navbar-nav alt-font">
                                <li class="nav-item">
                                    <a href="/" class="nav-link">Home</a> 
                                </li>
                                <li class="nav-item dropdown simple-dropdown">
                                <a href="#" class="nav-link">About Us</a>
                                <i class="fa fa-angle-down dropdown-toggle" data-bs-toggle="dropdown" aria-hidden="true"></i>
                                    <ul class="dropdown-menu" role="menu">
                                        <li class="dropdown">
                                            <a  href="/whoweare">Who We Are</a>
                                        </li>
                                        <li class="dropdown">
                                            <a  href="/ourmanagement">Our Management</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="/whatwedo" class="nav-link">What We Do</a> 
                                </li>
                                <li class="nav-item">
                                    <a href="/contactus" class="nav-link">Contact Us</a> 
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <div class="col-auto text-end pe-0 font-size-0">
                        <div class="header-search-icon search-form-wrapper">
                            <a href="javascript:void(0)" class="search-form-icon header-search-form"><i class="feather icon-feather-search"></i></a>
                       
                            <div class="form-wrapper">
                                <button title="Close" type="button" class="search-close alt-font">×</button>
                                <form id="search-form" role="search" method="get" class="search-form text-start" action="search-result.html">
                                    <div class="search-form-box">
                                        <span class="search-label alt-font text-small text-uppercase text-medium-gray">What are you looking for?</span>
                                        <input class="search-input alt-font" id="search-form-input5e219ef164995" placeholder="Enter your keywords..." name="s" value="" type="text" autocomplete="off"/>
                                        <button type="submit" class="search-button">
                                            <i class="feather icon-feather-search" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        
                        </div>
                        <div class="header-language dropdown d-lg-inline-block">
                            <a href="javascript:void(0);"><i class="feather icon-feather-globe"></i></a>
                            <ul class="dropdown-menu alt-font">
                                <li><a href="javascript:void(0);" title="English"><span class="icon-country"><img src="images/country-flag-16X16/usa.png" alt=""/></span>English</a></li>
                                <li><a href="javascript:void(0);" title="England"><span class="icon-country"><img src="images/country-flag-16X16/england.png" alt=""/></span>England</a></li>
                                <li><a href="javascript:void(0);" title="France"><span class="icon-country"><img src="images/country-flag-16X16/france.png" alt=""/></span>France</a></li>
                                <li><a href="javascript:void(0);" title="Russian"><span class="icon-country"><img src="images/country-flag-16X16/russian.png" alt=""/></span>Russian</a></li>
                                <li><a href="javascript:void(0);" title="Spain"><span class="icon-country"><img src="images/country-flag-16X16/spain.png" alt=""/></span>Spain</a></li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </nav>
        </header>
        {/* <!-- end header --> */}
         {props.children}
         <footer class="footer-digital-agency footer-light">
            <div class="footer-top padding-six-tb lg-padding-eight-tb md-padding-50px-tb">
                <div class="container">
                    <div class="row">
                        {/* <!-- start footer column --> */}
                        <div class="col-12 col-lg-3 col-sm-6 order-sm-1 order-lg-0 md-margin-50px-bottom xs-margin-25px-bottom">
                            <a href="/" class="footer-logo margin-40px-bottom d-inline-block md-margin-30px-bottom xs-margin-20px-bottom"><img src="images/gwen.png" style={{width: 150}} alt=""/></a>
                            <span class="alt-font font-weight-500 text-extra-large line-height-32px letter-spacing-minus-1-half text-extra-dark-gray d-block w-85 lg-w-100 md-w-70 sm-w-100 xs-w-90">We are a dedicated Insurance Consultants, providing products of Life and non-life insurance.</span>
                        </div>
                        {/* <!-- end footer column -->
                        <!-- start footer column --> */}
                        <div class="col-12 col-lg-2 offset-lg-1 col-sm-6 order-sm-3 order-lg-0 xs-margin-25px-bottom">
                            <span class="alt-font font-weight-500 d-block text-extra-dark-gray text-uppercase text-medium letter-spacing-2px margin-25px-bottom xs-margin-10px-bottom">Company</span>
                            <ul>
                                <li><a href="/whoweare">Who We Are</a></li>
                                <li><a href="/ourmanagement">Our Management</a></li>
                                <li><a href="/whatwedo">What We Do</a></li>
                                <li><a href="/contactus">Contact us</a></li>
                            </ul>
                        </div>
                        {/* <!-- end footer column -->
                        <!-- start footer column --> */}
                        <div class=" footer-padding col-12 col-xl-2 offset-xl-1 col-lg-3 col-sm-6 order-sm-4 order-lg-0 xs-margin-25px-bottom">
                            <span class="alt-font font-weight-500 d-block text-extra-dark-gray text-uppercase text-medium letter-spacing-2px margin-25px-bottom xs-margin-10px-bottom">Get in Touch</span>
                            <ul>                           
                                <li><a href="#">Block1085, Masaki-Mererani Street</a></li>
                                <li><a href="#">Dar es Salaam, Tanzania</a></li>
                                <li><a href="#">+255 (0) 222 602 330</a></li>
                                <li><a href="#">info@gwenconsults.co.tz</a></li>
                            </ul>
                        </div>
                        {/* <!-- end footer column -->
                        <!-- start footer column --> */}
                        <div class="col-12 col-xl-2 offset-xl-1 col-lg-3 col-sm-6 order-sm-2 order-lg-0 md-margin-50px-bottom xs-no-margin-bottom">
                            <span class="alt-font font-weight-500 d-block text-extra-dark-gray text-uppercase text-medium letter-spacing-2px margin-25px-bottom xs-margin-25px-bottom">Follow us</span>
                            <div class="social-icon-style-12">
                                <ul class="extra-small-icon">
                                    <li><a class="facebook" href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a class="twitter" href="http://www.twitter.com" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                    <li><a class="instagram" href="http://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a></li>
                                    <li><a class="linkedin" href="http://www.linkedin.com" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- end footer column --> */}
                    </div>
                </div>
            </div>
            <div class="footer-bottom padding-3-half-rem-bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-6 order-2 order-md-1 text-sm-center text-md-start last-paragraph-no-margin">
                            <p>©️ 2022 Gwen Consultancy Limited | Designed by:  <a href="https://essence.co.tz/" target="_blank" class="text-decoration-line-bottom text-extra-dark-gray font-weight-500">Essence Creative</a></p>
                        </div>
                        {/* <div class="col-12 col-md-6 order-1 order-md-2 sm-margin-10px-bottom">
                            <ul class="footer-horizontal-link d-flex flex-column flex-sm-row justify-content-sm-center justify-content-md-end">
                                <li><a href="#">Privacy policy</a></li>
                                <li><a href="#">Legal</a></li>
                                <li><a href="#">Terms of service</a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
     <a class="scroll-top-arrow" href="javascript:void(0);"><i class="feather icon-feather-arrow-up"></i></a>
    </>
  )
}

export default Layout;