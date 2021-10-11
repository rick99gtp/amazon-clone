import './Login.css';
import logo from '../assets/amazon-logo-white.jpg';

const Login = () => {
    return (
        <div className='login'>
            <img src={logo} alt="Amazon Logo" />
            <div className='login-container'>
                <form>
                    <h1>Sign-In</h1>
                    <p>Email</p>
                    <input id='login-email' className='login-input' type='text' name='email' />
                    <p>Password</p>
                    <input id='login-password' className='login-input' type='text' />
                    <div id='login-btn' className='login-button'>Sign In</div>
                </form>
                <p>By signing-in, you agree with my Amazon Clone Conditions of Use and Privacy Notice</p>
                <div className='login-button login-createaccount'>Create an Amazon Account</div>
            </div>
        </div>
    )
};

export default Login;