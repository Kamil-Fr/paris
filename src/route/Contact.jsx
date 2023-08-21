import Navigation from "../components/Navigation.jsx";
import ContactImg from "../images/ContactImg.webp";
import MainView from "../components/MainView.jsx";
import Footer from "../components/Footer.jsx";

function Contact () {
    return(
        <>
            <Navigation />
            <MainView
                clName="mainView-next"
                mainImg={ContactImg}
                title="Contact"
                btnMainView="noshow"
            />
            <Footer/>
        </>
    )
}



export default Contact;