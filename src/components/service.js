import React from 'react';
import Layout from '../homelayout';


const Services = () => {

    const servicesarr = [
        'GPS/GNSS positioning survey services',
        'Aerial surveys',
        'Topographical survey services.',
 'Cadastral survey services.',
 'Engineering/Setting out survey services.',
 'Hydrographical Survey Services.',
'Mining Survey Services.',
 'Geophysical Survey Services',
 'Monitoring Survey.',
 'Geographical Information System, GIS services',
 'Remote Sensing Services',
 'Research and Statistical Analysis Services',
 'Interpretation and Processing of Satellite Images',
 'Supply of Land Surveying Equipment’s',
 'Renting of land surveying equipments',
 'Properties mobile mapping and GIS Solutions.',
 'Creation & Generation of profiles files from Alignment using Autocad Civil 3D.',
 'Utility corridor surveys and Data creation and migration to Target Geodatabase system.',
 'GIS Data Base Creation and Migration from different sources like survey data or any other format.',
 'Map plotting and printing services.',
    ]
    return (
        <Layout>
    <div class="rts-bread-crumb-area ptb--150 ptb_sm--100 bg-breadcrumb bg_image">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                  
                    <div class="breadcrumb-inner text-center">
                        <h1 class="title">Our Services</h1>
                        <div class="meta">
                            <a href="/" class="prev">Home /</a>
                            <a href="/services" class="next">Our Services</a>
                        </div>
                    </div>
               
                </div>
            </div>
        </div>
    </div>
  
    <div class="rts-offer-provide-section rts-section-gap">
        <div class="container">
            <div class="row g-24">
                {servicesarr?.map((serv) => {
                    return (
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                
                    <div class="rts-single-offer">
                        <a href="service-details.html" class="thumbnail">
                            <img src="assets/images/service/07.jpg" alt="service"/>
                        </a>
                        <div class="content-wrapper">
                            <a href="service-details.html">
                                <h5 class="title">
                                    {serv}
                                </h5>
                            </a>
                            <p class="disc">
                                Dui lobortis scelerisque magna curabitur duis purus platea massa accumsan
                            </p>
                            <a href="service-details.html" class="rts-btn btn-transparent-service">View Service<i class="fa-light fa-arrow-right"></i></a>
                        </div>
                    </div>
      
                </div>
                    )
                })}
            </div>
        </div>
    </div>
  
    <div class="rts-accordion-area service rts-section-gapBottom">
        <div class="accordion-service-bg bg_image ptb--120 ptb_md--80 ptb_sm--60">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6">
                        <div class="accordion-service-inner">
                            <div class="title-area-start" data-sal="slide-up" data-sal-delay="150" data-sal-duration="900">
                                <span class="sub color-primary">JUST A CONSULTANCY</span>
                                <h2 class="title">We know how to manage
                                    business globally</h2>
                            </div>
                            <div class="accordion-area">
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Making Easy Business Growth
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                Neque parturient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nec quam convallis ornare justo
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingTwo">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Business Solution Model
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                Neque parturient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nec quam convallis ornare justo
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingThree">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Finbiz Company Solution
                                            </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                Neque parturient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nec quam convallis ornare justo
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingFour">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                Management Process
                                            </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                Neque parturient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nec quam convallis ornare justo
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingFive">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                Managing Invesment
                                            </button>
                                        </h2>
                                        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                Neque parturient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nec quam convallis ornare justo
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 
        </Layout>

    )
}


export default Services;