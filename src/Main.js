import React from 'react';
import './Main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import OurServices from './OurServices.js'
import AboutUs from './AboutUs.js';
import ContactUs from './ContactUs.js';
import JoinUs from './JoinUs.js';
import Academy from './Academy.js'
function Main(props){
    return(
        <div className="main-container">
                <Routes>
                    <Route path='/' element={<Home darkMode={props.darkMode} language={props.language}/>} />
                    <Route path='/academy' element={<Academy darkMode={props.darkMode} language={props.language} />} />
                    <Route path='/our_services' element={<OurServices darkMode={props.darkMode} language={props.language} />} />
                    <Route path='/join_us' element={<JoinUs darkMode={props.darkMode} language={props.language}/>} />
                    <Route path='/about_us' element={<AboutUs darkMode={props.darkMode} language={props.language}/>} />
                    <Route path='/contact_us' element={<ContactUs darkMode={props.darkMode} language={props.language}/>} />
                    <Route path='*' element={<NotFound language={props.language}/>} />
                </Routes>

        </div>
    )
}
export default Main;