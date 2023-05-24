import React from 'react';
import Layout from '../homelayout';


const Contact = () => {

    return (
        <Layout>
    <div class="rts-bread-crumb-area ptb--150 ptb_sm--100 bg-breadcrumb bg_image">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                 
                    <div class="breadcrumb-inner text-center">
                        <h1 class="title">Contact Us</h1>
                        <div class="meta">
                            <a href="/" class="prev">Home /</a>
                            <a href="/contactus" class="next">Contact Us</a>
                        </div>
                    </div>
              
                </div>
            </div>
        </div>
    </div>
    
    <div class="rts-contact-area-m rts-section-gap">
        <div class="container">
            <div class="row g-24">
              
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div class="single-contact-one-inner">
                        <div class="thumbnail">
                            <img src="assets/images/contact/01.jpg" alt=""/>
                        </div>
                        <div class="content">
                            <div class="icone">
                                <img src="assets/images/contact/shape/01.svg" alt=""/>
                            </div>
                            <div class="info">
                                <span>Call Us 24/7</span>
                                <a href="tel:+255652178731">
                                    <h5>+255 652 178 731</h5>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
              
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div class="single-contact-one-inner">
                        <div class="thumbnail">
                            <img src="assets/images/contact/02.jpg" alt=""/>
                        </div>
                        <div class="content">
                            <div class="icone">
                                <img src="assets/images/contact/shape/02.svg" alt=""/>
                            </div>
                            <div class="info">
                                <span>MAke A Quote</span>
                                <a href="mailto:info@kibera.co.tz">
                                    <h5>info@kibera.co.tz</h5>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div class="single-contact-one-inner">
                        <div class="thumbnail">
                            <img src="assets/images/contact/03.jpg" alt=""/>
                        </div>
                        <div class="content">
                            <div class="icone">
                                <img src="assets/images/contact/shape/03.svg" alt=""/>
                            </div>
                            <div class="info">
                                <span>Service Station</span>
                                <a href="#">
                                    <h5>P.O.Box 60431, Plot No. 51, Block No. 47 Kijitonyama Dar es Salaam</h5>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>



 
    <div class="rts-contact-page-form-area rts-section-gapBottom">
        <div class="container">
            <div class="row">
                <div class="mian-wrapper-form">
                    <div class="title-mid-wrapper-home-two" data-sal="slide-up" data-sal-delay="150" data-sal-duration="800">
                        <span class="pre">Get In Touch</span>
                        <h2 class="title">Needs Help? Let’s Get in Touch</h2>
                    </div>
                    <div id="form-messages"></div>
                    <form id="contact-form" class="contact-form-contact" action="mailer.php" method="post">
                        <div class="name-email">
                            <input type="text" name="name" placeholder="Your Name" required=""/>
                            <input type="email" name="email" placeholder="Email Address" required=""/>
                        </div>
                        <input type="text" name="subject" placeholder="Your Subject"/>
                        <textarea placeholder="Type Your Message" name="message"></textarea>
                        <button type="submit" class="rts-btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
        </Layout>

    )
}


export default Contact;