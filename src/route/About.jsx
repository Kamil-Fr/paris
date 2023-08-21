import Navigation from "../components/Navigation.jsx";
import MainView from "../components/MainView.jsx";
import MainImg from "../images/MainImg.jpg"
import Footer from "../components/Footer.jsx";
import AboutUs from "../components/AboutUs.jsx";

function About () {
    return(
        <>
            <Navigation />
            <MainView
                clName="mainView-next"
                mainImg={MainImg}
                title="About"
                btnMainView="noshow"
            />
            <AboutUs/>
            <Footer/>
        </>
    )
}



export default About;