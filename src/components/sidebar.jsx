import { Link } from "react-router-dom";
import Logo from "../assets/images/play-button-6694069_1280.png"

const Sidebar = () => {
    return ( 
        <aside className="aside">
            <div className="side-header">
                <div className="brand">
                    <img className="logo" src={Logo} alt="Logo image" />
                    <h2 className="brand-name">Streamr</h2>
                </div>
                <div className="profile">
                    <img className="logo" src={Logo} alt="Logo image" />
                </div>
            </div>
            <div className="side-body">
                <ul className="side-list">
                    <li className="side-item"><Link to="/">Dashboard</Link></li>
                    <li className="side-item"><Link to="/upload">Upload</Link></li>
                    <li className="side-item"><Link to="/livestream">Live Stream</Link></li>
                    <li className="side-item"><Link to="/analytics">Analytics</Link></li>
                </ul>
            </div>
        </aside>
     );
}
 
export default Sidebar;