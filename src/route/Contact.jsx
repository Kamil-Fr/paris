import Navigation from "../components/Navigation.jsx";
import ContactImg from "../images/ContactImg.webp";
import MainView from "../components/MainView.jsx";
import Footer from "../components/Footer.jsx";
import ContactForm from "../components/ContactForm.jsx";

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
            <ContactForm/>
            <Footer/>
        </>
    )
}



export default Contact;