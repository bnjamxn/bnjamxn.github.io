import './css/PageNotFound.css';
import {Link } from "react-router-dom";
import {colourChangeClick} from '../Base/Navbar.js'

const PageNotFound = () => {
    return (
        <div className="pagenotfound">
            {colourChangeClick("cookNav")}
            <div className="errorTitle">Page does not exist!</div>
            <div className="errorText">Most likely a broken link... <Link to="/cook">Click here to go back</Link></div>
        </div>
    );
}
 
export default PageNotFound;