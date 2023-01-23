import React, {useRef, useState} from 'react';
import Layout from '../homelayout/newlayout';
import emailjs from "@emailjs/browser";
import {Helmet} from 'react-helmet';

function Contactus() {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [privacy, setPrivacy] = useState('');
    const [fullname, setFullname] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        if(phone && email && message, privacy, fullname){
            setLoading(true);
        console.log(form.current);
        emailjs.sendForm("service_jok4m1t", "template_jv7wg6m", form.current, "3cANUsQN9yP5N0Log").then(
          (result) => {
              setLoading(false);
            alert("Message Sent Successfully");
          },
          (error) => {
              setLoading(false);
            console.log(error.text);
          }
        );
        }else{
            return null
        }
      };

  return (
   <Layout  page='contactus'>
       <Helmet>
        <title>Contact Us | Essence Creative Solutions</title>
      </Helmet>
        <section class="parallax" data-parallax-background-ratio="0.5" style={{backgroundImage:"url('https://res.cloudinary.com/dedfrilse/image/upload/v1652356397/Connect-with-us-today.jpg')"}}>
            <div class="opacity-medium bg-gradient-fast-blue-purple"></div>
            <div class="container">
                <div class="row align-items-stretch justify-content-center extra-small-screen">
                    <div class="col-12 position-relative page-title-large text-center d-flex align-items-center justify-content-center flex-column">
                        <span class="d-block text-white opacity-6 alt-font margin-5px-bottom xs-line-height-20px">Tell us your marketing needs!</span>
                        <h1 class="alt-font text-white font-weight-500 no-margin-bottom">Connect with us today</h1>
                    </div>
                </div>
            </div>
        </section>
    
  
        <section class="wow animate__fadeIn">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10">
                        <div class="row justify-content-center">
                            <div class="col-12 col-xl-6 col-lg-7 text-center margin-4-half-rem-bottom md-margin-3-rem-bottom">
                                <span class="alt-font letter-spacing-minus-1-half text-extra-medium d-block margin-5px-bottom">Fill out the form and we’ll be in touch soon!</span>
                                <h4 class="alt-font font-weight-600 text-extra-dark-gray">How we can help you?</h4>
                            </div>
                            <div class="col-12">                     
                                <form ref={form} onSubmit={sendEmail}>
                                    <div class="row row-cols-1 row-cols-md-2">
                                        <div class="col margin-4-rem-bottom sm-margin-25px-bottom">
                                            <input value={fullname} onChange={(e) => setFullname(e.target.value)} class="medium-input bg-white margin-25px-bottom required" type="text" name="full_name" placeholder="Your name"/>
                                            <input value={email} onChange={(e) => setEmail(e.target.value)} class="medium-input bg-white margin-25px-bottom required" type="email" name="email" placeholder="Your email address"/>
                                            <input value={phone} onChange={(e) => setPhone(e.target.value)} class="medium-input bg-white" mb-0type="tel" name="phone_number" placeholder="Your mobile"/>
                                        </div>
                                        <div class="col margin-4-rem-bottom sm-margin-10px-bottom">
                                            <textarea value={message} onChange={(e) => setMessage(e.target.value)} class="medium-textarea h-200px bg-white" name="message" placeholder="Your message"></textarea>
                                        </div>
                                        <div class="col text-start sm-margin-30px-bottom">
                                            <input value={privacy} checked={privacy} onChange={() => setPrivacy(!privacy)} type="checkbox" name="terms_condition" id="terms_condition" class="terms-condition d-inline-block align-top w-auto mb-0 margin-5px-top margin-10px-right"/>
                                            <label for="terms_condition" class="text-small d-inline-block align-top w-85">I accept the terms & conditions and I understand that my data will be hold securely in accordance with the <a href="/" target="_blank" class="text-decoration-underline text-extra-dark-gray">privacy policy</a>.</label>
                                        </div>
                                        <div class="col text-center text-md-end">
                                            {/* <input type="hidden" name="redirect" value=""/> */}
                                            <button onClick={sendEmail} class="btn btn-medium btn-gradient-light-purple-light-orange mb-0 submit" type="submit">{loading ? 'submitting' : 'Send Message'}</button>
                                        </div>
                                    </div>
                                    <div class="form-results d-none"></div>
                                </form>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
        <section class="bg-extra-dark-gray fancy-box-background big-section cover-background" style={{backgroundImage: "url('https://res.cloudinary.com/dedfrilse/image/upload/v1652356408/Call-us-or-Email.jpg')"}}>
        <div class="opacity-medium bg-gradient-fast-blue-purple"></div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-7 col-md-9 text-center margin-5-half-rem-bottom sm-margin-3-half-rem-bottom">
                        <span class="alt-font text-extra-medium text-white opacity-8 margin-10px-bottom d-block">You can reach us via these channels</span>
                        <h4 class="alt-font text-white font-weight-600">Call us or Email us for partnership</h4>
                    </div>
                </div>
                <div class="row align-items-center justify-content-center">
                  
                    <div class="col-12 col-lg-4 col-md-6 col-sm-8 fancy-box-item md-margin-30px-bottom xs-margin-15px-bottom">
                        <div class="bg-banner-image cover-background" style={{backgroundImage: "url('https://res.cloudinary.com/dedfrilse/image/upload/v1652356408/Call-us-or-Email.jpg')"}}><div class="opacity-medium bg-gradient-sky-blue-pink"></div></div>
                        <div class="feature-box feature-box-left-icon-middle feature-box-dark-hover padding-4-rem-lr padding-3-rem-tb bg-white border-radius-5px overflow-hidden lg-padding-3-rem-lr">
                            <div class="feature-box-icon margin-15px-right">
                                {/* <img src="images/contact-us-img-flag-01.png" class="w-35px d-block" alt="contact us img flag-01" /> */}
                            </div>
                            <div class="feature-box-content">
                                <span class="alt-font d-block font-weight-500 text-extra-dark-gray">Office Address</span>
                            </div>
                            <div class="bg-medium-gray margin-20px-tb w-100 h-1px"></div>
                            <p class="margin-10px-bottom w-85 lg-w-100 sm-w-75 xs-w-85">Derm Plaza, 11th Floor New Bagamoyo Road, <br/>Makumbusho,<br/> Dar es salaam, Tanzania</p>
                            <div class="feature-box-overlay bg-extra-dark-gray"></div>
                        </div>
                    </div>
                  
                    <div class="col-12 col-lg-4 col-md-6 col-sm-8 fancy-box-item md-margin-30px-bottom xs-margin-15px-bottom">
                        <div class="bg-banner-image cover-background" style={{backgroundImage: "url(https://res.cloudinary.com/dedfrilse/image/upload/v1652356408/Call-us-or-Email.jpg)"}}><div class="opacity-medium bg-gradient-sky-blue-pink"></div></div>
                        <div class="feature-box feature-box-left-icon-middle feature-box-dark-hover padding-4-rem-lr padding-3-rem-tb bg-white border-radius-5px overflow-hidden lg-padding-3-rem-lr">
                            <div class="feature-box-icon margin-15px-right">
                                {/* <img src="images/contact-us-img-flag-02.png" class="w-35px d-block" alt="contact us img flag-02" /> */}
                            </div>
                            <div class="feature-box-content">
                                <span class="alt-font d-block font-weight-500 text-extra-dark-gray">Sales Team</span>
                            </div>
                            <div class="bg-medium-gray margin-20px-tb w-100 h-1px"></div>
                            <p class="margin-10px-bottom w-85 lg-w-100 sm-w-75 xs-w-85">If you have a project,
contact our sales team through:</p>
                            <span class="d-block font-weight-500 margin-10px-top text-extra-dark-gray line-height-20px w-100">Phone: +255 762 807 848 </span>
                            <a href="mailto:info@yourdomain.com" class="text-fast-blue text-decoration-underline">Email: sales@essence.co.tz</a>
                            <div class="feature-box-overlay bg-extra-dark-gray"></div>
                        </div>
                    </div>
                  
                    <div class="col-12 col-lg-4 col-md-6 col-sm-8 fancy-box-item">
                        <div class="bg-banner-image cover-background" style={{backgroundImage: "url(https://res.cloudinary.com/dedfrilse/image/upload/v1652356408/Call-us-or-Email.jpg)"}}><div class="opacity-medium bg-gradient-sky-blue-pink"></div></div>
                        <div class="feature-box feature-box-left-icon-middle feature-box-dark-hover padding-4-rem-lr padding-3-rem-tb bg-white border-radius-5px overflow-hidden lg-padding-3-rem-lr">
                            <div class="feature-box-icon margin-15px-right">
                                {/* <img src="images/contact-us-img-flag-03.png" class="w-35px d-block" alt="contact us img flag-03" /> */}
                            </div>
                            <div class="feature-box-content">
                                <span class="alt-font d-block font-weight-500 text-extra-dark-gray">Customer Support</span>
                            </div>
                            <div class="bg-medium-gray margin-20px-tb w-100 h-1px"></div>
                            <p class="margin-10px-bottom w-85 lg-w-100 sm-w-75 xs-w-85">For general enquiries, contact us through:</p>
                            <span class="d-block font-weight-500 margin-10px-top text-extra-dark-gray line-height-20px w-100"> Phone: +255 762 807 848</span>
                            <a href="mailto:info@yourdomain.com" class="text-fast-blue text-decoration-underline">Email: info@essence.co.tz</a>
                            <div class="feature-box-overlay bg-extra-dark-gray"></div>
                        </div>
                    </div>
                  
                </div>
            </div>
        </section>
      
        {/* <section class="padding-100px-tb md-padding-75px-tb sm-padding-50px-tb wow animate__fadeIn">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-12 col-xl-3 col-lg-4 col-md-5 col-sm-6 text-center text-sm-end xs-margin-20px-bottom">
                        <span class="alt-font font-weight-500 text-extra-large text-extra-dark-gray d-block letter-spacing-minus-1-half">Connect with social media</span>
                    </div>
                    <div class="col-12 col-md-2 d-none d-md-block">
                        <span class="w-100 h-1px d-block bg-medium-gray"></span>
                    </div>
                    <div class="col-12 col-xl-3 col-lg-4 col-md-5 col-sm-6 social-icon-style-02 text-center text-sm-start">
                        <ul class="small-icon">
                            <li><a class="facebook text-extra-dark-gray text-sm-start" href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a class="twitter text-extra-dark-gray text-sm-start" href="http://www.twitter.com" target="_blank"><i class="fab fa-twitter"></i></a></li>
                            <li><a class="instagram text-extra-dark-gray text-sm-start" href="http://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a></li>
                            <li><a class="linkedin text-extra-dark-gray text-sm-start" href="http://www.linkedin.com" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </section> */}
   </Layout>
  );
}

export default Contactus;