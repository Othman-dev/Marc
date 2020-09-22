import React from 'react';
import './Header.scss'
//components
import Title from '../Title/Title';
import GoDown from '../GoDown/GoDown'

const Header = props => {



    return (
        <div className='header'>
            <div>
                <Title title="Trouvez tous les cours d'Histoire et de Geographie des sections collège" />
                <img alt="" src='https://lh3.googleusercontent.com/EdrznbVa_EV1flSpEnA__oab0QpVW9h15iWP1BLOvVdwZ1ySw6JCQzYiu4eZA9f_FBHlIRsoURu5kjdOWhdunV0Ep7FIjc5QhPNc9Q=w1180-e365-rw-lo-l100' />

            </div>
            <a href='#nav' >
                <GoDown />
            </a>

        </div>
    )
};

export default Header;
