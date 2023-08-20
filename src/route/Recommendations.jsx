import Navigation from "../components/Navigation.jsx";
import MainView from "../components/MainView.jsx";
import RecommendationsImg from "../images/RecommendationsImg.jpg";

function Recommendations () {
    return(
        <>
            <Navigation />
            <MainView
                clName="mainView-next"
                mainImg={RecommendationsImg}
                title="Recommendations"
                btnMainView="noshow"
            />
        </>
    )
}



export default Recommendations;