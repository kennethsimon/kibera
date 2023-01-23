import React, {useEffect, useState} from 'react';
// import $ from 'jquery';
// window.jQuery = $;

function Layout(props) {
let $ = window?.jQuery;
let Swiper = window?.Swiper;
let WOW = window?.WOW;


var menuBreakPoint  = 991;
var sliderBreakPoint= 991; // It will effect when you have used attribute "data-thumb-slider-md-direction" OR "data-slider-md-direction"
var mobileAnimation = false;
    
/****** Don't change variables value ******/
var lastScroll      = 0,
    simpleDropdown  = 0,
    linkDropdown    = 0,
    isotopeObjs     = [],
    swiperObjs      = [],
    wow             = '';

/****** Check for browser OS ******/
var isMobile    = false,
    isiPhoneiPad= false,
    isSafari   = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isMobile = true;
}

if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    isiPhoneiPad = true;
}

function getWindowWidth() {
    return $( window ).width();
}

/****** Get window height ******/
function getWindowHeight() {
    return $( window ).height();
}


/****** Check formatted number ******/
function pad( d ) {
    return ( d < 10 ) ? '0' + d.toString() : d.toString();
}

 /****** Setup swiper slider ******/
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
                        $( '.swiper-pagination-current' ).html(pad( this.realIndex + 1, 2 ) );
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

// setupSwiper();
// destroySwiperLoop()

  useEffect(() => {
    $("#revolution-slider")?.revolution({
       sliderType: "standard",
       delay: 7500,
       navigation: {
           arrows: { enable: true }
       },
       spinner: "off",
       gridwidth: 1170,
       gridheight: 700,
       disableProgressBar: "on",
       responsiveLevels:[1920,1229,991,480],
       gridwidth:[1170,970,750,450],
       gridheight:[700,700,700,700]
   });
   //Images Carousel
   $('.image-carousel').each( function () {
    var $s1, $s2, $s3;
    var $show   = $s1 = $s2 = $(this).data('show');
    var $arr    = $(this).data('arrow');
    var $dots   = !$arr;
    if($(this).hasClass('partner-slider')){
        $dots    = false;
    }
    if( 4 > $show > 2 ) { $s1 = $s2 = $show - 1; }
    if( $show > 3 ) { $s1 = $show - 1; $s2 = $show - 2; $s3 = $show - 3; }

    $(this).slick({
        infinite: true,
        slidesToShow: $show,
        slidesToScroll: 1,
        arrows: $arr,
        prevArrow: '<button type="button" class="prev-nav"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="next-nav"><i class="fa fa-angle-right"></i></button>',
        autoplay: true,
        autoplaySpeed: 7000,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: $s1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: $arr,
                    dots: $dots
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: $s2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: $arr,
                    dots: $dots
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: $s2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                }
            }
        ]
    });
});

//Latest News
$('.news-slider').each( function () {
    var $show = $(this).data('show');
    var $dot  = $(this).data('dot');
    var $auto = $(this).data('auto');
    var $m_show = $show;
    if( $show >= 3 ) $m_show = $show - 1;
    $(this).slick({
        infinite: false,
        slidesToShow: $show,
        slidesToScroll: 1,
        arrows: false,
        dots: $dot,
        autoplay: $auto,
        autoplaySpeed: 6000,
        prevArrow: '<button type="button" class="prev-nav"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="next-nav"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: $m_show,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: $m_show - 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
});

//Project Slider 2
$('.project-list-2').each( function () {
    var $show = $(this).data('show');
    var $dot  = $(this).data('dot');
    var $auto = $(this).data('auto');
    $(this).find('.project-slider-2').slick({
        centerMode: true,
        centerPadding: '350px',
        slidesToShow: $show,
        slidesToScroll: 1,
        arrows: false,
        dots: $dot,
        autoplay: $auto,
        autoplaySpeed: 6000,
        prevArrow: '<button type="button" class="prev-nav"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="next-nav"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '50px',
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.btn-left').on("click", function(){
      $(this).parents('.project-list-2').find('.project-slider-2').slick('slickPrev');
    });

    $('.btn-right').on("click", function(){
      $(this).parents('.project-list-2').find('.project-slider-2').slick('slickNext');
    });

});

//Testimonial Slider
$('.testi-slider').each( function () {
    var $show   = $(this).data('show');
    var $arr    = $(this).data('arrow');
    var $dots   = !$arr;
    var $m_show = $show;
    if( $show == 3 ) $m_show = $show - 1;
    $(this).slick({
        slidesToShow: $show,
        slidesToScroll: 1,
        arrows: $arr,
        autoplay: true,
        autoplaySpeed: 6000,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="prev-nav"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="next-nav"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: $m_show,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: $arr,
                    dots: $dots
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
});    

//Testimonial Slider Style 3
$('.testi-with-nav').each( function () {
    $(this).find('.testi-slider-2').slick({
        swipe: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testi-nav',
        arrows: false,
        autoplay: false,
        adaptiveHeight: true,
    });
    $(this).find('.testi-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.testi-slider-2',
        autoplay: false,
        focusOnSelect: true
    });
});

//Team Slider
$('.team-slider').each( function () {
    var $show   = $(this).data('show');
    var $arr    = $(this).data('arrow');
    var $m_show = $show;
    if( $show == 4 ) $m_show = $show - 1;
    $(this).slick({
        infinite: false,
        slidesToShow: $show,
        slidesToScroll: 1,
        arrows: $arr,
        prevArrow: '<button type="button" class="prev-nav"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="next-nav"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1229,
                settings: {
                    slidesToShow: $m_show,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
});

//Project Slider
$('.project-slider').each( function () {
    var $show = $(this).data('show');
    var $arr  = $(this).data('arrow');
    var $dot  = $(this).data('dot');
    var $auto = $(this).data('auto');
    $(this).slick({
        infinite: false,
        slidesToShow: $show,
        slidesToScroll: 1,
        arrows: $arr,
        dots: $dot,
        autoplay: $auto,
        autoplaySpeed: 6000,
        prevArrow: '<button type="button" class="prev-nav"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="next-nav"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
});

$( '.image-back-offset-shadow, .vertical-counter, .counter, .progress-bar, .pie-chart-style-01, .pie-chart-style-02' ).each( function() {
        $( this ).appear().trigger( 'resize' );
    });
         
        /******* Side menu close on outside area *******/
        $( document ).on( 'touchstart click', '.show-menu', function (e) {
            if( ! ( $( e.target ).hasClass( 'push-button' ) || $( e.target ).closest( '.push-button' ).length || $( e.target ).closest( '.push-menu' ).length || $( e.target ).closest( '.hamburger-menu' ).length ) ) {
                $( '.close-menu' ).trigger( 'click' );
            }
        });
    
        /******* Side menu open *******/
        $( document ).on( 'click', '.side-menu-button', function () {
            $( 'body' ).toggleClass( 'show-menu' );
            // For Left Classic menu in Mobile
            if ( ( $( '.left-sidebar-wrapper' ).length > 0 ) && getWindowWidth() <= menuBreakPoint ) {
                $( 'body' ).toggleClass( 'left-classic-mobile-menu' );
            }
            $( '.sub-menu-item').collapse( 'hide' );
            $( '.menu-list-item.open' ).removeClass( 'show' );
        });

           /****** Wow animation ******/
    if( $( '.wow' ).length > 0 ) {
        wow = new WOW({
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
     /****** Page loader ******/
     if( $( '.page-loader' ).length > 0 ) {
         $( '.page-loader' ).fadeOut();
     }

     /****** Reset swiper loop ******/
     resetSwiperLoop();

   }, [])

   useEffect(() => {
    $( "#mmenu_toggle" ).on('click', function() {
		$(this).toggleClass( "active" );

		if ($(this).hasClass( "active" )) {
			$('.mobile_nav').stop(true, true).slideDown();
		}else{
			$('.mobile_nav').stop(true, true).slideUp();
		}		
	});
   }, [])


  return (
    <div id="page" class="site">
<header id="site-header" class="site-header mobile-header-blue header-style-1">
            <div id="header_topbar" class="header-topbar md-hidden sm-hidden clearfix">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <ul class="social-list fleft">
                                <li><a href="#" target="_blank"><i class="fa fa-twitter"></i></a>
                                </li>
                                <li><a href="#" target="_blank"><i class="fa fa-facebook"></i></a>
                                </li>
                                <li><a href="#" target="_blank"><i class="fa fa-linkedin"></i></a>
                                </li>
                                <li><a href="#" target="_blank"><i class="fa fa-rss"></i></a>
                                </li>
                            </ul>
                            <div class="topbar-text fright"> Opening Hours : Monday to Saturday - 8am to 9pm</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="main-header md-hidden sm-hidden">
                <div class="main-header-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="col-wrap-table">
                                    <div id="site-logo" class="site-logo col-media-left col-media-middle">
                                        <a href="/">
                                            <img class="logo-static" style={{height: "80px" }} src="images/gwen.png" alt="Consultax"/>
                                            <img class="logo-scroll" src="images/logo-white.svg" alt="Consultax"/>
                                        </a>
                                    </div>
                                    <div class="col-media-body col-media-middle">
                                        <ul class="info-list info_on_right_side fright">
                                            <li>
                                                <span>Address: <strong>Mererani Street, Masaki <br/>Dar es salaam, Tanzania</strong></span> </li>
                                            <li>
                                                <span>Call Us: <strong class="font-size18">+255 222 602 330</strong></span> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-header-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="header-mainnav">

                                    {/* <div class="search-cart-box fright">
                                        <div class="h-cart-btn fright"><a href="#"><i class="fa fa-shopping-cart" aria-hidden="true"></i></a></div>

                                        <div class="toggle_search fright"><i class="fa fa-search" aria-hidden="true"></i></div>
                                        <div class="h-search-form-field">
                                            <form role="search" method="get" id="search-form" class="search-form" action="#">
                                                <input type="search" class="search-field" placeholder="Enter keyword..." value="" name="s"/>
                                                <button type="submit" class="search-submit"><i class="fa fa-search"></i></button>
                                            </form>
                                        </div>

                                    </div> */}
                                    <div id="site-navigation" class="main-navigation fleft">
                                        <ul id="primary-menu" class="menu">
                                            <li><a href="/">Home</a>
                                            </li>
                                            <li class="menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1731"><a href="/aboutus">About Us</a>
                                                <ul class="sub-menu">
                                                    <li class="menu-item-1738"><a href="/aboutus">About Us</a></li>
                                                    <li class="menu-item-1745"><a href="/team">Our Team</a></li>
                                                    {/* <li class="menu-item-1742"><a href="how-it-work.html">How It Work</a></li>
                                                    <li class="menu-item-1746"><a href="testimonials.html">Testimonials</a></li>
                                                    <li class="menu-item-1757"><a href="services.html">Services Box</a></li>
                                                    <li class="menu-item-1744"><a href="services-icon.html">Icon Box</a></li>
                                                    <li class="menu-item-1740"><a href="career.html">Career</a></li> */}
                                                </ul>
                                            </li>
                                            <li><a href="/insurance">Insurance</a></li>
                                            <li><a href="/services">Services</a>
                                            </li>
                                            <li><a href="/projects">Our Projects</a>
                                            </li>
                                            <li><a href="/news">News & Updates</a>
                                            </li>
                                            {/* <li class="menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1789"><a href="services.html">Services</a>
                                                <ul class="sub-menu">
                                                    <li class="menu-item-1791"><a href="service-detail.html">Financial Consulting</a></li>
                                                    <li class="menu-item-1758"><a href="service-detail.html">International Business</a></li>
                                                    <li class="menu-item-1790"><a href="service-detail.html">Audit &amp; Assurance</a></li>
                                                    <li class="menu-item-1760"><a href="service-detail.html">Taxes and Efficiency</a></li>
                                                    <li class="menu-item-1761"><a href="service-detail.html">Bonds &amp; Commodities</a></li>
                                                </ul>
                                            </li> */}
                                            {/* <li class="menu-item-has-children"><a href="projects.html">Cases Study</a>
                                                <ul class="sub-menu">
                                                    <li><a href="projects.html">Cases Study 2 Columns</a></li>
                                                    <li><a href="projects-2.html">Cases Study 3 Columns</a></li>
                                                    
                                                    <li><a href="project-detail.html">Cases Study Details</a></li>
                                                </ul>
                                            </li> */}
                                            {/* <li class="menu-item-has-children"><a href="blog.html">Blog</a>
                                                <ul class="sub-menu">
                                                    <li><a href="blog.html">Blog List</a></li>
                                                    <li><a href="post.html">Blog Details</a></li>
                                                </ul>
                                            </li> */}
                                            <li><a href="/contactus">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="header_mobile">
                <div class="mlogo_wrapper clearfix">
                    <div class="mobile_logo">
                        <a href="#"><img src="images/logowhite.png" style={{width: 150}} alt="Consultax"/></a>
                    </div>
                    <div id="mmenu_toggle">
                        <button></button>
                    </div>
                </div>
                <div class="mmenu_wrapper">
                    <div class="mobile_nav collapse">
                        <ul id="menu-main-menu" class="mobile_mainmenu">
                            <li class="current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children"><a href="/">Home</a>
                            </li>
                            <li class="menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1731"><a href="/aboutus">About Us</a>
                            </li>
                            <li class="menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1731"><a href="/team">Team</a>
                            </li>
                            <li class="menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1789"><a href="/insurance">Insurance</a>
                            </li>
                            <li class="menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1789"><a href="/services">Services</a>
                            </li>
                            <li class="menu-item-has-children"><a href="/projects">Our Projects</a>
                            </li>
                            <li class="menu-item-has-children"><a href="/news">News & Updates</a>
                            </li>
                            <li><a href="/contactus">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
    </header>
    {props.children}
    <footer id="site-footer" class="site-footer bg-second">
        <div class="main-footer">
            <div class="container">
                <div class="row">

                    <div class="col-md-3 col-sm-6">
                        <div id="media_image-1" class="widget widget_media_image">
                            <a href="index.html"><img style={{height: "80px" }} src="images/logowhite.png" alt=""/></a>
                        </div>
                        <div id="custom_html-1" class="widget_text widget widget_custom_html">
                            <div class="textwidget custom-html-widget">
                                <p>Sorem ipsum dolor sit amet consectetur adipiscing elit dapibus non apte magna ad suspendisse nec pulvi.</p>

                                <p>
                                    <a href="about.html" class="pagelink gray">About us</a>
                                </p>
                                <div class="ot-socials bg-white">
                                    <a target="_blank" href="#" rel="noopener noreferrer"><i class="fa fa-facebook"></i></a>
                                    <a target="_blank" href="#" rel="noopener noreferrer"><i class="fa fa-twitter"></i></a>
                                    <a target="_blank" href="#" rel="noopener noreferrer"><i class="fa fa-pinterest-p"></i></a>
                                    <a target="_blank" href="#" rel="noopener noreferrer"><i class="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-6">
                        <section id="custom_html-2" class="widget_text widget widget_custom_html padding-left">
                            <h4 class="widget-title">Insurance</h4>
                            <div class="textwidget custom-html-widget">
                                <ul class="padd-left">
                                    <li><a href="service-detail.html">Audit &amp; Assurance</a></li>
                                    <li><a href="service-detail.html">Bonds &amp; Commodities</a></li>
                                    <li><a href="service-detail.html">Financial Consulting</a></li>
                                    <li><a href="service-detail.html">Trades &amp; Stocks</a></li>
                                    <li><a href="service-detail.html">Financial Projections</a></li>
                                    <li><a href="service-detail.html">Strategic Planning</a></li>
                                </ul>
                            </div>
                        </section>
                    </div>

                    <div class="col-md-3 col-sm-6">
                        <section id="custom_html-3" class="widget_text widget widget_custom_html padding-left">
                            <h4 class="widget-title">Company</h4>
                            <div class="textwidget custom-html-widget">
                                <ul class="padd-left">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/insurance">Insurance</a></li>
                                    <li><a href="/services">Services</a></li>
                                    <li><a href="/news">News & Updates</a></li>
                                    <li><a href="/contactus">Contact</a></li>
                                </ul>
                            </div>
                        </section>
                    </div>

                    <div class="col-md-3 col-sm-6">
                        <section id="custom_html-3" class="widget_text widget widget_custom_html padding-left">
                            <h4 class="widget-title">Get in Touch</h4>
                            <div class="textwidget custom-html-widget">
                                <ul class="padd-left">
                                    <li>Block1085, Masaki-Mererani Street</li>
                                    <li>Dar es salaam, Tanzania</li>
                                    <li>+255 763 513 930</li>
                                    <li>info@do-wide.co.tz</li>
                                </ul>
                            </div>
                        </section>
                    </div>

                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-md-12" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div class="footer-copyright">
                        ©️ 2022 Gwen Consultancy Limited | Designed by: 
 <a target="_blank" href="https://essence.co.tz/" rel="noreferrer">Essence Creative</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a id="back-to-top" href="#" class="show"></a>
    </footer>
  </div>
  )
}

export default Layout;