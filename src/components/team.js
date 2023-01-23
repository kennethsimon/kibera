import React, {useState, useEffect} from 'react';
import Layout from '../homelayout/newlayout';
import {useCategories, useProjects} from '../useContentful';
import {Link} from 'react-router-dom';




function Team() {
    const [projects, setProjects] = useState([]);
    const [categories, setCategories] = useState([]);
    const [allcategories, setAllcategories] = useState([]);
	const {getProjects} = useProjects();
    const {getCategories} = useCategories();
	
	useEffect(() => {
        getCategories().then((response) => {
            // console.log(response?.items);
			setCategories(response?.items);
		})
		getProjects().then((response) => {
			setProjects(response?.items);
            setAllcategories(response?.items);
		})
	}, [])

    const onClickcategory = (cat) => {
        if(cat === 'all'){
            setProjects(allcategories);
        }else{
            let filteredcategories = allcategories?.filter(categ => categ?.fields?.categoryName?.fields?.name === cat);
            setProjects(filteredcategories);
        }
    }
  return (
   <Layout>
        <section id="about" class="overlap-height wow animate__fadeIn padding-60px-bottom parallax" data-parallax-background-ratio="0.5" style={{backgroundImage:"url('images/our-story-bg.jpg')"}} >
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-xl-8 col-lg-10 text-center overlap-gap-section">
                        <div class="w-40px h-2px bg-gradient-sky-blue-pink separator-line-vertical margin-30px-tb d-inline-block"></div>
                        <h3 class="alt-font font-weight-500 text-extra-dark-gray letter-spacing-minus-1px">We focus on creative and <span class="text-gradient-sky-blue-pink  font-weight-600">strategically</span> driven <span class="text-gradient-sky-blue-pink  font-weight-600">marketing</span></h3>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-light-gray pt-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center" >
                        <ul style={{minHeight: '200px !important', height: 'auto !important'}} class="portfolio-filter grid-filter nav nav-tabs justify-content-center border-0 text-uppercase font-weight-500 alt-font padding-6-rem-bottom md-padding-4-half-rem-bottom sm-padding-2-rem-bottom ullist">
                            <li onClick={() => onClickcategory('all')} class="nav active"><a data-filter="*" href="#">All</a></li>
                            {Array.isArray(categories) && categories?.map((category) => {
                                return (
                                    <li onClick={() => onClickcategory(category?.fields?.name)} class="nav"><a data-filter={`.${category?.fields?.name?.toLowerCase()}`} href="#">{category?.fields?.name}</a></li>
                                )
                            })}
                           
                        </ul>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12 filter-content">
                        <ul class="portfolio-classic portfolio-wrapper grid grid-loading grid-2col xl-grid-2col lg-grid-2col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large text-center">
                            {/* <li class="grid-sizer"></li> */}
                       
                            {/* <li class="grid-item wow animate__fadeIn">
                                <a href='/projectsinside' class="portfolio-box border-radius-6px box-shadow-large">
                                    <div class="portfolio-image bg-gradient-fast-blue-purple">
                                        <img src="https://lithohtml.themezaa.com/images/portfolio-207.jpg" alt="" />
                                        <div class="portfolio-hover align-items-center justify-content-center d-flex h-100">
                                            <div class="portfolio-icon">
                                                <a href="https://lithohtml.themezaa.com/images/portfolio-207.jpg" data-group="portfolio-items" class="lightbox-group-gallery-item text-slate-blue text-slate-blue-hover rounded-circle bg-white"><i class="fas fa-search icon-very-small" aria-hidden="true"></i></a>
                                                <a href="single-project-page-01.html" class="text-slate-blue text-slate-blue-hover rounded-circle bg-white"><i class="fas fa-link icon-very-small" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="portfolio-caption bg-white padding-30px-tb md-padding-20px-tb">
                                        <a href="single-project-page-01.html"><span class="alt-font text-extra-dark-gray font-weight-500">Magazine Cover</span></a>
                                        <span class="text-medium d-block margin-one-bottom">Photography</span>
                                    </div>
                                </a>
                            </li> */}

                       
                           {Array?.isArray(projects) && projects?.map((project) => {
                               return (
                                <li key={project?.sys?.id} className={`${project?.fields?.categoryName?.fields?.name?.toLowerCase()} grid-item wow animate__fadeIn`}>
                                     <Link to={`/projects/${project?.sys?.id}`}class="portfolio-box border-radius-6px box-shadow-large">
                                <div class="portfolio-box border-radius-6px box-shadow-large">
                                    <div class="portfolio-image bg-gradient-fast-blue-purple">
                                        <img src={project?.fields?.outerbanner?.fields?.file?.url} alt="" />
                                        <div class="portfolio-hover align-items-center justify-content-center d-flex h-100">
                                            <div class="portfolio-icon">
                                                <a href="https://lithohtml.themezaa.com/images/portfolio-207.jpg" data-group="portfolio-items" class="lightbox-group-gallery-item text-slate-blue text-slate-blue-hover rounded-circle bg-white"><i class="fas fa-search icon-very-small" aria-hidden="true"></i></a>
                                                <a href="single-project-page-02.html" class="text-slate-blue text-slate-blue-hover rounded-circle bg-white"><i class="fas fa-link icon-very-small" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="portfolio-caption bg-white padding-30px-tb md-padding-20px-tb">
                                        <a href="single-project-page-02.html"><span class="alt-font text-extra-dark-gray font-weight-500">{project?.fields?.title}</span></a>
                                        <span class="text-medium d-block margin-one-bottom">{project?.fields?.categoryName?.fields?.name}</span>
                                    </div>
                                </div>
                                </Link>
                            </li>
                               )
                           })}

                        </ul>
                    </div>
                </div>
            </div>
        </section>

	    
   </Layout>
  );
}

export default Team;