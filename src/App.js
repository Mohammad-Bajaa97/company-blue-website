import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Cookies from 'js-cookie';
import { getTranslation } from './i18n';
// function authenticateUser(username, password){
//   return true;
// }
function App() {
  // remember the default state by user's device.
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  
  //initial State:
  const [darkMode, setDarkMode] = React.useState(isDarkMode);
  const [language, setLanguage] = React.useState(Cookies.get('language') === "ar" || Cookies.get('language') === "ar" || Cookies.get('language') === "ar" ? Cookies.get('language') : "en");


  

  React.useEffect(() => {
    const savedDarkMode = Cookies.get('darkMode');
    if (savedDarkMode === 'true') {
      setDarkMode(true);
    }
   
  }, []);
  React.useEffect(() => {
    const savedLanguage= Cookies.get('language');
        if (savedLanguage === 'en'||savedLanguage === 'ar' || savedLanguage === 'ku') {
          setLanguage(savedLanguage);
        }
  },[]);

  function toggleDarkMode(){
    setDarkMode(prevMode => !prevMode)
    Cookies.set('darkMode', !darkMode);
  }
  function changeLanguage(languageCode){
    setLanguage(languageCode);
    Cookies.set('language', languageCode);
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // function handleSubmit(event) {
  //   event.preventDefault();
  
  //   // Perform validation or other checks here
  
  //   // Make an API request to authenticate the user
  //   // using the entered username and password
  //   authenticateUser(username, password)
  //     .then(response => {
  //       // Handle successful authentication
  //       // e.g., store session token, redirect, etc.
  //     })
  //     .catch(error => {
  //       // Handle failed authentication
  //       // e.g., display error message, clear input fields, etc.
  //     });
  // }
  return (
    <div className="container">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} language={language} changeLanguage={changeLanguage} toggleSidebar={toggleSidebar}     isSidebarOpen={isSidebarOpen}/>
      <Main darkMode={darkMode} language={language} toggleSidebar={toggleSidebar}/>
      <Footer darkMode={darkMode} language={language} toggleSidebar={toggleSidebar}/>
    </div>
    /* <div className='login-container'>
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
  </div> */
  );
}

export default App;
