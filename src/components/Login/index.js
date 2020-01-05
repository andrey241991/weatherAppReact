import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

const Login = () => {

    const onSubmit = () =>{
    }

    return (
        <div className='login-container'>
            <form>
                <div className='login-wrapper'>
                    <h3 className='login-wrapper-text'>Email</h3>
                    <input type='text' />
                </div>
                <div className='login-wrapper'>
                    <h3 className='login-wrapper-text'>Password</h3>>
                    <input type='text' />
                </div>
                <div className='login-wrapper'>
                    <button onClick={onSubmit}>SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default Login;