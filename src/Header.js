import React from 'react';
import './Header.css';
import './Sidebar.css'; // Import or define your CSS styles
import Sidebar from './Sidebar';
import HomeIcon from './icons/home.png'
import HomeIconDark from './icons/home-dark.png'
import CodeIcon from './icons/code.png'
import CodeIconDark from './icons/code-dark.png'
import AcaIcon from './icons/acalogo-light.png'
import AcaIconDark from './icons/acalogo-dark.png'
import { getTranslation } from "./i18n";
import { Link } from 'react-router-dom';
import OutsideClick from './OutsideClick';



function Header(props) {

  const boxRef = React.useRef(null);
  const toggleClick = OutsideClick(boxRef);
 
  function handleFunctionLogoElementIn(logoId){
    var logo_square = document.getElementById(logoId);
    logo_square.style.transition = ".15s";
    // logo_square.style.backgroundColor = "whitesmoke";
    // logo_square.style.borderRadius = "10%";
    // logo_square.style.marginTop = '5px';
    // logo_square.style.marginRight = '5px';
    // logo_square.style.background = 'green';

  }
  function handleFunctionLogoElementOut(logoId){
    var logo_square = document.getElementById(logoId);
    logo_square.style.transition = ".5s";
    // logo_square.style.marginTop = '5px';
    // logo_square.style.backgroundColor = "#04d3ff";
    // logo_square.style.marginRight = '0px';
    // logo_square.style.marginBottom = '2px';
  }
  function handleLogoMouseIn(){
    handleFunctionLogoElementIn("logo1");
    handleFunctionLogoElementIn("logo2");
    handleFunctionLogoElementIn("logo3");
    handleFunctionLogoElementIn("logo4");
    handleFunctionLogoElementIn("logo5");
    
  }
  function handleLogoMouseOut(){
    handleFunctionLogoElementOut("logo1");
    handleFunctionLogoElementOut("logo2");
    handleFunctionLogoElementOut("logo3");
    handleFunctionLogoElementOut("logo4");
    handleFunctionLogoElementOut("logo5");
  }
  return (
    <>
    <div  className={props.darkMode ? "header-container header-container-dark" : "header-container"}>
        <div className='header-leftside'>
            <div className='logo-container' onMouseEnter={() => handleLogoMouseIn()} onMouseLeave={() => handleLogoMouseOut()}>
                <div className='left-logo-container'>
                    <div className='square' id='logo2'></div>
                    <div className='square' id='logo4'></div>
                    {/* <img id='logo1' className='logo' src={logo_2} alt='image'/>
                    <img id='logo2' className='logo' src={logo_4} alt='image'/> */}
                    
                </div>
                <div className='right-logo-container'>
                    <div className='square' id='logo1'></div>
                    <div className='square' id='logo3'></div>
                    <div className='square' id='logo5'></div>
                    {/* <img id='logo3' className='logo' src={logo_1} alt='image'/>
                    <img id='logo4' className='logo' src={logo_3} alt='image'/>
                    <img id='logo5' className='logo' src={logo_5} alt='image'/> */}
                </div>
            </div>
            <div className='header-titles'>
                <h1>{getTranslation(props.language).header.title}</h1>
                <h4>{getTranslation(props.language).header.subtitle}</h4>
            </div>

        </div>
        <div className="header-rightside">
            <nav  className={props.darkMode ? "navbar dark-nav" : "navbar"}>
                <ul className='nav-items'>
                  <Link to='/' className={props.darkMode? 'white header-link': 'black header-link'}>
                    <li className={props.language==='ar' ? "nav-item hide-800 bidi-text" : "nav-item hide-800"}>
                        {props.darkMode ? (<img className='nav-icon' src={HomeIconDark}  alt=''/>):( <img className='nav-icon' src={HomeIcon} alt=''/>)}
                        <span>{getTranslation(props.language).header.navbar.home}</span>
                    </li>
                  </Link>
                  <Link to='/our_services' className={props.darkMode? 'white header-link': 'black header-link'}>
                    <li className={props.language==='ar' ? "nav-item hide-800 bidi-text" : "nav-item hide-800"}>
                      {props.darkMode ? (<img className='nav-icon' src={CodeIconDark} alt=''/>):( <img className='nav-icon' src={CodeIcon} alt=''/>)}
                      <span>{getTranslation(props.language).header.navbar.our_services}</span>
                    </li>
                  </Link>
                  <Link to='/academy' className={props.darkMode? 'white header-link': 'black header-link'}>
                    <li className={props.language==='ar' ? "nav-item hide-800 bidi-text" : "nav-item hide-800"}>
                    {props.darkMode ? (<img className='nav-icon' src={AcaIconDark} alt=''/>):( <img className='nav-icon' src={AcaIcon} alt=''/>)}
                        <span>{getTranslation(props.language).header.navbar.academy}</span>
                    </li>
                  </Link>
                    <li className='nav-item'>
                        <span>
                        <div onClick={props.toggleSidebar} backgroundColor className="toggle-button" ref={boxRef}>
                        {props.darkMode ? (<>
                            <span className="bar" style={{backgroundColor: '#ffffff'}}></span>
                            <span className="bar" style={{backgroundColor: '#ffffff'}}></span>
                            <span className="bar" style={{backgroundColor: '#ffffff'}}></span>
                        </>
                            
                        ):( 
                        
                            <>
                            <span className="bar" style={{backgroundColor: '#000000'}}></span>
                            <span className="bar" style={{backgroundColor: '#000000'}}></span>
                            <span className="bar" style={{backgroundColor: '#000000'}}></span>                         
                        </>)}
                        </div>
                        </span>
                    </li>
                </ul>
            </nav>
        </div>
      
      {/* <div className='login-container'>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <h2>hhh</h2>
            <input id="username" type="text" value="username" onChange={event => setUsername(event.target.value)} placeholder="Username" required
          />
        </div>
        <div>
          <h2>hhh</h2>
          <input id="password" type="password" value="password" onChange={event => setPassword(event.target.value)} placeholder="Password" required/>

        </div>
        <div>
        <input id="submit" type="submit" />
        <span> or you can <a>signUp</a> if you don't have credentials.</span>
        </div>
      </form>
    </div> */}
                    
    </div>
    <Sidebar darkMode={props.darkMode}
    isSidebarOpen={props.isSidebarOpen}
    toggleSidebar = {props.toggleSidebar}
    toggleDarkMode={props.toggleDarkMode}
    language={props.language}
    changeLanguage={props.changeLanguage} 
    toggleClick = {toggleClick}
    />
    </>

  );
}

export default Header;
