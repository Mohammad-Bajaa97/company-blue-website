import React from "react";
import './Academy.css'
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'

import academy2 from "./images/academy1.jpg"
import academy3 from "./images/academy2.jpg"
import academy4 from "./images/academy3.jpg"
import academy5 from "./images/academy4.jpg"
import emailIcon from './icons/email.png';
import emailIconDark from './icons/email-dark.png';

import mobilephone from './icons/smartphone.png';
import mobilephoneDark from './icons/smartphone-dark.png';

import location from './icons/office-building.png';
import locationDark from './icons/office-building-dark.png';

import SingleLocationMap from "./SingleLocationMap";

import { getTranslation } from "./i18n";

import 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import academy1 from './images/acalogo-black.png'
import { Link } from "react-router-dom";
import GoToTop from "./GoToTop";
function Academy(props){
    return(
        <div className={props.darkMode? "academy-container graydark-background-0deg-ourservices" : "academy-container mutedrose-darkblue"}>
            <div className={props.language==='ar' ? "academy-sections bidi-text" : "academy-sections"}>
                <div className="academy-banner">
                    <h1 className="academy-simurx-title"> SÎMUR<span style={{color: '#0294b4'}}>X</span> </h1>
                    <h2 className="academy-simurx-subtitle"> A Beacon of Computer Science and Education </h2>
                    <h2 className="academy-simurx-subtitle1"> Navenda Zanistên Komputerê </h2>

                </div>
                <div className="academy-main-container">
                    <div className="academy-gallery-container">
                        <div className="simurx-description-container">
                            <p className="simurx-description">
                                {getTranslation(props.language).academy.subtitle}
                            </p>
                        </div>
                        <div className="academy-gallery">
                            <Swiper className="slide-container"
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween= {12}
                                slidesPerView= {1}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                            >
                                <div className="slide-content">
                                    <div className="card-wrapper">
                                        <SwiperSlide className="card">
                                            <div className="image-container">
                                                <img className="image-content" src={academy2} alt="" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="card">
                                            <div className="image-content">
                                                <img src={academy4} alt="" />
                                            </div>
                                        </SwiperSlide>
                                        
                                        <SwiperSlide className="card">
                                            <div className="image-content">
                                                <img src={academy5} alt="" />
                                            </div>
                                        </SwiperSlide>
                                        
                                        <SwiperSlide className="card">
                                            <div className="image-content">
                                                <img src={academy3} alt="" />
                                            </div>
                                        </SwiperSlide>
                                        
                                        

                                        
                                    </div>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                    <div className="academy-cards-grid">
                        <div className="academy-grid-cells">
                            <div className="academy-grid-cell">
                                <div className="academy-card">
                                    <div className="flip-inner-card">
                                    <div className={props.darkMode? "flip-card-front dark-background-ourservices flip-card-front-dark" : "flip-card-front light-background-ourservices flip-card-front-light"}>                                            <img src={academy1} alt="" className="academy-card-img" />
                                            <h1 className="academy-card-img-h1"> 
                                                {getTranslation(props.language).academy.cards.card1.title}
                                            </h1>
                                        </div>
                                        <div className={props.darkMode? "flip-card-back dark-background-ourservices flip-card-back-dark" : "flip-card-back light-background-ourservices flip-card-back-light"}>  
                                            <h2 className="academy-card-title">
                                                {getTranslation(props.language).academy.cards.card1.title}
                                            </h2>
                                            <p className="academy-card-description">
                                            {   getTranslation(props.language).academy.cards.card1.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="academy-grid-cell">
                                <div className="academy-card">
                                    <div className="flip-inner-card">
                                    <div className={props.darkMode? "flip-card-front dark-background-ourservices flip-card-front-dark" : "flip-card-front light-background-ourservices flip-card-front-light"}>                                            <img src={academy1} alt="" className="academy-card-img" />
                                            <h1 className="academy-card-img-h1"> 
                                                {getTranslation(props.language).academy.cards.card2.title}
                                            </h1>
                                        </div>
                                        <div className={props.darkMode? "flip-card-back dark-background-ourservices flip-card-back-dark" : "flip-card-back light-background-ourservices flip-card-back-light"}>  
                                            <h2 className="academy-card-title">
                                                {getTranslation(props.language).academy.cards.card2.title}
                                            </h2>
                                            <p className="academy-card-description">
                                            <span style={{fontWeight: 'bold'}}>{   getTranslation(props.language).academy.cards.card2.subtitle1}</span>
                                            <span>{   getTranslation(props.language).academy.cards.card2.description1}</span>
                                            </p>
                                            <p style={{marginTop: '1em'}}>
                                            <span style={{fontWeight: 'bold'}}>{   getTranslation(props.language).academy.cards.card2.subtitle2}</span>
                                            <span>{   getTranslation(props.language).academy.cards.card2.description2}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="academy-grid-cell">
                                <div className="academy-card">
                                    <div className="flip-inner-card">
                                    <div className={props.darkMode? "flip-card-front dark-background-ourservices flip-card-front-dark" : "flip-card-front light-background-ourservices flip-card-front-light"}>                                            <img src={academy1} alt="" className="academy-card-img" />
                                            <h1 className="academy-card-img-h1"> 
                                                {getTranslation(props.language).academy.cards.card3.title}
                                            </h1>
                                        </div>
                                        <div className={props.darkMode? "flip-card-back dark-background-ourservices flip-card-back-dark" : "flip-card-back light-background-ourservices flip-card-back-light"}>  
                                            <h2 className="academy-card-title" style={{marginTop: '1.3em'}}>
                                                {getTranslation(props.language).academy.cards.card3.title}
                                            </h2>
                                            <p className="academy-card-description">
                                            {   getTranslation(props.language).academy.cards.card3.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="academy-grid-cell">
                                <div className="academy-card">
                                    <div className="flip-inner-card">
                                    <div className={props.darkMode? "flip-card-front dark-background-ourservices flip-card-front-dark" : "flip-card-front light-background-ourservices flip-card-front-light"}>                                            <img src={academy1} alt="" className="academy-card-img" />
                                            <h1 className="academy-card-img-h1"> 
                                                {getTranslation(props.language).academy.cards.card4.title}
                                            </h1>
                                        </div>
                                        <div className={props.darkMode? `flip-card-back dark-background-ourservices flip-card-back-dark ${props.language==='ar' && 'flip-card-back-ar'}` : `flip-card-back light-background-ourservices flip-card-back-light ${props.language==='ar' && 'flip-card-back-ar'}`} style={{textIndent: '-1.5em', paddingLeft: '1.5em'}}>  
                                            <h2 className="academy-card-title" style={{marginTop: '1.3em'}}>
                                                {getTranslation(props.language).academy.cards.card4.title}
                                            </h2>
                                            <p className={props.language==='ar' ? "academy-card-description academy-card-description-ar" : "academy-card-description"}> 
                                                <ul style={{listStylePosition: 'inside', textAlign: 'left'}}>
                                                    <li>
                                                        <span style={{fontWeight: 'bold'}}>{   getTranslation(props.language).academy.cards.card4.subtitle1}</span>
                                                        <span>{   getTranslation(props.language).academy.cards.card4.description1}</span>
                                                    </li>
                                                    <li>
                                                        <span style={{fontWeight: 'bold'}}>{   getTranslation(props.language).academy.cards.card4.subtitle2}</span>
                                                        <span>{   getTranslation(props.language).academy.cards.card4.description2}</span>
                                                    </li>
                                                    <li>
                                                        <span style={{fontWeight: 'bold'}}>{   getTranslation(props.language).academy.cards.card4.subtitle3}</span>
                                                        <span>{   getTranslation(props.language).academy.cards.card4.description3}</span>
                                                    </li>
                                                </ul>                                            
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="academy-grid-cell">
                                <div className="academy-card">
                                    <div className="flip-inner-card">
                                    <div className={props.darkMode? "flip-card-front dark-background-ourservices flip-card-front-dark" : "flip-card-front light-background-ourservices flip-card-front-light"}>                                            <img src={academy1} alt="" className="academy-card-img" />
                                            <h1 className="academy-card-img-h1"> 
                                                {getTranslation(props.language).academy.cards.card5.title}
                                            </h1>
                                        </div>
                                        <div className={props.darkMode? "flip-card-back dark-background-ourservices flip-card-back-dark" : "flip-card-back light-background-ourservices flip-card-back-light"}>  
                                            <h2 className="academy-card-title">
                                                {getTranslation(props.language).academy.cards.card5.title}
                                            </h2>
                                            <p className="academy-card-description">
                                            {   getTranslation(props.language).academy.cards.card5.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="academy-grid-cell">
                                <div className="academy-card">
                                    <div className="flip-inner-card">
                                    <div className={props.darkMode? "flip-card-front dark-background-ourservices flip-card-front-dark" : "flip-card-front light-background-ourservices flip-card-front-light"}>                                            <img src={academy1} alt="" className="academy-card-img" />
                                            <h1 className="academy-card-img-h1"> 
                                                {getTranslation(props.language).academy.cards.card6.title}
                                            </h1>
                                        </div>
                                        <div className={props.darkMode? "flip-card-back dark-background-ourservices flip-card-back-dark" : "flip-card-back light-background-ourservices flip-card-back-light"}>  
                                            <h2 className="academy-card-title" style={{marginTop:'1em'}}>
                                                {getTranslation(props.language).academy.cards.card6.title}
                                            </h2>
                                            <p className="academy-card-description">
                                            {   getTranslation(props.language).academy.cards.card6.description}
                                            <Link style={{marginTop: '.5em', marginRight: 'auto', marginLeft: 'auto'}} to="/contact_us?option=simurx" className={props.darkMode ? "service-button border-white white-color" : "service-button border-black black" }>
                                                {getTranslation(props.language).services.get_started}
                                            </Link>    
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contactus-container-cell company-information">
                        <h3 className={props.darkMode? 'white-contactus': 'black-contactus'}>{getTranslation(props.language).academy.contact.title}</h3>
                        <h1 className={props.darkMode? 'white-contactus': 'black-contactus'}> {getTranslation(props.language).academy.contact.subtitle}</h1>
                        
                        <div className="company-location">
                            <SingleLocationMap 
                            pos={[37.045092, 41.225199]}
                            name='SÎMURX Academy'
                            />
                        </div>
                        <div className="company-details">
                            <div className="company-details-cells">
                                <div className={props.darkMode? 'company-details-cell company-details-cell-dark': 'company-details-cell company-details-cell-light'}>
                                    <div className="company-detail">
                                        {props.darkMode ? (<img className='contactus-card-icon' src={emailIconDark} alt='' />):( <img className='contactus-card-icon' src={emailIcon} alt=''/>)}
                                        <h2 className={props.darkMode? 'white-contactus': 'black-contactus'}> {getTranslation(props.language).contact_us.email_title}</h2>
                                        <a href="mailto:simurxakademy@gmail.com" className={props.darkMode? 'white-contactus contactus-card-link': 'black-contactus contactus-card-link'}>
                                            <span>simurxakademy@gmail.com</span>
                                        </a>
                                    </div>
                                </div>
                                <div  style={{direction: 'ltr'}} className={props.darkMode? 'company-details-cell company-details-cell-dark': 'company-details-cell company-details-cell-light'}>
                                    <div className="company-detail">
                                    {props.darkMode ? (<img className='contactus-card-icon' style={{width: '1.6em'}} src={mobilephoneDark} alt='' />):( <img style={{width: '1.6em'}} className='contactus-card-icon' src={mobilephone} alt=''/>)}
                                    <h2 className={props.darkMode? 'white-contactus': 'black-contactus'} > {getTranslation(props.language).contact_us.number_title}</h2>
                                        <a href="tel:+963984981113" className={props.darkMode? 'white-contactus contactus-card-link': 'black-contactus contactus-card-link'}>
                                            <span>+963 984 981 113</span>
                                        </a>
                                    </div>
                                </div>
                                <div className={props.darkMode? 'company-details-cell company-details-cell-dark': 'company-details-cell company-details-cell-light'}>
                                    <div className="company-detail">
                                    {props.darkMode ? (<img className='contactus-card-icon' src={locationDark} alt='' />):( <img className='contactus-card-icon' src={location} alt=''/>)}
                                        <h2 className={props.darkMode? 'white-contactus': 'black-contactus'}> {getTranslation(props.language).contact_us.office_title} </h2>
                                        <a href="https://www.google.com/maps/place/36%C2%B030'56.8%22N+40%C2%B044'57.9%22E/@36.5157901,40.7487793,19z/data=!3m1!4b1!4m4!3m3!8m2!3d36.515789!4d40.749423?hl=en-US&entry=ttu" className={props.darkMode? 'white-contactus contactus-card-link': 'black-contactus contactus-card-link'}>
                                            <span>Al Qamishli, Syria</span>
                                        </a>
                                    </div>
                                </div>
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GoToTop />
        </div>
    );
}

export default Academy;
