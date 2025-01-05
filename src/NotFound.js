import { Link } from "react-router-dom";
import './NotFound.css';

function NotFound(){
    return(
    <div className="notfound-message">
      <h1>404 - Page Not Found</h1>
      <p>The requested page does not exist.</p>
      <Link to="/">Go back to Home Page</Link>
    </div>
    )
}

export default NotFound;