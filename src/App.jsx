import "./scss/main.scss";
import {Route, Routes} from "react-router-dom";
import Home from "./route/Home.jsx";
import About from "./route/About.jsx";
import History from "./route/History.jsx";
import Recommendations from "./route/Recommendations.jsx";
import Planner from "./route/Planner.jsx";
import Contact from "./route/Contact.jsx";
import MyAccount from "./route/MyAccount.jsx";


function App() {

    return (
        <>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/history" element={<History/>}/>
                    <Route path="/recommendations" element={<Recommendations/>}/>
                    <Route path="/planner" element={<Planner/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/myaccount" element={<MyAccount/>} />

                </Routes>
            </div>
        </>
    )
}

export default App