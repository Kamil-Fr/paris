import Navigation from "../components/Navigation.jsx";
import MainView from "../components/MainView.jsx";
import Two from "../images/Two.jpg";
import Footer from "../components/Footer.jsx";
import HistoryParis from "../components/HistoryParis.jsx";

function History () {
    return(
        <>
            <Navigation />
            <MainView
                clName="mainView-next"
                mainImg={Two}
                title="History of Paris"
                btnMainView="noshow"
                imgMainView="imgMainView-next"
            />
            <HistoryParis/>
            <Footer/>
        </>
    )
}



export default History;