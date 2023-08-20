import Navigation from "../components/Navigation.jsx";
import MainView from "../components/MainView.jsx";
import MainImg from "../images/MainImg.jpg"

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
        </>
    )
}



export default About;