/*import { useState } from 'react';
import '/src/scss/_formInput.scss';
import LoginFormInput from './LoginFormInput.jsx';
import SuccessSign from './SuccessSign.jsx';
import ContactIMG from "/src/images/ContactImg.webp"

const LoginForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
            <div className='form-container'>
                <span className='close-btn'>×</span>
                <div className='form-content-left'>
                    <img src={ContactIMG} alt='spaceship' />
                </div>
                {!isSubmitted ? (
                    <LoginFormInput submitForm={submitForm} />
                ) : (
                    <SuccessSign />
                )}
            </div>
        </>
    );
};

export default LoginForm;*/

/*import {useState} from "react";
import '/src/scss/_formInput.scss';
import LoginFormInput from './LoginFormInput.jsx';
import SuccessSign from './SuccessSign.jsx';
import ContactIMG from "/src/images/ContactImg.webp";
import { Redirect } from "react-router-dom";
import Validate from "./Validate.jsx";
import useForm from "./UseForm.jsx";

const LoginForm = ({ onFormSwitch, onSuccess }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        handleLogin,
        Validate
    );
    const [redirectToSuccess, setRedirectToSuccess] = useState(false);
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    function handleLogin() {

         const isLoginSuccessful = Validate;


         if (isLoginSuccessful) {
             setIsSubmitted(true);
             setRedirectToSuccess(true);
           onSuccess();
         }
    }


       return (
        <>
            <div className='form-container'>
                <span className='close-btn'>×</span>
                <div className='form-content-left'>
                    <img src={ContactIMG} alt='spaceship' />
                </div>
                <form onSubmit={handleSubmit} className='form' noValidate>
                    {/!* ... reszta kodu ... *!/}
                    <button className='form-input-btn' type='submit'>
                        Sign up
                    </button>
                </form>
                {!isSubmitted ? (
                    <LoginFormInput
                        onSwitchForm={onFormSwitch}
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                    />
                ) : (
                    redirectToSuccess ? <Redirect to="/myaccount" /> : <SuccessSign />
                )}
            </div>
        </>
    );
};

export default LoginForm;*/

/*import '/src/scss/_formInput.scss';
import LoginFormInput from './LoginFormInput.jsx';
import SuccessSign from './SuccessSign.jsx';
import ContactIMG from "/src/images/ContactImg.webp"
import { FormEvent, FunctionComponent, useState } from "react";


/!*interface LoginProps {

}*!/

const LoginForm = ({ isSubmitted, onFormSwitch }) => {
    return (
        <>
            <div className='form-container'>
                <span className='close-btn'>×</span>
                <div className='form-content-left'>
                    <img src={ContactIMG} alt='spaceship' />
                </div>
                {!isSubmitted ? (
                    <LoginFormInput onSwitchForm={onFormSwitch} />
                ) : (
                    <SuccessSign />
                )}
            </div>
        </>
    );
};

export default LoginForm;*/

import '/src/scss/_formInput.scss';
import LoginFormInput from './LoginFormInput.jsx';
import SuccessSign from './SuccessSign.jsx';
import ContactIMG from "/src/images/ContactImg.webp"

const LoginForm = ({ isSubmitted, onFormSwitch }) => {
    return (
        <>
            <div className='form-container'>
                <span className='close-btn'>×</span>
                <div className='form-content-left'>
                    <img src={ContactIMG} alt='spaceship' />
                </div>
                {!isSubmitted ? (
                    <LoginFormInput onSwitchForm={onFormSwitch} />
                ) : (
                    <SuccessSign />
                )}
            </div>
        </>
    );
};

export default LoginForm;



