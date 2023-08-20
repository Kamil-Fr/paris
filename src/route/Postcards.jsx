import Navigation from "../components/Navigation.jsx";
import MainView from "../components/MainView.jsx";
import PostcardsImg from "../images/PostcardsImg.webp";

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
        </>
    )
}



export default Postcards;