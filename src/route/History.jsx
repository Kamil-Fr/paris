import Navigation from "../components/Navigation.jsx";
import MainView from "../components/MainView.jsx";
import HistoryImg from "../images/HistoryImg.webp";

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
        </>
    )
}



export default History;