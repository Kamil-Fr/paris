import Navigation from "../components/Navigation.jsx";
import MainView from "../components/MainView.jsx";

function Home() {
    return (
        <>
            <Navigation/>
            <MainView
            clName="mainView"
            mainImg="https://plus.unsplash.com/premium_photo-1672252617591-cfef963eeefa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
            title="Paris visit"
            text="It is time to plan a trip!"
            btnText="Ready to plan? Let's go!"
            url="#/planner"
            btnMainView="show"
            imgMainView="imgMainView-home"
            />
        </>
    )
}


export default Home;