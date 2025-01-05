import React, { useEffect, useRef } from "react";
import './Home.css';
import CompanyLogo from './images/logo-transparent.png';
import mobileFrame from './images/mobilephone-frame.png'
import acaLogoWhite from './images/acalogo-dark.png'
import acaLogoCyan from './images/acalogo-cyan.png'
import softwareCompany from './images/software-company1.png'
import computer from './images/computer.png';
import customSoftware from './images/custom-software1.png'
import { getTranslation } from "./i18n";
import GoToTop from './GoToTop';
import { Link} from "react-router-dom";

function Home(props){
    const [isHovered, setIsHovered] = React.useState(false);


    const [currentTitle1, setCurrentTitle1] = React.useState(getTranslation(props.language).home.titles1[0]);
    const [currentTitle2, setCurrentTitle2] = React.useState(getTranslation(props.language).home.titles2[0]);
    
    const titles1Ref = useRef([]);
    const titles2Ref = useRef([]);

    useEffect(()=>{
        titles1Ref.current = getTranslation(props.language).home.titles1;
        titles2Ref.current = getTranslation(props.language).home.titles2;
    },[props.language])


    const shuffle = React.useCallback(() => {
        const index = Math.floor(Math.random() * 6);
        setCurrentTitle1(titles1Ref.current[index]) 
        setCurrentTitle2(titles2Ref.current[index]) 
        const ttle1 = document.getElementById("my-title1");
        ttle1.classList.add("title_2");
        const ttle2 = document.getElementById("my-title2");
        ttle2.classList.add("title_2");
    }, []);

    React.useEffect(() => {
        const intervalID = setInterval(shuffle, 6000);
        const ttle1 = document.getElementById("my-title1");
        const ttle2 = document.getElementById("my-title2");
        ttle1.classList.remove("title_2")
        ttle2.classList.remove("title_2")
        return () => clearInterval(intervalID);
    }, [shuffle])



    const handleMouseEnter = () => {
          setIsHovered(true);
        };
      
    const handleMouseLeave = () => {
          setIsHovered(false);
        };
    return(
        <div className="home-container">
            <div className="home-posts-container">
                <div className={props.darkMode? 'home-post first-post graydark-background-0deg': 'home-post first-post mutedrose-darkblue'}>
                    <div className={props.language==='ar' ? "home-post-section first-post-1 bidi-text" : "home-post-section first-post-1"}>
                        <div className="titles">
                            <h3 id="my-title1" className="title_1"> {currentTitle1}</h3>
                            <h3 id="my-title2" className="title_1"> {currentTitle2}</h3>
                        </div>
                    </div>
                    <div className="home-post-section first-post-2 ">
                        <img loading="lazy" id="companylogo" style={{width: "400px", height: "400px"}} src={CompanyLogo} alt=''/>
                    </div>
                    {/* <div className="aca-titles">
                        <h1 id="acatitle">A beacon of</h1>
                        <h2> Computer Science Education</h2>
                    </div> */}

                    {/*  TWO SPANS */}
                        <div className="home-post-barrier">
                        </div>
                </div>
                <div className={props.darkMode? 'home-post graydark-background-0deg': 'home-post mutedrose-darkblue'}>
                    <div className={props.language==='ar' ? "home-post-section bidi-text" : "home-post-section"}>
                        <div className="acalogo-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{'textAlign': 'center'}}>
                            <img loading="lazy" id="acalogo" src={isHovered ? acaLogoCyan : acaLogoWhite} alt=''/>
                            <h2>SÎMURX</h2>
                        </div>
                        <div className="titles">
                            <h3 className="title_1"> {getTranslation(props.language).home.post_1.title_1}</h3>
                            <h3 className="title_1"> {getTranslation(props.language).home.post_1.title_2}</h3>
                        </div>
                    </div>
                    <div className="home-post-section">
                        <img loading="lazy" id="mobileframe" src={mobileFrame} alt=''/>
                    </div>
                    {/* <div className="aca-titles">
                        <h1 id="acatitle">A beacon of</h1>
                        <h2> Computer Science Education</h2>
                    </div> */}

                    {/*  TWO SPANS */}
                        <div className="home-post-barrier">
                        </div>
                </div>
                <div className={props.darkMode? 'home-post graydark-background-90deg': 'home-post red-pink'}>
                    <div className={props.language==='ar' ? "home-post-section bidi-text" : "home-post-section"}>
                        <h1 className={props.darkMode ? "home-post-section-h1 white" : "home-post-section-h1 black"} style={{fontWeight: '400'}}>
                            {getTranslation(props.language).home.post_2.title}
                        </h1>
                        <p className={props.darkMode ? "home-post-section-p white" : "home-post-section-p black"} style={{fontWeight: '400', fontSize: '1.8rem'}}> 
                            {getTranslation(props.language).home.post_2.subtitle}                        </p>
                        <div className="button-container">
                            <Link to="contact_us" className={props.darkMode ? "a-button border-white white" : "a-button border-black black" }>{getTranslation(props.language).home.post_2.contact_button}</Link>
                        </div>
                    </div>
                    <div className="home-post-section">
                        <img loading="lazy" id="mobileframe" src={computer} alt=''/>
                    </div>
                    <div className="home-post-barrier">
                        
                    </div>
                </div>
                <div className={props.darkMode? 'home-post dark-background': 'home-post mov-darkblue'}>
                    <div className={props.language==='ar' ? "home-post-section bidi-text" : "home-post-section"}>
                        <h1 className="home-post-section-h1">
                            {getTranslation(props.language).home.post_3.title}
                        </h1>
                        <p className="home-post-section-p"> 
                        {   getTranslation(props.language).home.post_3.subtitle}
                        </p>
                    </div>
                    <div className="home-post-section">
                        <img loading="lazy" className="home-post-section-image-l" src={softwareCompany} alt=''/>
                    </div>
                    {/*  TWO SPANS */}
                        <div className="home-post-barrier">
                            
                        </div>
                </div>
                <div className={props.darkMode? 'home-post graydark-background-90deg': 'home-post yellow-darkgray'}>
                    <div className={props.language==='ar' ? "home-post-section bidi-text" : "home-post-section"}>
                        <h1 className={props.darkMode ? "home-post-section-h1 white" : "home-post-section-h1 black"} style={{fontWeight: '400'}}>
                            {getTranslation(props.language).home.post_4.title}
                        </h1>
                        <p className={props.darkMode ? "home-post-section-p white" : "home-post-section-p black"} style={{fontWeight: '400', fontSize: '1.8rem'}}> 
                            {getTranslation(props.language).home.post_4.subtitle}                        </p>
                    </div>
                    <div className="home-post-section">
                        <img loading="lazy" id="mobileframe" src={customSoftware} style={{width: '500px', height: '500px'}} alt=''/>
                    </div>
                    <div className="home-post-barrier">
                            
                        </div>
                </div>
                {/* <div className="home-post dark-background">
                    <div className="home-post-section">
                        <div className="acalogo-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img loading="lazy" id="acalogo" src={isHovered ? acaLogoCyan : acaLogoWhite} alt=''/>
                            <h2>SÎMURX</h2>
                        </div>
                        <div className="titles">
                            <h3 className="first_title"> A Beacon of Science</h3>
                            <h3 className="second_title"> And Technology.</h3>
                        </div>
                    </div>
                    <div className="home-post-section">
                        <img loading="lazy" id="mobileframe" src={mobileFrame} alt=''/>
                    </div>
                    <div className="home-post-end">
                        <div className="home-post-barrier">
                            
                        </div>
                    </div>
                </div> */}
            </div>
            <GoToTop />
        </div>
    )
}

export default Home;