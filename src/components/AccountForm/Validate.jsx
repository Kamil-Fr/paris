export default function Validate({username, email, password, password2}) {
    let errors = {};

    if (!username.trim()) {
        errors.username = 'Username required';
    }
     /*else if (!/^[A-Za-z]+/.test(values.name.trim())) {
       errors.name = 'Enter a valid name';
     }*/

    if (!email) {
        errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Email address is invalid';
    }
    if (!password) {
        errors.password = 'Password is required';
    } else if (password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more';
    }

    if (!password2) {
        errors.password2 = 'Password is required';
    } else if (password2 !== password) {
        errors.password2 = 'Passwords do not match';
    }
    return errors;
}