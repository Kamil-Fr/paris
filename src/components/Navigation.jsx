import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import '../scss/_navigation.scss';
import { NavigationItems } from "../data/NavigationItems.jsx";
import { Link } from "react-router-dom";

function Navigation() {
    const [menuClicked, setMenuClicked] = useState(false)

    const toggleMenu = () => {
        setMenuClicked(!menuClicked);
    }

    return (
        <nav className="header">
            <h1 className="header-logo">Paris visit</h1>
            <div className={`menu-icon`} onClick={toggleMenu}>
                <FontAwesomeIcon icon={menuClicked ? faTimes : faBars} />
            </div>
            <ul className={`navigation ${menuClicked ? 'navigation active' : 'navigation'}`}>
                {NavigationItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.clName} to={item.url}>{item.title}</Link>
                        </li>

                    )
                                        })}
                {/*<button>My Account</button>*/}
            </ul>
        </nav>
    );
}

export default Navigation;
