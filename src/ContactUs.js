import React,{useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import emailIcon from './icons/email.png';
import emailIconDark from './icons/email-dark.png';

import mobilephone from './icons/smartphone.png';
import mobilephoneDark from './icons/smartphone-dark.png';

import location1 from './icons/office-building.png';
import locationDark from './icons/office-building-dark.png';

import './ContactUs.css'
import SingleLocationMap from "./SingleLocationMap";

import { getTranslation } from "./i18n";
import Popup from "./Popup";

import GoToTop from './GoToTop';


function ContactUs(props){
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone_number, setPhoneNumber] = useState('');

    const location = useLocation();
    var [selectedOption, setSelectedOption] = useState(null);

    const [showPopup, setShowPopup] = useState(false);
    const [popupTitle, setPopupTitle] = useState('Oops!, something went wrong!');
    const [popupDescription, setPopupDescription] = useState('try again later...');
    

    const clearInputs = () => {
        setFullName('');
        setEmail('');
        setPhoneNumber('');
        setMessage('');
    }
    const togglePopup = () => {
        setShowPopup(!showPopup);
    }

    useEffect(() => {
        // Retrieve the query parameter
        const urlParams = new URLSearchParams(location.search);
        const option = urlParams.get('option');
        setSelectedOption(option);
        // let url = new URL(window.location.href);
        // url.searchParams.delete('option');
        // window.history.pushState({}, document.title, url);
    }, [location.search]);
    
    const handleSelectChange = (event)=>{
        setSelectedOption(event.target.value);
    }
    const handleMessageChange = (event)=>{
        setMessage(event.target.value);
    }
    
    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
      };

    const handleEmailChange = (event) => {
    setEmail(event.target.value);
    };
    const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
    };
    async function handleSubmit(event){
        event.preventDefault();
        if(fullName === ''){
            console.log('Full name field must not be empty!, please try again and write your full name')
            return;
        }
        if(email === ''){
            console.log('Email field must not be empty!, please try again and write your email')
            return;
        }
        if(message === ''){
            console.log('message field must not be empty!, please try again and write your message')
            return;
        }
        if(selectedOption === null) selectedOption = 'desktop';
        
        const formData = new FormData();
        formData.append('PostName', fullName);
        formData.append('PostIsApplication', 'false');
        formData.append('PostEmail', email);
        formData.append('PostPhoneNumber', phone_number);
        formData.append('PostMessage', message);
        formData.append('PostService', selectedOption);

        try {
            await axios.post('https://blue-elite.tech/api/v1/index.php', formData);
            setShowPopup(true);;
            setPopupTitle(getTranslation(props.language).contact_us.popup.success.title);
            setPopupDescription(getTranslation(props.language).contact_us.popup.success.description);
            clearInputs();

          } catch (error) {
            setShowPopup(true);;
            setPopupTitle(getTranslation(props.language).contact_us.popup.fail.title);
            setPopupDescription(getTranslation(props.language).contact_us.popup.fail.description);
            clearInputs();
          }
    }
    return(
        <>
        <div className={props.darkMode? 'contactus-container contactus-graydark-background': 'contactus-container mutedrose-darkblue'}
>
            {showPopup && <Popup onClose={togglePopup} title={popupTitle} description={popupDescription}/>}

        <div className={props.language==='ar' ? "contactus-container-cells bidi-text" : "contactus-container-cells"}>
            
            <div className="contactus-container-cell contact-company">
                <div className="greeting">
                    <h2 className={props.darkMode? 'white-contactus': 'black-contactus'}>
                        {getTranslation(props.language).contact_us.user_form.title}
                    </h2>
                    <p className={props.darkMode? 'white-contactus': 'black-contactus'}>
                    {getTranslation(props.language).contact_us.user_form.subtitle}
                    </p>
                </div>
                <form onSubmit={handleSubmit} id="user-form">
                    <div className="text-input user-form-section">
                        <label className={props.darkMode? 'white-contactus': 'black-contactus'} htmlFor="name">
                            {getTranslation(props.language).contact_us.user_form.full_name}  
                        </label>
                        <input
                            type="text"
                            id="fullname"
                            value={fullName}
                            onChange={handleFullNameChange}
                            required
                        />
                    </div>
                    
                    <div className="text-input user-form-section">
                        <label className={props.darkMode? 'white-contactus': 'black-contactus'}for="dropdown-list">{getTranslation(props.language).contact_us.user_form.service_choices.choose_option}</label>
                            <select value={selectedOption} id="service-list" name="dropdown-list" onChange={handleSelectChange}>
                                <option value="desktop"> {getTranslation(props.language).contact_us.user_form.service_choices.desktop}</option>
                                <option value="mobile">{getTranslation(props.language).contact_us.user_form.service_choices.mobile}</option>
                                <option value="website">{getTranslation(props.language).contact_us.user_form.service_choices.website}</option>
                                <option value="local-network">{getTranslation(props.language).contact_us.user_form.service_choices.local_network}</option>
                                <option value="server-management">{getTranslation(props.language).contact_us.user_form.service_choices.server_management}</option>
                                <option value="camera-system">{getTranslation(props.language).contact_us.user_form.service_choices.camera_system}</option>
                                <option value="warning-system">{getTranslation(props.language).contact_us.user_form.service_choices.warning_system}</option>
                                <option value="qualifying">{getTranslation(props.language).contact_us.user_form.service_choices.qualifying}</option>
                                <option value="simurx">{getTranslation(props.language).contact_us.user_form.service_choices.simurx}</option>
                            </select> 
                    </div>
                    <div className="text-input user-form-section">
                        <label className={props.darkMode? 'white-contactus': 'black-contactus'} htmlFor="phone_number">
                            {getTranslation(props.language).join_us.user_form.phone_number} *
                        </label>
                        <input
                            type="tel"
                            id="phone_number"
                            value={phone_number}
                            placeholder="Ex: +963912345678" 
                            pattern="(\+963|00963|0)9[0-9]{8}" 
                            onChange={handlePhoneNumberChange}
                            required
                        />
                    </div>
                    <div className="text-input user-form-section">
                        <label style={{display: 'block'}} className={props.darkMode? 'white-contactus': 'black-contactus'} htmlFor="email">
                            {getTranslation(props.language).contact_us.user_form.email}  
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="text-input user-form-section">
                        <label style={{display: 'block'}} className={props.darkMode? 'white-contactus': 'black-contactus'} htmlFor="message">
                            {getTranslation(props.language).contact_us.user_form.message}  
                        </label>

                        <textarea 
                            rows="6"
                            cols="50"
                            name="comment" 
                            form="user-form"
                            id="message"
                            value={message}
                            onChange={handleMessageChange}
                        >
                            Enter text here...</textarea>
                    </div>
                    <button id='contactus-form-submit-button' className={props.darkMode? 'contactus-button contactus-button-dark': 'contactus-button contactus-button-light'} type="submit">
                        {getTranslation(props.language).contact_us.user_form.submit_button}  
                    </button>
                    </form>
                </div>
                <div className="contactus-container-cell company-information">
                <h3 className={props.darkMode? 'white-contactus': 'black-contactus'}>{getTranslation(props.language).contact_us.title}</h3>
                <h1 className={props.darkMode? 'white-contactus': 'black-contactus'}> {getTranslation(props.language).contact_us.subtitle}</h1>
                <div className="company-location">
                    <SingleLocationMap 
                    pos={[36.5158400, 40.7495600]}
                    name='Blue Elite Tech'
                    />
                </div>
                <div className="company-details">
                    <div className="company-details-cells">

                        <div className={props.darkMode? 'company-details-cell company-details-cell-dark': 'company-details-cell company-details-cell-light'}>
                            <div className="company-detail">
                            {props.darkMode ? (<img className='contactus-card-icon' src={emailIconDark} alt='' />):( <img className='contactus-card-icon' src={emailIcon} alt=''/>)}
                            <h2 className={props.darkMode? 'white-contactus': 'black-contactus'}> {getTranslation(props.language).contact_us.email_title}</h2>
                                <a href="mailto:support@blue-elite.tech" className={props.darkMode? 'white-contactus contactus-card-link': 'black-contactus contactus-card-link'}>
                                    <span>support@blue-elite.tech</span>
                                </a>
                            </div>
                        </div>
                        <div  style={{direction: 'ltr'}} className={props.darkMode? 'company-details-cell company-details-cell-dark': 'company-details-cell company-details-cell-light'}>
                            <div className="company-detail">
                            {props.darkMode ? (<img className='contactus-card-icon' style={{width: '1.6em'}} src={mobilephoneDark} alt='' />):( <img style={{width: '1.6em'}} className='contactus-card-icon' src={mobilephone} alt=''/>)}
                            <h2 className={props.darkMode? 'white-contactus': 'black-contactus'} > {getTranslation(props.language).contact_us.number_title}</h2>
                                <a href="tel:+963939722358" className={props.darkMode? 'white-contactus contactus-card-link': 'black-contactus contactus-card-link'}>
                                    <span>+963 939 722 358</span>
                                </a>
                            </div>
                        </div>
                        <div className={props.darkMode? 'company-details-cell company-details-cell-dark': 'company-details-cell company-details-cell-light'}>
                            <div className="company-detail">
                            {props.darkMode ? (<img className='contactus-card-icon' src={locationDark} alt='' />):( <img className='contactus-card-icon' src={location1} alt=''/>)}
                                <h2 className={props.darkMode? 'white-contactus': 'black-contactus'}> {getTranslation(props.language).contact_us.office_title} </h2>
                                <a href="https://www.google.com/maps/place/36%C2%B030'56.8%22N+40%C2%B044'57.9%22E/@36.5157901,40.7487793,19z/data=!3m1!4b1!4m4!3m3!8m2!3d36.515789!4d40.749423?hl=en-US&entry=ttu" className={props.darkMode? 'white-contactus contactus-card-link': 'black-contactus contactus-card-link'}>
                                    <span>GP8X+8P2, Al Hasakah, Syria</span>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
            <GoToTop />
            
        </div>
        </>
    )
}

export default ContactUs;