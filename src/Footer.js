import React from "react";
import './Footer.css';

import locationIcon from './icons/location.png';
import locationIconDark from './icons/location-dark.png';

import callIcon from './icons/telephone.png';
import callIconDark from './icons/telephone-dark.png';

import mailIcon from './icons/email.png';
import mailIconDark from './icons/email-dark.png';

import facebookIcon from './icons/facebook.png';
import facebookIconDark from './icons/facebook-dark.png';

import whatsappIcon from './icons/whatsapp.png';
import whatsappIconDark from './icons/whatsapp-dark.png';

import twitterIcon from './icons/twitter.png';
import twitterIconDark from './icons/twitter-dark.png';

import linkedinIcon from './icons/linkedin.png';
import linkedinIconDark from './icons/linkedin-dark.png';

import { getTranslation } from "./i18n";

function Footer(props){
    return(
        <footer className={props.darkMode ? "footer-container-dark footer-container" : "footer-container"}>
            <div className="footer-grid">
                <div className="footer-grid-item">
                    <div className="footer-grid-item-cells collapsable-items">
                        <div className="footer-grid-item-cell center-xs">
                            <a href="https://www.google.com/maps/place/36%C2%B030'56.8%22N+40%C2%B044'57.9%22E/@36.5157901,40.7487793,19z/data=!3m1!4b1!4m4!3m3!8m2!3d36.515789!4d40.749423?hl=en-US&entry=ttu" target="_blank" rel="noreferrer" className={props.darkMode? 'white footer-link': 'black footer-link'}>
                                {props.darkMode ? (<img loading="lazy" className='footer-icon' src={locationIconDark} alt='' />):( <img loading="lazy" className='footer-icon' src={locationIcon} alt=''/>)}
                                    <span>Al Hasakah, Syria</span>
                            </a>
                        </div>
                        <div className="footer-grid-item-cell center-xs">
                            <a href="tel:+963939722358" className={props.darkMode? 'white footer-link': 'black footer-link'}>
                                {props.darkMode ? (<img loading="lazy" className='footer-icon' src={callIconDark}  alt=''/>):( <img loading="lazy" className='footer-icon' src={callIcon} alt=''/>)}
                                    <span>+963939722358</span>
                            </a>
                        </div>
                        <div className="footer-grid-item-cell center-xs" style={{width: '14em'}}>
                            <a href="mailto:support@blue-elite.tech" className={props.darkMode? 'white footer-link': 'black footer-link'}>
                                {props.darkMode ? (<img loading="lazy" className='footer-icon' src={mailIconDark} alt='' />):( <img loading="lazy" className='footer-icon' src={mailIcon} alt=''/>)}
                                    <span>support@blue-elite.tech</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-grid-item">
                    <div className="footer-grid-item-cells reversed-order">

                        <div className="footer-grid-item-cell" style={{width: '1em'}}>
                            <a href="https://x.com/Blue_Elite_tech" className={props.darkMode? 'white footer-link': 'black footer-link'} target="_blank" rel="noreferrer">
                                {props.darkMode ? (<img loading="lazy" className='nav-icon' src={twitterIconDark}  alt=''/>):( <img loading="lazy" className='nav-icon' src={twitterIcon} alt=''/>)}
                            </a>
                        </div>
                        <div className="footer-grid-item-cell" style={{width: '1em'}}>
                            <a href="https://www.facebook.com/BlueEliteTech.home" className={props.darkMode? 'white footer-link': 'black footer-link'}  target="_blank" rel="noreferrer">
                                {props.darkMode ? (<img loading="lazy" className='nav-icon' src={facebookIconDark} alt='' />):( <img loading="lazy" className='nav-icon' src={facebookIcon} alt=''/>)}
                            </a>
                        </div>
                        <div className="footer-grid-item-cell" style={{width: '1em'}}>
                            <a href="https://wa.me/message/4BZQ53OETHOLG1" className={props.darkMode? 'white footer-link': 'black footer-link'}  target="_blank" rel="noreferrer">
                                {props.darkMode ? (<img loading="lazy" className='nav-icon' src={whatsappIconDark}  alt=''/>):( <img loading="lazy" className='nav-icon' src={whatsappIcon} alt=''/>)}
                            </a>
                        </div>
                        <div className="footer-grid-item-cell" style={{width: '1em'}}>
                            <a href="https://www.linkedin.com/company/blue-elite-tech" className={props.darkMode? 'white footer-link': 'black footer-link'}  target="_blank" rel="noreferrer">
                                {props.darkMode ? (<img loading="lazy" className='nav-icon' src={linkedinIconDark}  alt=''/>):( <img loading="lazy" className='nav-icon' src={linkedinIcon} alt=''/>)}
                            </a>
                        </div>
                    </div>
                </div>
                <div className={props.language==='ar' ? "footer-tail bidi-text" : "footer-tail"}>
                    <span className="footer-tail-text">
                        {getTranslation(props.language).footer.title}
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;