/*
import { useState } from 'react';
import '/src/scss/_formInput.scss';
import FormInput from './FormInput.jsx';
import SuccessSign from './SuccessSign.jsx';
import MainImg from "/src/images/MainImg.jpg"

const FormSignup = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
            <div className='form-container'>
                <span className='close-btn'>×</span>
                <div className='form-content-left'>
                    <img src={MainImg} alt='spaceship' />
                </div>
                {!isSubmitted ? (
                    <FormInput submitForm={submitForm} />
                ) : (
                    <SuccessSign />
                )}
            </div>
        </>
    );
};

export default FormSignup;*/

import '/src/scss/_formInput.scss';
import FormInput from './FormInput.jsx';
import SuccessSign from './SuccessSign.jsx';
import MainImg from "/src/images/MainImg.jpg"

const FormSignup = ({ isSubmitted, onFormSwitch }) => {
    return (
        <>
            <div className='form-container'>
                <span className='close-btn'>×</span>
                <div className='form-content-left'>
                    <img src={MainImg} alt='spaceship' />
                </div>
                {!isSubmitted ? (
                    <FormInput onSwitchForm={onFormSwitch} />
                ) : (
                    <SuccessSign />
                )}
            </div>
        </>
    );
};

export default FormSignup;
