import Navigation from "../components/Navigation.jsx";
import MainView from "../components/MainView.jsx";
import One from "../images/One.jpg";
import Footer from "../components/Footer.jsx";
import PopularPlacesData from "../data/PopularPlacesData.jsx";
import MyPlacesData from "../data/MyPlacesData.jsx";


function Recommendations () {
    return(

        <>
            <Navigation />
            <MainView
                clName="mainView-next"
                mainImg={One}
                title="Recommendations"
                btnMainView="noshow"
                imgMainView="imgMainView-next"
            />
            <PopularPlacesData/>
            <MyPlacesData/>
            <Footer/>
        </>

)}




export default Recommendations;