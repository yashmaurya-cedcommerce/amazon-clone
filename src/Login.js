import React from 'react'
import { Link } from 'react-router-dom'

export default function Login(props) {
    return (
        <div className='loginPageContainer'>

            <img src="/images/registerLogo.png" alt="" className='registerLogo' />

            <div className='loginForm'>

                <p className='loginFormHeading'>Sign in</p>

                <div className='loginInputContainer'>
                    <p className='loginInputLabel'>Mobile Phone Number</p>
                    <input type="number" className='loginPhoneInput' id="loginPhoneInputID" placeholder='Enter Phone Number' />
                </div>

                <div className='loginInputContainer'>
                    <p className='loginInputLabel'>Password</p>
                    <input type="password" className='loginPasswordInput' id="loginPasswordInputID" placeholder='Enter Password' />
                </div>

                <p id='loginErrorDisplay'></p>

                <button className='loginSubmitBtn' onClick={(event)=>props.submitLogin(event)}>Continue</button>

                <p className='loginTerms'>By continuing, you agree to Amazon's <a href="/#">Conditions of Use</a> and <a href="/#">Privacy Notice</a>.</p>

                <p className='loginHelp'><a href='/#'>Need Help?</a></p>

            </div>

            <div className='loginRegisterDiv'>

                <p className='askRegister'>New to Amazon?</p>
                <Link to={{pathname: '/register'}}><button className='loginRegisterBtn'>Create Your Amazon Account</button></Link>

            </div>

        </div>
    )
}
