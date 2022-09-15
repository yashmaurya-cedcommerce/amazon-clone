import React from 'react'
import { Link } from 'react-router-dom'

export default function Register(props) {
    return (
        <div className='registerContainer'>

            <img src="/images/registerLogo.png" alt="" className='registerLogo' />

            <div className='registerForm'>

                <p className='registerFormHeading'>Create Account</p>

                <div className='inputContainer'>
                    <p className='inputLabel'>Your name</p>
                    <input type="text" className='nameInput' id="nameInputID" placeholder='First and last name' />
                </div>

                <div className='inputContainer'>
                    <p className='inputLabel'>Mobile Number</p>
                    <div className='numberInputDiv'>
                        <select id="countrySelect">
                            <option value="IN">IN +91</option>
                            <option value="ID">ID +92</option>
                        </select>
                        <input type="number" className='numberInput' id='numberInputID' placeholder='Mobile number' />
                    </div>
                </div>

                <div className='inputContainer'>
                    <p className='inputLabel'>Email (optional)</p>
                    <input type="email" className='emailInput' id='emailInputID' />
                </div>

                <div className='inputContainer'>
                    <p className='inputLabel'>Password</p>
                    <input type="password" className='passwordInput' id='passwordInputID' placeholder='At least 6 characters' />
                    <p className='passwordMsg'>Passwords must be at least 6 characters.</p>
                </div>

                <p className='formMsg'>We will send you a text to verify your phone.
                    Message and Data rates may apply.</p>

                <p id='errorDisplay'></p>

                <button className='registerSubmitBtn' onClick={(event)=>props.submitRegister(event)}>Continue</button>

                <hr />

                <p className='loginOption'>Already have an account? <Link to={{pathname: '/login'}} className='loginOptionLink'>Sign in</Link></p>

                

            </div>

        </div>
    )
}
