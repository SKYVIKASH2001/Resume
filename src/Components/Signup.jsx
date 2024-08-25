import React from 'react';
import  './Signup.css';

function Signup(props) {
    return (
        <>
           <div className="first-container-sign">
            <h1 className='head'>Sign Up</h1>
            <div className="details">
                <input type="text" placeholder='First Name' className='inputs' />
               
                <input type="text" placeholder='Last Name' className='inputs' />
                
                <input type="text" placeholder='Email' className='inputs' />
                
                <input type="text" placeholder='Mob Number' className='inputs' />
                
                <input type="text" placeholder='Password' className='inputs' /><br />
                
                <button className='btn'>Sign Up</button>

            </div>

           </div>
        </>
    );
}

export default Signup;