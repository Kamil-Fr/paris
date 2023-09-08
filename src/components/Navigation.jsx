import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import '../scss/_navigation.scss';
import {NavigationItems} from "../data/NavigationItems.jsx";
import {Link} from "react-router-dom";

function Navigation() {
    const [menuClicked, setMenuClicked] = useState(false)

    const toggleMenu = () => {
        setMenuClicked(menuClicked=> !menuClicked);
    }

    return (
        <nav className="header">
            <h1 className="header-logo">Paris visit</h1>
            <div className={`menu-icon`} onClick={toggleMenu}>
                <FontAwesomeIcon icon={menuClicked ? faTimes : faBars}/>
            </div>
            <ul className={`navigation ${menuClicked ? 'navigation active' : 'navigation'}`}>
                {NavigationItems.map(({clName, url, title}) => {
                    return (
                        <li key={url}>
                            <Link className={clName} to={url}>{title}</Link>
                        </li>

                    )
                })}
            </ul>
        </nav>
    );
}

export default Navigation;
