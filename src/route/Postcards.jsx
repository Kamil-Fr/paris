import Navigation from "../components/Navigation.jsx";
import MainView from "../components/MainView.jsx";
import PostcardsImg from "../images/PostcardsImg.webp";
import Footer from "../components/Footer.jsx";

function Postcards () {
    return(
        <>
            <Navigation />
            <MainView
                clName="mainView-next"
                mainImg={PostcardsImg}
                title="Postcards"
                btnMainView="noshow"
            />
            <Footer/>
        </>
    )
}



export default Postcards;