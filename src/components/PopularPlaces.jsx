import "../scss/_popularPlaces.scss"
import PopularPlacesData from "../data/PopularPlacesData.jsx";
import MainImg from "../images/MainImg.jpg"
import HistoryImg from "../images/HistoryImg.webp";

function PopularPlaces() {
    return (
        <div className="popularPlaces">
            <h1>Popular Places</h1>
            <p>You can discover popular places in Paris!</p>
            <div className="placesCard">
                <PopularPlacesData
                    image={MainImg}
                    heading="Eiffel Tower"
                    text="The Eiffel Tower (French: tour Eiffel) is a wrought-iron lattice tower on the Champ
                    de Mars in Paris, France. Constructed from 1887, it is named after the engineer Gustave Eiffel,
                    whose company designed and built the tower."
                />
                <PopularPlacesData
                    image={MainImg}
                    heading="Eiffel Tower"
                    text="The Eiffel Tower (French: tour Eiffel) is a wrought-iron lattice tower on the Champ
                    de Mars in Paris, France. Constructed from 1887, it is named after the engineer Gustave Eiffel,
                    whose company designed and built the tower."
                />
                <PopularPlacesData
                    image={HistoryImg}
                    heading="Eiffel Tower"
                    text="The Eiffel Tower (French: tour Eiffel) is a wrought-iron lattice tower on the Champ
                    de Mars in Paris, France. Constructed from 1887, it is named after the engineer Gustave Eiffel,
                    whose company designed and built the tower."
                />
                <PopularPlacesData
                    image={HistoryImg}
                    heading="Eiffel Tower"
                    text="The Eiffel Tower (French: tour Eiffel) is a wrought-iron lattice tower on the Champ
                    de Mars in Paris, France. Constructed from 1887, it is named after the engineer Gustave Eiffel,
                    whose company designed and built the tower."
                />
                <PopularPlacesData
                    image={MainImg}
                    heading="Eiffel Tower"
                    text="The Eiffel Tower (French: tour Eiffel) is a wrought-iron lattice tower on the Champ
                    de Mars in Paris, France. Constructed from 1887, it is named after the engineer Gustave Eiffel,
                    whose company designed and built the tower."
                />
                <PopularPlacesData
                    image={HistoryImg}
                    heading="Eiffel Tower"
                    text="The Eiffel Tower (French: tour Eiffel) is a wrought-iron lattice tower on the Champ
                    de Mars in Paris, France. Constructed from 1887, it is named after the engineer Gustave Eiffel,
                    whose company designed and built the tower."
                />
            </div>
        </div>
    )
}

export default PopularPlaces