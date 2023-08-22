/*
import { useState } from 'react';
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
