import Navigation from "../components/Navigation.jsx";
import MainView from "../components/MainView.jsx";
import Four from "../images/Four.jpg"
import Footer from "../components/Footer.jsx";
import AboutUs from "../components/AboutUs.jsx";

function About () {
    return(
        <>
            <Navigation />
            <MainView
                clName="mainView-next"
                mainImg={Four}
                title="About Us"
                btnMainView="noshow"
                imgMainView="imgMainView-next"
            />
            <AboutUs/>
            <Footer/>
        </>
    )
}

export default About;