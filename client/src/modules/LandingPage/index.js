import React from 'react';
import {Link} from 'react-router-dom';
import './landing.css';

function LandingPage() {
    return(
        <div className="landP">
            <h1 className='landTitle'>
                Welcome to the Country Finder App!
            </h1>
            <p className='landText'>
                You can find the country you want<br/>
                just clicking on the homepage button!
            </p>
            <Link to='/home/!#'>
                <button className='btnLand'>Homepage</button>
            </Link>
        </div>
    )
}

export default LandingPage;