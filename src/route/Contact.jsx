import Navigation from "../components/Navigation.jsx";
import Five from "../images/Five.jpg";
import MainView from "../components/MainView.jsx";
import Footer from "../components/Footer.jsx";
import ContactForm from "../components/ContactForm.jsx";

function Contact () {
    return(
        <>
            <Navigation />
            <MainView
                clName="mainView-next"
                mainImg={Five}
                title="Contact"
                btnMainView="noshow"
                imgMainView="imgMainView-next"
            />
            <ContactForm/>
            <Footer/>
        </>
    )
}

export default Contact;