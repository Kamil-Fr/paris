/*import { useState } from "react";
import Navigation from "../components/Navigation.jsx";
import MainView from "../components/MainView.jsx";
import Footer from "../components/Footer.jsx";
import HistoryImg from "../images/HistoryImg.webp";
import FormSignup from "../components/AccountForm/FormSignup.jsx";
import LoginForm from "../components/AccountForm/LoginForm.jsx";

/!*const LoginOrSign = () => {
    const [currentForm, setCurrentForm] = useState('login');
    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }
    return (
        <div>
            {currentForm === "login" ? <FormSignup onFormSwitch={toggleForm} /> : <LoginForm onFormSwitch={toggleForm} />}
        </div>
    )
}

function MyAccount () {
        return(
        <>
            <Navigation />
            <MainView
                clName="mainView-next"
                mainImg={HistoryImg}
                title="My Account"
                btnMainView="noshow"
            />
            <LoginOrSign/>
            <Footer/>
        </>
    )
}



export default MyAccount;*!/


const MyAccount = () => {
    const [currentForm, setCurrentForm] = useState('login');
    const toggleForm = (formName) => {
        setCurrentForm(formName);
    };
    const formComponent = currentForm === 'login' ? <FormSignup onSwitchForm={toggleForm} /> : <LoginForm onSwitchForm={toggleForm} />;

    return(
        <>
            <Navigation />
            <MainView
                clName="mainView-next"
                mainImg={HistoryImg}
                title="My Account"
                btnMainView="noshow"
            />
            {formComponent}
            <Footer/>
        </>
    )
}



export default MyAccount;*/

import {useState} from "react";
import Navigation from "../components/Navigation.jsx";
import MainView from "../components/MainView.jsx";
import Footer from "../components/Footer.jsx";
import HistoryImg from "../images/HistoryImg.webp";
import LoginForm from "../components/AccountForm/LoginForm.jsx";
import FormSignup from "../components/AccountForm/FormSignup.jsx";

const MyAccount = () => {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    };

    return (
        <>
            <Navigation />
            <MainView
                clName="mainView-next"
                mainImg={HistoryImg}
                title="My Account"
                btnMainView="noshow"
                imgMainView="imgMainView-next"
            />
            {currentForm === 'login' ? (
                <LoginForm
                    isSubmitted={false}
                    onFormSwitch={() => toggleForm('signup')}
                />
            ) : (
                <FormSignup
                    onFormSwitch={() => toggleForm('login')}
                />

           )}
            <Footer />
        </>
    );
};

export default MyAccount;

