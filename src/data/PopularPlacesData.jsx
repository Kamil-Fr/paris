import "../scss/_popularPlaces.scss"
import PopularPlaces from "../components/Recommendations/PopularPlaces.jsx";
import TourEiffel4 from "../images/TourEiffel4.jpg";
import ImgParisAbout from "../images/ImgParisAbout.jpg";
import NotreDame from "../images/NotreDame.jpg";
import Pantheon from '../images/Pantheon.jpg';
import Three from "../images/Three.jpg"
import ChampsElysees from "../images/ChampsElysees.jpg";


function PopularPlacesData() {
    return (
        <div className="popularPlaces" >
            <h1 >Popular Places</h1>
            <p className="Sec-title">You can discover popular places in Paris!</p>
            <div className="placesCard">
                <PopularPlaces
                    image={TourEiffel4}
                    heading="Eiffel Tower"
                    text="Paris's iconic iron marvel, the Eiffel Tower, soars above the city, offering panoramic views of the Seine and landmarks below, a symbol of romance and architectural prowess."
                />
                <PopularPlaces
                    image={ImgParisAbout}
                    heading="Louvre Museum"
                    text="The Louvre, a majestic palace turned museum, shelters the world's artistic treasures, including the enigmatic Mona Lisa, within its opulent walls, making it an art lover's sanctuary."
                />
                <PopularPlaces
                    image={NotreDame}
                    heading="Notre-Dame Cathedral"
                    text="Gothic elegance defines Notre-Dame Cathedral, with its magnificent rose windows and intricate façade, a spiritual and architectural masterpiece in the heart of Paris."
                />
                <PopularPlaces
                    image={Pantheon}
                    heading="Panthéon"
                    text="A neoclassical gem, the Panthéon honors France's luminaries, providing a serene resting place for Rousseau, Voltaire, and other revered figures, a temple of intellectual legacy."
                />
                <PopularPlaces
                    image={Three}
                    heading="Arc de Triomphe"
                    text="Standing tall at the Champs-Élysées' summit, the Arc de Triomphe commemorates heroic victories and pays homage to fallen soldiers, an enduring symbol of French resilience."
                />
                <PopularPlaces
                    image={ChampsElysees}
                    heading="Champs-Élysées"
                    text="Paris's iconic avenue, Champs-Élysées, exudes elegance and culture, with its theaters, cafes, and luxury boutiques, epitomizing the city's refined charm and vibrant spirit."
                />
            </div>
        </div>
    )
}

export default PopularPlacesData