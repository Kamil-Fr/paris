import '/src/scss/_formInput.scss';
import LoginFormInput from './LoginFormInput.jsx';
import SuccessSign from './SuccessSign.jsx';
import MainImg from "/src/images/MainImg.jpg"

const LoginForm = ({ isSubmitted, onFormSwitch }) => {
    return (
        <>
            <div className='form-container'>

                                <div className='form-content-left form-img-2'>
                    <img src={MainImg} alt='spaceship' />
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



