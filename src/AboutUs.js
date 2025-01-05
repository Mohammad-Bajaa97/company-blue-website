import React from "react";
import './AboutUs.css'
import { Suspense } from "react";
import { getTranslation } from "./i18n";

import CompanyLogo from './images/logo-transparent.png';
import CompanyPhoto1 from './images/programmer.webp';
import CompanyPhoto2 from './images/working-table.webp';
import CompanyPhoto3 from './images/flexible.webp';
import CompanyPhoto4 from './images/company1.jpg'

import ExternalLink from './icons/external-link.png'
import GoToTop from "./GoToTop";
import Loading from "./Loading";
import { Link } from "react-router-dom";





function AboutUs(props){
    

    return(
        <>
                <div className={props.darkMode? "aboutus-container aboutus-graydark-background" : "aboutus-container background-aboutus"}>
                <div className={props.language==='ar' ? "aboutus-posts bidi-text" : "aboutus-posts"}>
                    <div className={props.darkMode? "aboutus-post aboutus-dark-post" : "aboutus-post aboutus-light-post"}
                    >
                        <div className="aboutus-post-section">
                            <h2 className={props.darkMode? "aboutus-post-section-h2 white" : "aboutus-post-section-h2 black"}> 
                                {getTranslation(props.language).about_us.post_1.title}
                            </h2>
                            <p className={props.darkMode? "aboutus-post-section-h2 white" : "aboutus-post-section-p black"}>
                                {getTranslation(props.language).about_us.post_1.subtitle}
                            </p>
                        </div>
                        <Suspense fallback={<Loading />}>
                            <div className="aboutus-post-section aboutus-image-container">
                                <img alt=""  className="aboutus-img" src={CompanyLogo} id='aboutus-company-logo' loading="lazy"/>
                            </div> 
                        </Suspense>
                    </div>
                    <div className={props.darkMode? "aboutus-post aboutus-dark-post" : "aboutus-post aboutus-light-post"}>                        
                        <div className="aboutus-post-section">
                            <h2 className={props.darkMode? "aboutus-post-section-h2 white" : "aboutus-post-section-h2 black"}>
                                {getTranslation(props.language).about_us.post_2.title}
                            </h2>
                            <p className={props.darkMode? "aboutus-post-section-h2 white" : "aboutus-post-section-p black"}>
                                {getTranslation(props.language).about_us.post_2.subtitle}
                            </p>
                        <h2 style={{marginTop: '1.5rem'}} className={props.darkMode? "aboutus-post-section-h2 white" : "aboutus-post-section-h2 black"}>
                            {getTranslation(props.language).about_us.post_3.title}
                        </h2>
                        <p className={props.darkMode? "aboutus-post-section-h2 white" : "aboutus-post-section-p black"}>
                            {getTranslation(props.language).about_us.post_3.subtitle}
                        </p>
                        </div>
                        <div className="aboutus-post-section aboutus-image-container">
                            <img alt=""  className="aboutus-img" src={CompanyPhoto1} style={{width: '400px', height: '380px',margin:'auto'}} loading="lazy"/>
                        </div>
                    </div>
                    <div className={props.darkMode? "aboutus-post aboutus-dark-post" : "aboutus-post aboutus-light-post"}> 
                        <div className="aboutus-post-section">
                            <h2 className={props.darkMode? "aboutus-post-section-h2 white" : "aboutus-post-section-h2 black"}> 
                                {getTranslation(props.language).about_us.post_4.title}
                            </h2>
                                <p className={props.darkMode? "aboutus-post-section-h2 white" : "aboutus-post-section-p black"}>
                                    <span><b>{getTranslation(props.language).about_us.post_4.subtitle_1}</b></span>
                                    <span>{getTranslation(props.language).about_us.post_4.description_1}</span>                  
                                </p>
                                <p className={props.darkMode? "aboutus-post-section-h2 white" : "aboutus-post-section-p black"}>
                                    <span><b>{getTranslation(props.language).about_us.post_4.subtitle_2}</b></span>
                                    <span>{getTranslation(props.language).about_us.post_4.description_2}</span>                  
                                </p>
                                <p className={props.darkMode? "aboutus-post-section-h2 white" : "aboutus-post-section-p black"}>
                                    <span><b>{getTranslation(props.language).about_us.post_4.subtitle_3}</b></span>
                                    <span>{getTranslation(props.language).about_us.post_4.description_3}</span>                  
                                </p>
                                <p className={props.darkMode? "aboutus-post-section-h2 white" : "aboutus-post-section-p black"}>
                                    <span><b>{getTranslation(props.language).about_us.post_4.subtitle_4}</b></span>
                                    <span>{getTranslation(props.language).about_us.post_4.description_4}</span>                  
                                </p>
                        </div>
                        <div className="aboutus-post-section aboutus-image-container">
                            <img alt=""  className="aboutus-img" src={CompanyPhoto2} style={{width: '400px', height: '380px',margin:'auto'}} loading="lazy"/>
                        </div>
                    </div>
                    <div className={props.darkMode? "aboutus-post aboutus-dark-post" : "aboutus-post aboutus-light-post"}>                         
                        <div className="aboutus-post-section">
                            <h2 className={props.darkMode? "aboutus-post-section-h2 white" : "aboutus-post-section-h2 black"}> 
                                {getTranslation(props.language).about_us.post_5.title}</h2>
                            <p className={props.darkMode? "aboutus-post-section-h2 white" : "aboutus-post-section-p black"}>
                                <span><b>{getTranslation(props.language).about_us.post_5.subtitle_1}</b></span>
                                <span>{getTranslation(props.language).about_us.post_5.description_1}</span>                  
                            </p>
                            <p className={props.darkMode? "aboutus-post-section-h2 white" : "aboutus-post-section-p black"}>
                                <span><b>{getTranslation(props.language).about_us.post_5.subtitle_2}</b></span>
                                <span>{getTranslation(props.language).about_us.post_5.description_2}</span>                  
                            </p>
                            <p className={props.darkMode? "aboutus-post-section-h2 white" : "aboutus-post-section-p black"}>
                                <span><b>{getTranslation(props.language).about_us.post_5.subtitle_3}</b></span>
                                <span>{getTranslation(props.language).about_us.post_5.description_3}</span>                  
                            </p>
                            <p className={props.darkMode? "aboutus-post-section-h2 white" : "aboutus-post-section-p black"}>
                                <span><b>{getTranslation(props.language).about_us.post_5.subtitle_4}</b></span>
                                <span>{getTranslation(props.language).about_us.post_5.description_4}</span>                  
                            </p>
                        </div>
                        <div className="aboutus-post-section aboutus-image-container">
                            <img alt=""  className="aboutus-img" src={CompanyPhoto3} style={{width: '400px', height: '380px',margin:'auto'}} loading="lazy"/>
                        </div>
                    </div>
                    <div className={props.darkMode? "aboutus-post aboutus-dark-post" : "aboutus-post aboutus-light-post"} loading="lazy">                         
                        <div className="aboutus-post-section">
                            <h2 className={props.darkMode? "aboutus-post-section-h2 white" : "aboutus-post-section-h2 black"}> 
                                {getTranslation(props.language).about_us.post_6.title}</h2>
                            <p className={props.darkMode? "aboutus-post-section-h2 white" : "aboutus-post-section-p black"}>
                            ⦾ <span>{getTranslation(props.language).about_us.post_6.description_1}
                                <Link to="/contact_us" className={props.darkMode ? "aboutus-button white" : "aboutus-button black" }>
                                    <img alt=""  className="link-icon" src={ExternalLink}/>{getTranslation(props.language).sidebar.contact_us}
                                </Link>  
                                </span>   
                                                          
                            </p>
                            <p style={{marginTop: '1.5rem'}} className={props.darkMode? "aboutus-post-section-h2 white" : "aboutus-post-section-p black"}>
                            ⦾ <span>{getTranslation(props.language).about_us.post_6.description_2}</span>               
                            </p>
                            <p style={{marginTop: '.5rem'}} className={props.darkMode? "aboutus-post-section-h2 white" : "aboutus-post-section-p black"}>
                                <span>{getTranslation(props.language).about_us.post_6.description_3}</span>
                                <Link to="/join_us" className={props.darkMode ? "aboutus-button white" : "aboutus-button black" }>
                                    <img alt=""  className="link-icon" src={ExternalLink}/>{getTranslation(props.language).sidebar.join_us}
                                </Link>                  
                            </p>
                        </div>
                        <div className="aboutus-post-section aboutus-image-container">
                            <img alt=""  className="aboutus-img" src={CompanyPhoto4} style={{width: '400px', height: '380px',margin:'auto'}} loading="lazy"/>
                        </div>
                    </div>
                </div>
            </div>
            <GoToTop />
        </>
    );
}

export default AboutUs;