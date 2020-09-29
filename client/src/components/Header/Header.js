import React from 'react';
import './Header.scss'
import { Link } from 'react-router-dom'
//components
import Title from '../Title/Title';
import Navbar from '../../components/Navbar/Navbar';

const Header = props => {



    return (
        <div className='background'>
            <Navbar logo='MARC BOURREAU' links={<Link to='/about'>About</Link>} whiteLinks />

            <div className='header'>
                <Title title="Trouves Ici Tous Les Cours d'Histoire Et De Géographie Des Sections Collège" />
                {/* <img alt="" src='https://lh3.googleusercontent.com/EdrznbVa_EV1flSpEnA__oab0QpVW9h15iWP1BLOvVdwZ1ySw6JCQzYiu4eZA9f_FBHlIRsoURu5kjdOWhdunV0Ep7FIjc5QhPNc9Q=w1180-e365-rw-lo-l100' /> */}

            </div>

        </div>


    )
};

export default Header;
