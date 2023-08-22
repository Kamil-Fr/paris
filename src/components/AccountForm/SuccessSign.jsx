import '/src/scss/_formInput.scss';
import MainImg from "/src/images/MainImg.jpg"
const SuccessSign = () => {
    return (
        <div className='form-content-right'>
            <h1 className='form-success'>You have successfully created your account!</h1>
            <img className='form-img-2' src={MainImg} alt='success-image' />
            <span className='form-input-login'>
          Let's login <a href='/src/route/MyAccount.jsx'>here</a>
        </span>
        </div>
    );
};

export default SuccessSign;