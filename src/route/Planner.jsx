import Navigation from "../components/Navigation.jsx";
import MainView from "../components/MainView.jsx";
import PostcardsImg from "../images/PostcardsImg.webp";
import Footer from "../components/Footer.jsx";
import PlannerTrip from "../components/Planner/PlannerTrip.jsx";


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
            <PlannerTrip/>
            <Footer/>
        </>
    )
}


export default Planner;