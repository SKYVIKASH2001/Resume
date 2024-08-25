import React from 'react';
import { Link } from 'react-router-dom';

function Notfound(props) {
    return (
        <>
          <h1>404 Error - Page Not Found</h1>
           <Link to='/'><button>Go to Home</button></Link>
        </>
    );
}

export default Notfound;