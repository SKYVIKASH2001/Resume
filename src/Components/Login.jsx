import React from 'react';
import './Login.css'

function Login(props) {
    return (
        <>
          <div className="container">
            <h2>Login</h2>
            <input type="text"  placeholder='Usename or Email' className='usernamee'/>
            <input type="text"  placeholder='Enter your password' className='usernamee'/>
            <button className='btn1'>Log in  </button>
            <p className='para1'>Forgot password</p>
            </div>
        </>
    );
}

export default Login;