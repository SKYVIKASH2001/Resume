import React from 'react';
import './Home.css';
import resume2 from '../assets/resume2.jpg'
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <>
          <div className="front-section">
                <div className="content">
                <h1>The Ultimatebr <br /> Resume Builder</h1>
                <p>Build beautiful, recruiter-tested resumes in a few clicks! Our resume builder is powerful and easy to use, with a range of amazing functions. Custom-tailor resumes for any job within minutes. Increase your interview chances and rise above the competition</p>
                <Link to='/template'><button className='btn' >Try For Free</button></Link>
                </div>
                   <div className="front-img">
                   <img src={resume2}alt="" className='img1' />
                   </div>  
                </div>  
        </>
    );
}

export default Home;