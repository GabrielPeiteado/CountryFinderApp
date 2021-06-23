import React from 'react';
import './AboutMe.css';
import me from './foto_pi.jpg';
import gitHubIco from './github-icon.svg';
import linkedInIco from './linkedin-icon-2.svg';

export const AboutMe = () => {
    return (
        <div className='containDiv'>
            <div className="aboutTheApp">
                <h1><strong>About The Country Finder App</strong></h1>
                <p>With this App you can browse through all the countries of the world, 
                filter by habitants, <br/>  
                continent, and tourist activities that you can create 
                yourself in the <strong>activity creation page.</strong></p>

                <p>This is a project that I built on May 2021 using the Rest Countries Api and 
                all the technologies
                I learned during the Soy Henry's Bootcamp. </p>

                <p>For front end development: <br/> 
                <strong> HTML, CSS, React & Redux</strong></p>

                <p>For back end development: <br/> 
                <strong> Node.js & Express</strong></p>

                <p>For the database development: <br/> 
                <strong> Sequelize & postgreSQL.</strong></p>
            </div>
            <div className='aboutMe'>
                
                <span className='MyName'><strong>Gabriel Peiteado</strong></span><br/> 
                <img src={me} className="me"/>
                <p className='parrafo'>Full Stack Development</p>
                <p className='parrafo'>Front End | Back End</p>
                    <div className="icons">
                    <a href="https://www.linkedin.com/in/gabriel-peiteado-5a5982183/">
                    <img src={linkedInIco} className="iconos"/>
                    </a>
                    <a href="https://github.com/GabrielPeiteado">
                    <img src={gitHubIco} className="iconos"/>
                    </a>
                    </div>
		    </div>
        </div>
    )
}
export default AboutMe;