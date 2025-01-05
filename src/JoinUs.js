import React,{useState } from "react";
import axios from "axios";
// import axiosHttpsProxyFix from 'axios-https-proxy-fix';
import './ContactUs.css'

import Popup from "./Popup";

import { getTranslation } from "./i18n";
import GoToTop from "./GoToTop";


function JoinUs(props){
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [pdfFile, setPdfFile] = useState(null);
    
    const [showPopup, setShowPopup] = useState(false);
    const [popupTitle, setPopupTitle] = useState('Oops!, something went wrong!');
    const [popupDescription, setPopupDescription] = useState('try again later...');
    

    const clearInputs = () => {
        setFullName('');
        setEmail('');
        setPhoneNumber('');
        setPdfFile(null);
        setMessage('');
    }
    const togglePopup = () => {
        setShowPopup(!showPopup);
    }
    const handlePdfUpload = (event) => {
        setPdfFile(event.target.files[0]);
      };
    
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

      const handleSubmit = async (event) => {
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
        if(pdfFile === null){
            console.log('your CV PDF file must not be empty!, please try again and upload your CV')
            return;
        }
    
        const formData = new FormData();
        formData.append('PostName', fullName);
        formData.append('PostIsApplication', 'true');
        formData.append('PostEmail', email);
        formData.append('PostPhoneNumber', phone_number);
        formData.append('PostMessage', message);
        formData.append('PostPdfFile', pdfFile);


        // try {
        //     await fetch('https://api.blue-elite.tech/', {
        //     method: 'POST',    
        //     formData: formData
        //     });
       
        try {
            await axios.post('https://blue-elite.tech/api/v1/index.php', formData);
            setShowPopup(true);;
            setPopupTitle(getTranslation(props.language).join_us.popup.success.title);
            setPopupDescription(getTranslation(props.language).join_us.popup.success.description);
            clearInputs();

          } catch (error) {
            setShowPopup(true);;
            setPopupTitle(getTranslation(props.language).join_us.popup.fail.title);
            setPopupDescription(getTranslation(props.language).join_us.popup.fail.description);
            clearInputs();
          }
    }
    return(
        <>
        <div className={props.darkMode? 'contactus-container contactus-graydark-background': 'contactus-container mutedrose-darkblue'}
>            {showPopup && <Popup onClose={togglePopup} title={popupTitle} description={popupDescription}/>}

        <div className={props.language==='ar' ? "contactus-container-cells bidi-text" : "contactus-container-cells"}>
            
            <div className="contactus-container-cell contact-company">
                <div className="greeting">
                    <h2 className={props.darkMode? 'white-contactus': 'black-contactus'}>
                        {getTranslation(props.language).join_us.user_form.title}
                    </h2>
                </div>
                <form onSubmit={handleSubmit} id="user-form">
                    <div className="checkbox-input user-form-section">
                        <label className={props.darkMode? 'white-contactus': 'black-contactus'} htmlFor="upload-cv-button">
                                                        
                            {getTranslation(props.language).join_us.user_form.is_application} * <input type="file"
          accept="application/pdf"
          onChange={handlePdfUpload} id='upload-cv-button' style={props.language === 'ar' ? {float: 'left'}: {float: 'right'}} className={props.darkMode? 'contactus-button contactus-button-dark': 'contactus-button contactus-button-light'} required/>
                        </label>
                        {pdfFile===null ? <></>: <p className={props.darkMode? 'label-light' : 'black'}>{pdfFile.name} </p>}
                    </div>
                    <div className="text-input user-form-section">
                        <label className={props.darkMode? 'white-contactus': 'black-contactus'} htmlFor="fullname">
                            {getTranslation(props.language).join_us.user_form.full_name  } *  
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
                            {getTranslation(props.language).join_us.user_form.email} *
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className="text-input user-form-section">
                        <label style={{display: 'block'}} className={props.darkMode? 'white-contactus': 'black-contactus'} htmlFor="message">
                            {getTranslation(props.language).join_us.user_form.message}  
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
                        {getTranslation(props.language).join_us.user_form.submit_button}  
                    </button>
                    </form>
                </div>
                
            </div>
            <GoToTop />
        </div>
        </>
    )
}

export default JoinUs;