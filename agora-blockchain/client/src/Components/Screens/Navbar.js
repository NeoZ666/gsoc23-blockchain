import { Link } from "react-router-dom";
import '../styles/Navbar.scss';
import Toggle from "../Screens/utilities/Toggle.js"
// import ThemeToggle from "../Screens/utilities/Toggle.js";

function Navbar({header, infoText, pictureUrl}) {
	return (
        <nav className="shadow-sm">
            <div className="navbarUserInfo">
                <img src={pictureUrl} alt="profile-pic" className="navbarProfilePic"/>
                <font size = "2" className="navbarUserText">
                    <span>{header}</span>
                    <span className="text-muted navbarAddress">{infoText}</span>
                </font>
            </div>

            <div className="navbarMenuOption" style={{justifyContent:"flex-end"}}>
                <div><Toggle/></div>
                <img src="/assets/settings.png" className="navbarMenuIcon navbarMenuLeft" alt="settings"/>
                <Link to="/"><img src="/assets/logout.png" className="navbarMenuIcon" alt="logout"/></Link>
            </div>
        </nav>
	)
}

export default Navbar;
