import React from "react";
import './OurServices.css';

import computer from './icons/computer.png';
import computerDark from './icons/computer-dark.png';

import mobile from './icons/smartphone.png';
import mobileDark from './icons/smartphone-dark.png';

import surveillence from './icons/cctv.png';
import surveillenceDark from './icons/cctv-dark.png';

import internet from './icons/internet.png';
import internetDark from './icons/internet-dark.png';

import network from './icons/lan.png';
import networkDark from './icons/lan-dark.png';

import server from './icons/server.png';
import serverDark from './icons/server-dark.png';

import warningSystem from './icons/alarm-system.png';
import warningSystemDark from './icons/alarm-system-dark.png';

import qualifying from './icons/qualifying.png';
import qualifyingDark from './icons/qualifying-dark.png';

import { getTranslation } from "./i18n";
import { Link } from "react-router-dom";

function OurServices(props){
    return(
        <>
            <div className={props.darkMode? "services-container graydark-background-0deg-ourservices" : "services-container mutedrose-darkblue"}>
                <div className="services-text">
                    <h1  className={props.darkMode? "services-title white-color" : "services-title black"} >
                        {getTranslation(props.language).services.title}
                    </h1>
                    <div className={props.language==='ar' ? "bidi-text" : ""}>
                        <p className={props.darkMode? "services-description white-color" : "services-description black"}>
                        {getTranslation(props.language).services.subtitle}
                        </p>
                    </div>
                </div>
                <div className="services-container-cells">
                    <div className="services-container-cell">
                        <div className="services-container-cell-item">
                        <div className={props.darkMode? "service dark-background-ourservices service-dark" : "service light-background-ourservices service-light"}>
                                <div className="service-icon-container">
                                {props.darkMode ? (<img loading="lazy" className='service-icon' src={computerDark}  alt=''/>):( <img loading="lazy" className='service-icon' src={computer} alt=''/>)}
                                </div>
                                <h2 className={props.darkMode ? "service-title white-color" : "service-title black"}>
                                    {getTranslation(props.language).services.desktop.title}
                                </h2>
                                <p className={props.darkMode ? "service-description white-color" : "service-description black"}> 
                                    {getTranslation(props.language).services.desktop.subtitle}
                                </p>
                                <div className="service-footer">
                                <Link to="/contact_us?option=desktop" className={props.darkMode ? "service-button border-white white-color" : "service-button border-black black" }>
                                    {getTranslation(props.language).services.get_started}
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services-container-cell">
                        <div className="services-container-cell-item">
                            <div className={props.darkMode? "service dark-background-ourservices service-dark" : "service light-background-ourservices service-light"}>
                                <div className="service-icon-container">
                                    {props.darkMode ? (<img loading="lazy" className='service-icon' src={mobileDark} style={{width: '2.3em'}} alt=''/>):( <img loading="lazy" className='service-icon' src={mobile} alt='' style={{width: '2.3em'}}/>)}
                                </div>
                                <h2 className={props.darkMode ? "service-title white-color" : "service-title black"}>
                                    {getTranslation(props.language).services.mobile.title}                                </h2>
                                <p className={props.darkMode ? "service-description white-color" : "service-description black"}> 
                                    {getTranslation(props.language).services.mobile.subtitle}

                                </p>
                                <div className="service-footer">
                                <Link to="/contact_us?option=mobile" className={props.darkMode ? "service-button border-white white-color" : "service-button border-black black" }>
                                    {getTranslation(props.language).services.get_started}
                                </Link>                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services-container-cell">
                        <div className="services-container-cell-item">
                        <div className={props.darkMode? "service dark-background-ourservices service-dark" : "service light-background-ourservices service-light"}>
                            <div className="service-icon-container">
                                    {props.darkMode ? (<img loading="lazy" className='service-icon' src={internetDark}  alt=''/>):( <img loading="lazy" className='service-icon' src={internet} alt=''/>)}
                                </div>
                                <h2 className={props.darkMode ? "service-title white-color" : "service-title black"}>
                                    {getTranslation(props.language).services.website.title}
                                </h2>
                                <p className={props.darkMode ? "service-description white-color" : "service-description black"}> 
                                    {getTranslation(props.language).services.website.subtitle}
                                </p>
                                <div className="service-footer">
                                <Link to="/contact_us?option=website" className={props.darkMode ? "service-button border-white white-color" : "service-button border-black black" }>
                                    {getTranslation(props.language).services.get_started}
                                </Link>                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services-container-cell">
                        <div className="services-container-cell-item">
                        <div className={props.darkMode? "service dark-background-ourservices service-dark" : "service light-background-ourservices service-light"}>
                                <div className="service-icon-container">
                                        {props.darkMode ? (<img loading="lazy" className='service-icon' src={networkDark}  alt=''/>):( <img loading="lazy" className='service-icon' src={network} alt=''/>)}
                                </div>
                                <h2 className={props.darkMode ? "service-title white-color" : "service-title black"}>
                                    {getTranslation(props.language).services.network.title}
                                </h2>
                                <p className={props.darkMode ? "service-description white-color" : "service-description black"}> 
                                    {getTranslation(props.language).services.network.subtitle}
                                </p>
                                <div className="service-footer">
                                <Link to="/contact_us?option=local-network" className={props.darkMode ? "service-button border-white white-color" : "service-button border-black black" }>
                                    {getTranslation(props.language).services.get_started}
                                </Link>                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="services-container-cell">
                        <div className="services-container-cell-item">
                        <div className={props.darkMode? "service dark-background-ourservices service-dark" : "service light-background-ourservices service-light"}>
                            <div className="service-icon-container">
                                    {props.darkMode ? (<img loading="lazy" className='service-icon' src={serverDark}  alt=''/>):( <img loading="lazy" className='service-icon' src={server} alt=''/>)}
                                </div>
                                <h2 className={props.darkMode ? "service-title white-color" : "service-title black"}>
                                    {getTranslation(props.language).services.server.title}
                                </h2>
                                <p className={props.darkMode ? "service-description white-color" : "service-description black"}> 
                                    {getTranslation(props.language).services.server.subtitle}
                                </p>
                                <div className="service-footer">
                                <Link to="/contact_us?option=server-management" className={props.darkMode ? "service-button border-white white-color" : "service-button border-black black" }>
                                    {getTranslation(props.language).services.get_started}
                                </Link>                                </div>                            </div>
                        </div>
                    </div>
                    <div className="services-container-cell">
                        <div className="services-container-cell-item">
                        <div className={props.darkMode? "service dark-background-ourservices service-dark" : "service light-background-ourservices service-light"}>
                            <div className="service-icon-container">
                                    {props.darkMode ? (<img loading="lazy" className='service-icon' src={surveillenceDark}  alt=''/>):( <img loading="lazy" className='service-icon' src={surveillence} alt=''/>)}
                                </div>
                                <h2 className={props.darkMode ? "service-title white-color" : "service-title black"}>
                                    {getTranslation(props.language).services.camera.title}
                                </h2>
                                <p className={props.darkMode ? "service-description white-color" : "service-description black"}> 
                                    {getTranslation(props.language).services.camera.subtitle}
                                </p>
                                <div className="service-footer">
                                <Link to="/contact_us?option=camera-system" className={props.darkMode ? "service-button border-white white-color" : "service-button border-black black" }>
                                    {getTranslation(props.language).services.get_started}
                                </Link>                                </div>                            </div>
                        </div>
                    </div>
                    <div className="services-container-cell">
                        <div className="services-container-cell-item">
                        <div className={props.darkMode? "service dark-background-ourservices service-dark" : "service light-background-ourservices service-light"}>
                            <div className="service-icon-container">
                                    {props.darkMode ? (<img loading="lazy" className='service-icon' src={warningSystemDark}  alt=''/>):( <img loading="lazy" className='service-icon' src={warningSystem} alt=''/>)}
                                </div>
                                <h2 className={props.darkMode ? "service-title white-color" : "service-title black"}>
                                    {getTranslation(props.language).services.warning.title}

                                </h2>
                                <p className={props.darkMode ? "service-description white-color" : "service-description black"}> 
                                    {getTranslation(props.language).services.warning.subtitle}
                                </p>
                                <div className="service-footer">
                                <Link to="/contact_us?option=warning-system" className={props.darkMode ? "service-button border-white white-color" : "service-button border-black black" }>
                                    {getTranslation(props.language).services.get_started}
                                </Link>                                </div>                            </div>
                        </div>
                    </div>
                    <div className="services-container-cell">
                        <div className="services-container-cell-item">
                        <div className={props.darkMode? "service dark-background-ourservices service-dark" : "service light-background-ourservices service-light"}>
                            <div className="service-icon-container">
                                    {props.darkMode ? (<img loading="lazy" className='service-icon' src={qualifyingDark}  alt=''/>):( <img loading="lazy" className='service-icon' src={qualifying} alt=''/>)}
                                </div>
                                <h2 className={props.darkMode ? "service-title white-color" : "service-title black"}>
                                    {getTranslation(props.language).services.qualifying.title}

                                </h2>
                                <p className={props.darkMode ? "service-description white" : "service-description black"}> 
                                    {getTranslation(props.language).services.qualifying.subtitle}
                                </p>
                                <div className="service-footer">
                                <Link to="/contact_us?option=qualifying" className={props.darkMode ? "service-button border-white white-color" : "service-button border-black black" }>
                                    {getTranslation(props.language).services.get_started}
                                </Link>                                </div>                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default OurServices;