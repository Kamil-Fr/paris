
import Headerr from "./components/Headerr.jsx";
import Slider from "./components/Slider.jsx";
import Recommendations from "./components/Recommendations.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./scss/main.scss"

function App() {


    return (
        <>
            <div className="app">
                <Headerr/>
                <Slider/>
                <Recommendations/>
                <Contact/>
                <Footer/>
            </div>
        </>
    )
}

export default App
