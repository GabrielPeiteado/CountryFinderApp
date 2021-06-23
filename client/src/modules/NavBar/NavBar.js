import React, { useEffect } from 'react';
import './Nav.css';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Filtros from '../Filtros/Filtros.js';
import {filtroCont, getByName, getCountries} from '../../actions/countriesActions';


function Nav() {
    return (
        <div className='containerNav'>
            <nav className='nav'>
                <a href="/home/!">
                    <img className='imgNav' src="https://acegif.com/wp-content/uploads/globe.gif" alt="not found" />
                    <span className='title'>Country Finder App</span>
                </a>
                <Link to='/home/about' className='Abtme'>About me</Link>
                    <ul className='navFilter'>
                        <li className='filterTitle'>
                            &#9776;
                            <ul className='ul2'>
                                <li><Filtros /></li>
                            </ul>
                        </li>
                    </ul>
            </nav>
        </div>
    )
}


export default Nav