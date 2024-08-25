import React from 'react';
import './Template.css';


function Custom(props) {
    return (
        <>
            <div className='first-container'>
            <div className='second-container'>
                <input type="text" placeholder='YOUR NAME' className='first-input '   />
                <input type="text"  placeholder='The roll you are  applying for?' className='second-input'/>
               <div className="detail">
               <ul>
                <li> <input type="text" placeholder='Phone' className='third-input' /></li>
               <li><input type="Email" placeholder='Email' className='third-input' /></li>
               <li><input type="text" placeholder='Linkedin/Portfolio' className='third-input' id='third' /></li>
                <li><input type="text" placeholder='Location' className='third-input'  /></li>
               </ul>
               </div>
               <div className="third-container">
                <input type="text" placeholder='Summary'className='fourth-input' />
                <hr/>
                <input type="text"  className='fourth' placeholder='whats  the one thing that makes you the best candidate for the job?' />
               </div>

               {/* ...../////////// */}
               <div className="tenth-container">
                <input type="text"   placeholder='Assignments & Projects' className='tenth-input'/>
                <hr />
                <input type="text" placeholder='Project Name' className='tenth1' />
                <input type="text" placeholder='Techonologies Used' className='tenth1' />
                <input type="text" placeholder='Roll & Responsibilities' className='tenth1' />
                <input type="text" placeholder='Sources and Helping Tools' className='tenth1' />
                
               </div>
               <div className="fourth-container">
                <input type="text" className='fifth-input' placeholder='Skill' />
                <hr />
                <input type="text" className='fifth' placeholder='Tool/Technology'/>
               </div>
               <div className="fifth-container">
                <input type="text" placeholder='Experience' className='sixth-input' />
                <hr />
                <input type="text" placeholder='Company Name' className='sixth1' />
                <input type="text" placeholder=':Location' className='sixth2' />
                <input type="text" placeholder='Date Period' className='sixth2' />
                <input type="text" placeholder='Title' className='sixth3' />
                <input type="text" placeholder='Company Description'  className='sixth4 ' /><br />
                <input type="text" className='sixth5' placeholder='.Which of your schievements match the job your applying to?' />

               </div>
               <div className="sixth-container">
                <input type="text" className='seventh-input' placeholder='Education' />
                <hr />
                <input type="text" placeholder='University' className='seven1' />
                <input type="text" placeholder='End date' className='seven3' id='seven33' />
                <input type="text" placeholder='Start Date' className='seven3'  id='seven33'/><br />
                <input type="text" placeholder='Degree And Field Of Study  ' className='seven2'/>
                <input type="date" placeholder='start Date' className='seven3' />
                <input type="date" placeholder='End Date' className='seven3' />
                <input type="text" placeholder=' Higher School'  className='seven4'/><br />
                <input type="text" placeholder='Field Of Study' className='seven5' />
                <input type="date" placeholder='End Date' className='seven6' id='seven666' />
                <input type="text" placeholder='End Date' className='seven6' id='seven66' />
    
               </div>
               <div className="seventh-container">
                <input type="text"  placeholder=' Courses & Certificates' className='Ninth-input' />
                <hr />
                <input type="text" placeholder='Course title' className='ninth-input' />
                <input type="text"  placeholder='Date Period' className='ninth1' />
                <input type="Date" className='ninth2' />
                
               </div>
               <div className="Eight-container">
                <input type="text" placeholder='Links' className='Eighth-input' />
                <hr />
                
                    
                    <h3 className='eight1'>Github</h3>
                    <input type="text" className='eight2'/>
                    <h3 className='eight1'>Live Project</h3>
                    <input type="text" className='eight2'/>

                
                
               </div>
            </div>
            </div>
        </>
    );
}

export default Custom;