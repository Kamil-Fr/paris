import '/src/scss/_formInput.scss';
import FormInput from './FormInput.jsx';
import SuccessSign from './SuccessSign.jsx';
import Seven from "/src/images/Seven.jpg"

const FormSignup = ({ isSubmitted, onFormSwitch }) => {
    return (
        <>
            <div className='form-container'>

                <div className='form-content-left form-img-2'>
                    <img src={Seven} alt='spaceship'  />
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

