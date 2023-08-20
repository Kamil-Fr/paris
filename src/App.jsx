import "./scss/main.scss";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import History from "./components/History.jsx";
import Recommendations from "./components/Recommendations.jsx";
import Postcards from "./components/Postcards.jsx";
import Contact from "./components/Contact.jsx";


function App() {

    return (
        <>
            <div className="app">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/history" element={<History/>}/>
                <Route path="/recommendations" element={<Recommendations/>}/>
                <Route path="/postcards" element={<Postcards/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
                    </div>
                    </>
                    )
                }

export default App