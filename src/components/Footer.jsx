import '../scss/_footer.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faInstagramSquare} from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
        <div className="footer">
            <div className="top-footer">
                <div>
                    <h1>Paris visit</h1>
                    <p>Plan your fabulous trip!</p>
                </div>
                <div>
                    <a href="https://www.facebook.com/">
                        <FontAwesomeIcon icon={faFacebookSquare}/>
                    </a>
                    <a href="https://www.instagram.com/">
                        <FontAwesomeIcon icon={faInstagramSquare}/>
                    </a>
                </div>
            </div>
            <div className="bottom-footer">
                <div>
                    <h4>Our Website</h4>
                    <a href="#/">Home</a>
                    <a href="#/about">About</a>
                    <a href="#/history">History</a>

                </div>
                <div>
                    <h4>French Websites</h4>
                    <a href="https://www.paris.fr/">Paris Website </a>
                    <a href="https://www.gouvernement.fr/">French Goverment</a>
                                    </div>
                <div>
                    <h4>Your Trip</h4>
                    <a href="#/planner">Planner</a>
                    <a href="#/myaccount">My Account</a>

                </div>
                <div>
                    <h4>Contact</h4>
                    <a href="#/contact">Contact Form</a>

                </div>
            </div>
        </div>

    );
}

export default Footer;
