import Navigation from "../components/Navigation.jsx";
import MainView from "../components/MainView.jsx";
import HistoryImg from "../images/HistoryImg.webp";
import Footer from "../components/Footer.jsx";

function History () {
    return(
        <>
            <Navigation />
            <MainView
                clName="mainView-next"
                mainImg={HistoryImg}
                title="History"
                btnMainView="noshow"
            />
            <Footer/>
        </>
    )
}



export default History;