import React from 'react';
import './Sidebar.css'

import OutsideClick from "./OutsideClick.js";
import { useRef } from "react";

import ContactUs from './icons/contact.png';
import ContactUsDark from './icons/contact-dark.png';

import Information from './icons/information.png';
import InformationDark from './icons/information-dark.png';

import Services from './icons/code.png';
import ServicesDark from './icons/code-dark.png';

import Blog from './icons/blog.png';
import BlogDark from './icons/blog-dark.png';

import Sun from './icons/sun.png';
import SunDark from './icons/sun-dark.png';

import Moon from './icons/moon.png';
import MoonDark from './icons/moon-dark.png';

import Language from './icons/language.png';
import LanguageDark from './icons/language-dark.png';

import JoinUs from './icons/join.png'
import JoinUsDark from './icons/join-dark.png'

import HomeIcon from './icons/home.png'
import HomeIconDark from './icons/home-dark.png'

import AcaIcon from './icons/acalogo-light.png'
import AcaIconDark from './icons/acalogo-dark.png'

import { getTranslation } from "./i18n";
import { Link } from 'react-router-dom';



function Sidebar(props) {


  const boxRef = React.useRef(null);
  const boxOutsideClick = OutsideClick(boxRef);

  const [sidebarItem_home,setSidebarHome] = React.useState("sidebar-item");
  const [sidebarItem_academy,setSidebarAcademy] = React.useState("sidebar-item");
  const [sidebarItem_contactUs,setSidebarContactUs] = React.useState("sidebar-item");
  const [sidebarItem_aboutUs,setSidebarAboutUs] = React.useState("sidebar-item");
  const [sidebarItem_joinUs,setSidebarJoinUs] = React.useState("sidebar-item");
  const [sidebarItem_ourServices,setSidebarOurServices] = React.useState("sidebar-item");
  const [sidebarItem_blog,setSidebarBlog] = React.useState("sidebar-item");
  const [sidebarItem_darkLightMode,setSidebarDarkLightMode] = React.useState("sidebar-item");
  const [sidebarItem_language,setSidebarLanguage] = React.useState("sidebar-item");

  const [isHovering_home,setIsHoveringHome] = React.useState(false);
  const [isHovering_academy,setIsHoveringAcademy] = React.useState(false);
  const [isHovering_contactUs,setIsHoveringContactUs] = React.useState(false);
  const [isHovering_aboutUs,setIsHoveringAboutUs] = React.useState(false);
  const [isHovering_JoinUs,setIsHoveringJoinUs] = React.useState(false);
  const [isHovering_ourServices,setIsHoveringOurServices] = React.useState(false);
  const [isHovering_blog,setIsHoveringBlog] = React.useState(false);
  const [isHovering_darkLightMode,setIsHoveringDarkLightMode] = React.useState(false);
  const [isHovering_language,setIsHoveringLanguage] = React.useState(false);
  const [darkModeChanged,setDarkModeChanged] = React.useState(0);

  const [isClicked_language,setIsClickedLanguage] = React.useState(false);

  function handleLanguageClick(){
    setIsClickedLanguage(prevState => !prevState)
  }
  function handleClickDarkModeButton(){
    setDarkModeChanged((prev_val)=> {return prev_val+1});
    props.toggleDarkMode();
  }
  function changeSidebarItemLayoutEnter(i){
    if(i===1){
      setIsHoveringHome(()=> {return true});
      setSidebarHome(()=>{
        return props.darkMode ? `sidebar-item sidebar-item-light` : `sidebar-item sidebar-item-dark`;
      })

    }else if(i===2){
      setIsHoveringAcademy(()=> {return true});
      setSidebarAcademy(()=>{
        return props.darkMode ? `sidebar-item sidebar-item-light` : `sidebar-item sidebar-item-dark`;
      })
    }
    else if(i===3){
      setIsHoveringOurServices(()=> {return true});
      setSidebarOurServices(()=>{
        return props.darkMode ? `sidebar-item sidebar-item-light` : `sidebar-item sidebar-item-dark`;
      })
    }
    else if(i===4){
      setIsHoveringContactUs(()=> {return true});
      setSidebarContactUs(()=>{
        return props.darkMode ? `sidebar-item sidebar-item-light` : `sidebar-item sidebar-item-dark`;
      })
    }
    else if(i===5){
      setIsHoveringJoinUs(()=> {return true});
      setSidebarJoinUs(()=>{
        return props.darkMode ? `sidebar-item sidebar-item-light` : `sidebar-item sidebar-item-dark`;
      })
    }else if(i===6){
      setIsHoveringBlog(()=> {return true});
      setSidebarBlog(()=>{
          return props.darkMode ? `sidebar-item sidebar-item-light` : `sidebar-item sidebar-item-dark`;
        })
    }else if(i===7){
      setIsHoveringDarkLightMode(()=> {return true});
      setSidebarDarkLightMode(()=>{
          return props.darkMode ? `sidebar-item sidebar-item-light` : `sidebar-item sidebar-item-dark`;
        })
      }else if(i===8){
        setIsHoveringAboutUs(()=> {return true});
        setSidebarAboutUs(()=>{
        return props.darkMode ? `sidebar-item sidebar-item-light` : `sidebar-item sidebar-item-dark`;
      })
    }else if(i===9){
        setIsHoveringLanguage(()=> {return true});
        setSidebarLanguage(()=>{
        return props.darkMode ? `sidebar-item sidebar-item-light` : `sidebar-item sidebar-item-dark`;
      })
    }
  }

  function changeSidebarItemLayoutLeave(i){
    if(i===1){
      setIsHoveringHome(()=> {return false});
      setSidebarHome(()=>{
        return props.darkMode ? `sidebar-item sidebar-item-dark` : `sidebar-item sidebar-item-light`;
      })

    }else if(i===2){
      setIsHoveringAcademy(()=> {return false});
      setSidebarAcademy(()=>{
        return props.darkMode ? `sidebar-item sidebar-item-dark` : `sidebar-item sidebar-item-light`;
      })
    }else if(i===3){
      setIsHoveringOurServices(()=> {return false});
      setSidebarOurServices(()=>{
        return props.darkMode ? `sidebar-item sidebar-item-dark` : `sidebar-item sidebar-item-light`;
      })
    }else if(i===4){
      setIsHoveringContactUs(()=> {return false});
      setSidebarContactUs(()=>{
        return props.darkMode ? `sidebar-item sidebar-item-dark` : `sidebar-item sidebar-item-light`;
      })
    }else if(i===5){
      setIsHoveringJoinUs(()=> {return false});
      setSidebarJoinUs(()=>{
        return props.darkMode ? `sidebar-item sidebar-item-dark` : `sidebar-item sidebar-item-light`;
      })
    }else if(i===6){
      setIsHoveringBlog(()=> {return false});
      setSidebarBlog(()=>{
          return props.darkMode ? `sidebar-item sidebar-item-dark` : `sidebar-item sidebar-item-light`;
        })
    }else if(i===7){
      setIsHoveringDarkLightMode(()=> {return false});
      setDarkModeChanged(()=> {return 0});
      setSidebarDarkLightMode(()=>{
          return props.darkMode ? `sidebar-item sidebar-item-dark` : `sidebar-item sidebar-item-light`;
        })
      }else if(i===8){
        setIsHoveringAboutUs(()=> {return false});
        setSidebarAboutUs(()=>{
            return props.darkMode ? `sidebar-item sidebar-item-dark` : `sidebar-item sidebar-item-light`;
          })
        }else if(i===9){
        setIsHoveringLanguage(()=> {return false});
        setSidebarLanguage(()=>{
        return props.darkMode ? `sidebar-item sidebar-item-dark` : `sidebar-item sidebar-item-light`;
      })
    }
  }


  React.useEffect(()=>{
    if( (boxOutsideClick && props.toggleClick) )
      if(props.isSidebarOpen){
         props.toggleSidebar();
        return;

      }
    },[boxOutsideClick , props.toggleClick]);


  return (
    <div>
      <div ref={boxRef} className={`sidebar ${props.isSidebarOpen ? 'open' : ''} ${props.darkMode ? "dark-sidebar" : " "}`}>
        <div className={props.darkMode ? "sidebar-content dark-sidebar-content" : "sidebar-content"}>
          <ul className={props.language==='ar' ? "sidebar-items bidi-text" : "sidebar-items"}>
          <Link to='/' className={props.darkMode? 'white sidebar-link  show-800': 'black sidebar-link show-800'} onClick={()=>props.toggleSidebar()}>
              <li className={sidebarItem_home} onMouseEnter={() => changeSidebarItemLayoutEnter(1)} onMouseLeave={() => changeSidebarItemLayoutLeave(1)}>
                {isHovering_home^props.darkMode ? (<img loading="lazy" className='sidebar-icon' src={HomeIconDark} alt=''/>):( <img loading="lazy" className='sidebar-icon' alt='' src={HomeIcon}/>)}
                <span className='sidebar-icon-text'>{getTranslation(props.language).sidebar.home}</span>
              </li>
            </Link>
            {/* TO SHOW THE ACADEMY BUTTON PLEASE UNCOMMENT THE TEXT BELOW */}
            {/* <a href='/academy' className={props.darkMode? 'display-none white sidebar-link show-800': 'display-none black sidebar-link show-800'}> */}
            <Link to='/academy' className={props.darkMode? 'white sidebar-link show-800': 'black sidebar-link show-800'} onClick={()=>props.toggleSidebar()}>
              <li className={sidebarItem_academy} onMouseEnter={() => changeSidebarItemLayoutEnter(2)} onMouseLeave={() => changeSidebarItemLayoutLeave(2)}>
                {isHovering_academy^props.darkMode ? (<img loading="lazy" className='sidebar-icon' src={AcaIconDark} alt=''/>):( <img loading="lazy" className='sidebar-icon' alt='' src={AcaIcon}/>)}
                <span className='sidebar-icon-text'>{getTranslation(props.language).sidebar.academy}</span>
              </li>
            </Link>
            <Link to='/our_services' className={props.darkMode? 'white sidebar-link show-800': 'black sidebar-link show-800'} onClick={()=>props.toggleSidebar()}>
              <li className={sidebarItem_ourServices} onMouseEnter={() => changeSidebarItemLayoutEnter(3)} onMouseLeave={() => changeSidebarItemLayoutLeave(3)}>
                {isHovering_ourServices^props.darkMode ? (<img loading="lazy" className='sidebar-icon' src={ServicesDark} alt=''/>):( <img loading="lazy" className='sidebar-icon' alt='' src={Services}/>)}
                <span className='sidebar-icon-text'>{getTranslation(props.language).sidebar.our_services}</span>
              </li>
            </Link>
            <Link to='/contact_us' className={props.darkMode? 'white sidebar-link': 'black sidebar-link'} onClick={()=>props.toggleSidebar()}>
              <li className={sidebarItem_contactUs} onMouseEnter={() => changeSidebarItemLayoutEnter(4)} onMouseLeave={() => changeSidebarItemLayoutLeave(4)}>
                {isHovering_contactUs^props.darkMode ? (<img loading="lazy" className='sidebar-icon' src={ContactUsDark} alt=''/>):( <img loading="lazy" className='sidebar-icon' alt='' src={ContactUs}/>)}
                <span className='sidebar-icon-text'>{getTranslation(props.language).sidebar.contact_us}</span>
              </li>
            </Link>
            <Link to='join_us' className={props.darkMode? 'white sidebar-link': 'black sidebar-link'} onClick={()=>props.toggleSidebar()}>
              <li className={sidebarItem_joinUs} onMouseEnter={() => changeSidebarItemLayoutEnter(5)} onMouseLeave={() => changeSidebarItemLayoutLeave(5)} onClick={()=>props.toggleSidebar()}>
                {isHovering_JoinUs^props.darkMode ? (<img loading="lazy" className='sidebar-icon' src={JoinUsDark} alt=''/>):( <img loading="lazy" className='sidebar-icon' alt='' src={JoinUs}/>)}
                <span className='sidebar-icon-text'>{getTranslation(props.language).sidebar.join_us}</span>
              </li>
            </Link>
            <Link to='/blog' className={props.darkMode? 'display-none white sidebar-link': 'display-none black sidebar-link'} onClick={()=>props.toggleSidebar()}>
              <li className={sidebarItem_blog} onMouseEnter={() => changeSidebarItemLayoutEnter(6)} onMouseLeave={() => changeSidebarItemLayoutLeave(6)}>
                {isHovering_blog^props.darkMode ? (<img loading="lazy" className='sidebar-icon' src={BlogDark} alt=''/>):( <img loading="lazy" className='sidebar-icon'alt='' src={Blog}/>)}
                <span className='sidebar-icon-text'>{getTranslation(props.language).sidebar.blog}</span>
              </li>
            </Link>
            <li className={sidebarItem_darkLightMode} onMouseEnter={() => changeSidebarItemLayoutEnter(7)} onMouseLeave={() => changeSidebarItemLayoutLeave(7)} onClick={handleClickDarkModeButton} id='sidebar-darkmode-toggle'>
              {props.language === 'ar'?
              (
                <React.Fragment>
                <span className='light-dark-span'>{getTranslation(props.language).sidebar.dark}</span>
                {
                  darkModeChanged%2 ===1 ? (
                    props.darkMode ? (
                      <img loading="lazy" className="sidebar-icon" src={MoonDark} alt="" />
                    ) : (
                      <img loading="lazy" className="sidebar-icon" alt="" src={Moon} />
                    )
                  ) : (
                    isHovering_darkLightMode ^ props.darkMode ? (
                      <img loading="lazy" className="sidebar-icon" src={MoonDark} alt="" />
                    ) : (
                      <img loading="lazy" className="sidebar-icon" alt="" src={Moon} />
                    )
                  )
                }
              </React.Fragment>
              )
              :(
                  <React.Fragment>
                  <span className='light-dark-span'>{getTranslation(props.language).sidebar.light}</span>
                  {
                  darkModeChanged%2 ===1 ? (
                    props.darkMode ? (
                      <img loading="lazy" className="sidebar-icon" src={SunDark} alt="" />
                    ) : (
                      <img loading="lazy" className="sidebar-icon" alt="" src={Sun} />
                    )
                  ) : (
                    isHovering_darkLightMode ^ props.darkMode ? (
                      <img loading="lazy" className="sidebar-icon" src={SunDark} alt="" />
                    ) : (
                      <img loading="lazy" className="sidebar-icon" alt="" src={Sun} />
                    )
                  )
                }
                </React.Fragment>
                )
              }
              <div className="dark-light-button" >
                  <input type="checkbox" id="darkmode-toggle" checked={props.darkMode}/>
                  <label id="darkmode-toggle-label" htmlFor="darkmode-toggle" onClick={handleClickDarkModeButton}/>
              </div>

              {props.language === 'ar'?
              (
                <React.Fragment>
                <span className='light-dark-span'>{getTranslation(props.language).sidebar.light}</span>
                {
                  darkModeChanged%2 ===1 ? (
                    props.darkMode ? (
                      <img loading="lazy" className="sidebar-icon" src={SunDark} alt="" />
                    ) : (
                      <img loading="lazy" className="sidebar-icon" alt="" src={Sun} />
                    )
                  ) : (
                    isHovering_darkLightMode ^ props.darkMode ? (
                      <img loading="lazy" className="sidebar-icon" src={SunDark} alt="" />
                    ) : (
                      <img loading="lazy" className="sidebar-icon" alt="" src={Sun} />
                    )
                  )
                }
              </React.Fragment>
              )
              :(
                  <React.Fragment>
                  <span className='light-dark-span'>{getTranslation(props.language).sidebar.dark}</span>
                  {
                  darkModeChanged%2 ===1 ? (
                    props.darkMode ? (
                      <img loading="lazy" className="sidebar-icon" src={MoonDark} alt="" />
                    ) : (
                      <img loading="lazy" className="sidebar-icon" alt="" src={Moon} />
                    )
                  ) : (
                    isHovering_darkLightMode ^ props.darkMode ? (
                      <img loading="lazy" className="sidebar-icon" src={MoonDark} alt="" />
                    ) : (
                      <img loading="lazy" className="sidebar-icon" alt="" src={Moon} />
                    )
                  )
                }
                </React.Fragment>
                )
              }
            </li>
            <Link to='/about_us' className={props.darkMode? 'white sidebar-link': 'black sidebar-link'} onClick={()=>props.toggleSidebar()}>
              <li className={sidebarItem_aboutUs} onMouseEnter={() => changeSidebarItemLayoutEnter(8)} onMouseLeave={() => changeSidebarItemLayoutLeave(8)}>
                {isHovering_aboutUs^props.darkMode ? (<img loading="lazy" className='sidebar-icon' src={InformationDark} alt=''/>):( <img loading="lazy" className='sidebar-icon' alt='' src={Information}/>)}
                <span className='sidebar-icon-text'>{getTranslation(props.language).sidebar.about_us}</span>
              </li>
            </Link>
            <a onClick={handleLanguageClick} className={props.darkMode? 'white sidebar-link': 'black sidebar-link'}>
              <li className={sidebarItem_language} onMouseEnter={() => changeSidebarItemLayoutEnter(9)} onMouseLeave={() => changeSidebarItemLayoutLeave(9)}>
                {isHovering_language^props.darkMode ? (<img loading="lazy" className='sidebar-icon' src={LanguageDark} alt=''/>):( <img loading="lazy" className='sidebar-icon' alt='' src={Language}/>)}
                <span className='sidebar-icon-text'>{getTranslation(props.language).sidebar.language}</span>
              </li>
            </a>
            {isClicked_language ?
            <ul className= 'language-list'>
              <li onClick={()=> {props.changeLanguage('ar'); props.toggleSidebar(); setIsClickedLanguage(false)}} className={props.darkMode ? `sidebar-item sidebar-item-light` : `sidebar-item sidebar-item-dark`} >
                <span>‣ العربية</span>
              </li>
              <li onClick={()=> {props.changeLanguage('ku'); props.toggleSidebar(); setIsClickedLanguage(false)}} className={props.darkMode ? `display-none sidebar-item sidebar-item-light` : `display-none sidebar-item sidebar-item-dark`} >
                <span>‣ Kurdî</span>
              </li>
              <li onClick={()=> {props.changeLanguage('en'); props.toggleSidebar(); setIsClickedLanguage(false)}} className={props.darkMode ? `sidebar-item sidebar-item-light` : `sidebar-item sidebar-item-dark`} >
                <span>‣ English</span>
              </li>
            </ul>
              : <></>}
          </ul>
        </div>
      </div>
      <div className={props.isSidebarOpen? 'overlay' : ''} />
    </div>
  );
}

export default Sidebar;