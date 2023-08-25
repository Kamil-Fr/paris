import Navigation from "../components/Navigation.jsx";
import MainView from "../components/MainView.jsx";
import PostcardsImg from "../images/PostcardsImg.webp";
import Footer from "../components/Footer.jsx";
import PlannerTripS from "../components/Planner/PlannerTripS.jsx";
import Rating from "../components/Planner/Rating.jsx";


function Planner() {
    return(
        <>
            <Navigation />
            <MainView
                clName="mainView-next"
                mainImg={PostcardsImg}
                title="Planner Trip"
                btnMainView="noshow"
                imgMainView="imgMainView-next"
            />
            <PlannerTripS/>
            <Rating/>
            <Footer/>
        </>
    )
}

export default Planner;