import Navigation from "../components/Navigation.jsx";
import MainView from "../components/MainView.jsx";
import RecommendationsImg from "../images/RecommendationsImg.jpg";
import Footer from "../components/Footer.jsx";
import PopularPlacesData from "../data/PopularPlacesData.jsx";
import MyPlacesData from "../data/MyPlacesData.jsx";

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
            <PopularPlacesData/>
            <MyPlacesData/>
            <Footer/>
        </>
    )
}



export default Recommendations;