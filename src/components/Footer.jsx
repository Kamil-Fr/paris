import '../scss/_footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
        <div className="footer">
            <div className="top-footer">
                <div>
                    <h1>Paris visit</h1>
                    <p>Plan your fabulous trip!</p>
                </div>
                <div>
                    <a href="/">
                        <FontAwesomeIcon icon={faFacebookSquare}/>
                    </a>
                    <a href="/">
                        <FontAwesomeIcon icon={faInstagramSquare}/>
                    </a>
                                  </div>
            </div>
                <div className="bottom-footer">
                    <div>
                        <h4>Project</h4>
                        <a href="/">Changelog</a>
                        <a href="/">Status</a>
                        <a href="/">License</a>
                        <a href="/">All versions</a>
                    </div>
                    <div>
                        <h4>Community</h4>
                        <a href="/">First</a>
                        <a href="/">Second</a>
                        <a href="/">Third</a>
                        <a href="/">Fourth</a>
                    </div>
                    <div>
                        <h4>Project</h4>
                        <a href="/">First</a>
                        <a href="/">Second</a>
                        <a href="/">Third</a>
                        <a href="/">Fourth</a>
                    </div>
                    <div>
                        <h4>Project</h4>
                        <a href="/">First</a>
                        <a href="/">Second</a>
                        <a href="/">Third</a>
                        <a href="/">Fourth</a>
                    </div>
                </div>
            </div>

    );
}

export default Footer;
