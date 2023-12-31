import Validate from '../AccountForm/Validate.jsx';
import useForm from '../AccountForm/UseForm.jsx';
import '/src/scss/_formInput.scss';


function LoginFormInput ( {onSwitchForm} ) {
    const {handleChange, handleSubmit, values, errors} = useForm(
        onSwitchForm,
        Validate
    );


    return (
        <div className='form-content-right'>
            <form onSubmit={handleSubmit} className='form' noValidate>
                <h1>
                    Get started planning your trip! Log in to your account by filling out the
                    information below.
                </h1>
                <div className='form-inputs'>
                    <label className='form-label'>Username</label>
                    <input
                        className='form-input'
                        type='text'
                        name='username'
                        placeholder='Enter your username'
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>

                <div className='form-inputs'>
                    <label className='form-label'>Password</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <button className='form-input-btn' type='submit'>Log in</button>
                <span className='form-input-login'>
          Do not have an account yet? Register <a onClick={() => onSwitchForm('register')}>here</a>
        </span>
            </form>
        </div>
    );
}

export default LoginFormInput;