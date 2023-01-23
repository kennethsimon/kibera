import React, {useEffect, useState} from 'react';
import WOW from 'wowjs';
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

    $( '.portfolio-wrapper' ).each( function() {
        var _this = $( this );
        if( ! _this.find( '.wow' ).length > 0 ) {
            _this.find( '.grid-item' ).css( 'visibility', 'hidden' );
        }
        _this.imagesLoaded( function () {
            if( ! _this.find( '.wow' ).length > 0 ) {
                _this.find( '.grid-item' ).css( 'visibility', '' );
            } else if( !isMobile ) {
                _this.find( '.grid-item' ).css( 'visibility', '' );
            }
            _this.removeClass( 'grid-loading' );
            _this.isotope({
                layoutMode: 'masonry',
                itemSelector: '.grid-item',
                percentPosition: true,
                stagger: 0,
                masonry: {
                    columnWidth: '.grid-sizer',
                }
            });
            isotopeObjs.push( _this );
        });
    });
   }, [])

   useEffect(() => {
    var revapi263;
     var   tpj;
(function () {
    if (tpj === undefined) {
        tpj = window?.jQuery;
        if ("off" == "on")
            tpj.noConflict();
    }
    if (!/loaded|interactive|complete/.test(document.readyState))
        document.addEventListener("DOMContentLoaded", onLoad);
    else
        onLoad();
    function onLoad() {
        if (tpj("#rev_slider_26_1").revolution == undefined) {
            console.log('none')
            // revslider_showDoubleJqueryError("#rev_slider_26_1");
        } else {
            var revOffset = tpj(window).width() <= 991 ? '73px' : '';
            revapi263 = tpj("#rev_slider_26_1").show().revolution({
                sliderType: "standard",
                jsFileLocation: "revolution/js/",
                sliderLayout: "fullscreen",
                dottedOverlay: "none",
                delay: 4500,
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
                    arrows: {
                        enable: true,
                        style: 'ares',
                        tmp: '',
                        rtl: false,
                        hide_onleave: false,
                        hide_onmobile: true,
                        hide_under: 767,
                        hide_over: 9999,
                        hide_delay: 0,
                        hide_delay_mobile: 0,

                        left: {
                            container: 'slider',
                            h_align: 'left',
                            v_align: 'center',
                            h_offset: 60,
                            v_offset: 0
                        },

                        right: {
                            container: 'slider',
                            h_align: 'right',
                            v_align: 'center',
                            h_offset: 60,
                            v_offset: 0
                        }
                    },
                    bullets: {
                        enable: true,
                        style: 'zeus',
                        direction: 'horizontal',
                        rtl: false,

                        container: 'slider',
                        h_align: 'center',
                        v_align: 'bottom',
                        h_offset: 0,
                        v_offset: 30,
                        space: 7,

                        hide_onleave: false,
                        hide_onmobile: false,
                        hide_under: 0,
                        hide_over: 767,
                        hide_delay: 200,
                        hide_delay_mobile: 1200
                    },
                },
                responsiveLevels: [1240, 1025, 778, 480],
                visibilityLevels: [1920, 1500, 1025, 768],
                gridwidth: [1200, 991, 778, 480],
                gridheight: [1025, 1366, 1025, 868],
                lazyType: "none",
                shadow: 0,
                spinner: "spinner4",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "on",
                fullScreenAutoWidth: "on",
                fullScreenAlignForce: "off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: revOffset,
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
   }, [])

   function removeWowAnimation( gridObj ) {
    gridObj.find( '.grid-item' ).removeClass( 'animate__animated' ).css( 'visibility', '' ); // avoid problem to filter after sorting
    if( $( '.wow' ).length > 0 ) {
        gridObj.find( '.grid-item' ).each( function () {
            var _this = $( this );
            // remove perticular element from WOW array when you don't want animation on element after DOM lead
            wow.removeBox( this );
            _this.css( '-webkit-animation', 'none' );
            _this.css( '-moz-animation', 'none' );
            _this.css( '-ms-animation', 'none' );
            _this.css( 'animation', 'none' );
        });
    }
}

   useEffect(() => {
        /****** Wow animation ******/
    if( $( '.wow' ).length > 0 ) {
        wow = new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animate__animated',
            offset: 30,
            mobile: mobileAnimation,
            live: true
        });
        $( document ).imagesLoaded( function () {
            wow.init();
        });
    }
    $(document).on( 'click', '.portfolio-filter > li > a', function () {
        var _this           = $( this ),
            parentSectionObj= _this.parents( 'section' );
        parentSectionObj.find( '.portfolio-filter > li' ).removeClass( 'active' );
        _this.parent().addClass( 'active' );
        var selector        = _this.attr( 'data-filter' ),
            portfolioFilter = parentSectionObj.find( '.portfolio-wrapper' );
        // Remove animation
        removeWowAnimation( portfolioFilter );
        // Isotope filter
        portfolioFilter.isotope({ filter: selector });
        return false;
    });
   }, [])

  return (
      <>
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent header-dark fixed-top navbar-boxed navbar-static-overlay">
                <div class="container-fluid h-100px md-h-70px">
                    <div class="col-6 col-lg-2 me-auto me-auto ps-lg-0" style={{marginTop: 20}}>
                        <a class="navbar-brand" href="/">
                            <img src={props?.page === 'home' || props?.page === 'contactus' ? '../images/essencewhite.png' : '../images/essence.png'} class='default-logo' alt=""/>
                        </a>
                    </div>
                    <div class="col-auto text-end">
                    {/* <div class="menu-btn pull-right">
            <a id="hamburger-icon" class="humbergerz push-button" href="javascript:void(0);" title="Menu">
              <span class="line line-1"></span>
              <span class="line line-2"></span>
              <span class="line line-3"></span>
            </a>
          </div> */}
                        <div class="header-push-button">
                            {/* <a href="javascript:void(0);" class="push-button ">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </a> */}
                             <div class="menu-btn pull-right">
            <a id="hamburger-icon" class="humbergerz push-button" href="javascript:void(0);" title="Menu">
              <span class="line line-1"></span>
              <span class="line line-2"></span>
              <span class="line line-3"></span>
            </a>
          </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="hamburger-menu hamburger-menu-big-font bg-black w-25 xl-w-60 lg-w-70 md-w-50 sm-w-100">
                <a href="javascript:void(0);" class="close-menu text-white"><i class="ti-close"></i></a>
                <div class="row g-0 h-100">
                    <div class="col-lg-12">
                        <div class="row g-0 align-items-center justify-content-center h-100 padding-7-rem-all xs-padding-3-rem-all">
                            <div class="col-12 menu-list-wrapper menu-list-wrapper-small text-center text-md-start" data-scroll-options='{ "theme": "light" }'>
                             
                                <ul class="menu-list alt-font w-100">
                                   
                                    <li class="menu-list-item"><a href="/">Home</a>
                                    </li>
      
                                    <li class="menu-list-item"><a href="/aboutus">About</a></li>

                                   
                                    <li class="menu-list-item"><a href="/projects">Projects</a></li>

                                   
                                    <li class="menu-list-item"><a href="/contactus">Contact Us</a></li>

                                </ul>
                                
                            </div>
                            <div class="col-12 d-none d-md-block">
                                <div class="alt-font margin-50px-top">
                                    <span class="margin-10px-bottom font-weight-300 text-extra-large d-inline-block">Let's work together?</span>
                                    <h6><a href="mailto:info@domain.com" class="text-gradient-sky-blue-pink  text-decoration-line-bottom text-white-hover">sales@essence.co.tz</a></h6>
                                    <h6><a href="mailto:info@domain.com" class="text-gradient-sky-blue-pink  text-decoration-line-bottom text-white-hover">+255 762 807 848</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
         {props.children}
         <footer class="bg-black padding-10-half-rem-tb md-padding-8-half-rem-tb">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-8 text-center">
                        <div class="social-icon-style-10 margin-3-half-rem-bottom">
                            <ul class="large-icon">
                                <li><a class="facebook text-white" href="#" target="_blank"><i class="fab fa-facebook-f"></i><span></span></a></li>
                                <li><a class="instagram text-white" href="https://www.instagram.com/essence_tz/" target="_blank"><i class="fab fa-instagram"></i><span></span></a></li>
                                <li><a class="twitter text-white" href="https://twitter.com/Essence_tz" target="_blank"><i class="fab fa-twitter"></i><span></span></a></li>
                                <li><a class="linkedin text-white" href="https://www.linkedin.com/company/essence-creative-agency/" target="_blank"><i class="fab fa-linkedin"></i><span></span></a></li>
                                {/* <li><a class="behance text-white" href="http://www.behance.com/" target="_blank"><i class="fab fa-behance"></i><span></span></a></li> */}
                            </ul>
                        </div>
                        <h4 class="alt-font font-weight-300 margin-10px-bottom d-block letter-spacing-minus-2px">Got a project? Contact us today!</h4>
                        <h4 class="alt-font font-weight-600"><a href="mailto:sales@essence.co.tz" class="text-gradient-sky-blue-pink text-decoration-line-bottom">sales@essence.co.tz</a></h4>
                        <h4 class="alt-font font-weight-600 margin-7-rem-bottom"><a href="mailto:sales@essence.co.tz" class="text-gradient-sky-blue-pink text-decoration-line-bottom">+255 762 807 848</a></h4>
                        <p class="alt-font text-small text-uppercase m-0">&copy; {new Date().getFullYear()} Essence creative solutions</p>
                    </div>
                </div>
            </div>
        </footer>
     <a class="scroll-top-arrow" href="javascript:void(0);"><i class="feather icon-feather-arrow-up"></i></a>
    </>
  )
}

export default Layout;