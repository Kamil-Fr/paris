import '../scss/_navigation.scss';
import aboutImage from '../images/1.png'

function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <li><img src={aboutImage} alt="About" /> About</li>
                <li><img src={aboutImage} alt="History" /> History</li>
                <li><img src={aboutImage} alt="Recommendations" /> Recommendations</li>
                <li><img src={aboutImage} alt="Planner" /> Planner</li>
                <li><img src={aboutImage} alt="Your Account" /> Your Account</li>
            </ul>
        </nav>
    );
}

export default Navigation;
